import {CheckoutProvider} from "@stripe/react-stripe-js";
import {stripe} from "@/config/stripe";
import {PaymentService} from "@/services/payments/payment-service.ts";
import {useParams} from "react-router";
import CheckoutForm from "@/pages/checkout/CheckoutForm.tsx";
import BackButton from "@/components/common/BackButton.tsx";

function ProductCheckoutPage() {

  const {productId} = useParams();
  return (
    <div>
      <div className={'font-bold'}>Checkout</div>
      <BackButton/>
      <CheckoutProvider stripe={stripe}
                        options={{
                          fetchClientSecret: () => PaymentService.createCheckoutSession(productId!).then(response => response.clientSecret!)
                        }}>

        <CheckoutForm />
      </CheckoutProvider>

    </div>
  );
}

export default ProductCheckoutPage;