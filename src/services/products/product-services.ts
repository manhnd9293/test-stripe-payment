import {httpClient} from "@/services/http-client/http-client.ts";
import type {Product} from "@/services/products/types/Product.ts";
import {z} from "zod";
import type {productFormSchema} from "@/pages/products/types/type.ts";

export class ProductServices {
  static getProducts(): Promise<Product[]> {
    return httpClient.get('/products');
  }

  static createProduct(data: z.infer<typeof productFormSchema>): Promise<Product> {
    return httpClient.post('/products', {...data, price: Number(data.price)});
  }
}