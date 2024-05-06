import {
  createUser,
  deleteUser,
  getByIdUsers,
  getUsers,
  updateUser
} from "../repositories/user.js";

class UserController {
  async post(req, res) {
    try {
      const user = await createUser(req.body);
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  async getAll(req, res) {
    try {
      const user = await getUsers();
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  async getId(req, res) {
    try {
      const user = await getByIdUsers(Number(req.params.id));
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  async update(req, res) {
    try {
      const user = await updateUser(req.body, Number(req.params.id));
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  async remove(req, res) {
    try {
      await deleteUser(Number(req.params.id));
      res.status(200).send(`Dado do id ${req.params.id} deletado!!!`);
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

export default new UserController();
