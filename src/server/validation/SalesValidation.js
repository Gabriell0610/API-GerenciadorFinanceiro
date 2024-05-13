import zod from "zod";

export const salesValidation = zod.object({
  date_purchase: zod.string(),
  coin: zod.string(),
  value_purchase: zod.number(),
  unity: zod.number(),
  total_money_purchase: zod.number(),
});

export const upadteSalesValidation = zod.object({
  date_sale: zod.string(),
  value_sale: zod.number(),
  unity_sale: zod.number(),
  total_money_sale: zod.number(),
  profit: zod.number(),
});
