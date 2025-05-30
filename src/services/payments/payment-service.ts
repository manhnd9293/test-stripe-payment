import {httpClient} from "@/services/http-client/http-client.ts";

export interface CreateCheckoutSessionResponse {
  clientSecret: string ;
}

export class PaymentService {
  static createCheckoutSession(productId: string) : Promise<CreateCheckoutSessionResponse> {
    return httpClient.post(`/payments/create-checkout-session`, {
      productId
    });
  }
}