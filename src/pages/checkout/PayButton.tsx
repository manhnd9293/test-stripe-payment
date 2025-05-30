import React from 'react';
import {useCheckout} from '@stripe/react-stripe-js';
import {Button} from "@/components/ui/button.tsx";
import type {ConfirmError} from "@stripe/stripe-js";

const PayButton = () => {
  const {confirm} = useCheckout();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<ConfirmError | null>(null);

  const handleClick = () => {
    setLoading(true);
    confirm({
      returnUrl: 'http://localhost:5173'
    }).then((result) => {
      if (result.type === 'error') {
        setError(result.error)
      }
      setLoading(false);
    })
  };

  return (
    <div>
      <Button disabled={loading} onClick={handleClick}>
        Checkout
      </Button>
      {error && <div>{error.message}</div>}
    </div>
  )
};

export default PayButton;