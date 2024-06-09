import {
  salesValidation,
  upadteSalesValidation,
} from "../validation/SalesValidation.js";

import {
  createSales,
  getSales,
  getByIdSale,
  updateSale,
  deleteSale,
  getTotals,
} from "../repositories/SalesRepositories.js";

class SalesController {
  async post(req, res) {
    try {
      const data = salesValidation.parse(req.body);
      const sales = await createSales(data);
      return res.status(200).send(sales);
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  async getAll(req, res) {
    try {
      const sales = await getSales();
      return res.status(200).send(sales);
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  async getId(req, res) {
    try {
      const sales = await getByIdSale(Number(req.params.id));
      return res.status(200).send(sales);
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  async update(req, res) {
    try {
      const data = upadteSalesValidation.parse(req.body);
      const sales = await updateSale(data, Number(req.params.id));
      return res.status(200).send(sales);
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  async remove(req, res) {
    try {
      await deleteSale(Number(req.params.id));
      return res.status(200).send(`Item ${req.params.id} deletado`);
    } catch (error) {
      return res.status(400).send({ error });
    }
  }

  async getTotal(req, res) {
    try {
      const total = await getTotals();
      res.status(200).send(total);
    } catch (error) {
      res.status(400).send({ error: error });
    }
  }
}

export default new SalesController();
