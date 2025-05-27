import {CheckoutProvider} from "@stripe/react-stripe-js";
import CheckoutForm from "@/pages/checkout/CheckoutForm.tsx";
import {stripe} from "@/config/stripe";
import PayButton from "@/pages/checkout/PayButton.tsx";


const fetchClientSecret = () => {
  return fetch('http://localhost:8080/api/payment/create-checkout-session', {method: 'POST'})
    .then((response) => response.json())
    .then((json) => json.checkoutSessionClientSecret)
};

function CheckOutPage() {

  return (
    <div>
      <CheckoutProvider
        stripe={stripe}
        options={{fetchClientSecret}}
      >
        <CheckoutForm />
        <div className={'mx-auto w-96 flex justify-center mt-2'}>
          <PayButton/>
        </div>
      </CheckoutProvider>

    </div>
  );
}

export default CheckOutPage;