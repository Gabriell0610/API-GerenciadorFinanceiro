import zod from "zod";

export const authValidation = zod.object({
  email: zod.string().email(),
  password: zod.string(),
});
