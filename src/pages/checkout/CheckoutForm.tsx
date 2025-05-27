import {PaymentElement} from '@stripe/react-stripe-js';

function CheckoutForm() {
  // const checkout = useCheckout();
  return (
    <form className={'w-96 mx-auto mt-4'}>
      <PaymentElement options={{layout: 'accordion'}}/>
    </form>
  )
}

export default CheckoutForm;