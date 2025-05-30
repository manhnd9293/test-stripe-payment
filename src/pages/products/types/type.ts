import {z} from "zod";

export const productFormSchema = z.object({
  name: z.string().min(1, {
    message: "product name must be at least 1 characters.",
  }),
  price: z.string().min(1, {
    message: "price is required",
  }),
})