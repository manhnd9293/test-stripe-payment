import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router";

function CheckoutSuccessPage() {
  return (
    <div className={'w-md mx-auto p-8 bg-white rounded-md shadow flex flex-col items-center'}>
      <div className={'font-bold'}>Payment success</div>
      <div className={'mt-4 text-gray-600'}>Thanks for your payment</div>
      <Button className={'mt-4'}>
        <Link to={'/'}>
          Continue Shopping
        </Link>
      </Button>
    </div>
  );
}

export default CheckoutSuccessPage;