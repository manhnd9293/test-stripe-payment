import {useQuery} from "@tanstack/react-query";
import {ProductServices} from "@/services/products/product-services.ts";
import {Button} from "@/components/ui/button.tsx";
import {Link, useNavigate} from "react-router";
import {Plus} from "lucide-react";

function Home() {
  const {data} = useQuery({
    queryKey: ['products'],
    queryFn: ProductServices.getProducts
  });

  const navigate = useNavigate();

  return (
    <div className={'p-4'}>
      <div className={'font-bold'}>Home page</div>
      <Button className={'mt-4'}>
        <Link to={'products/new'}>
          <Plus className={'text-white'}/>
        </Link>
      </Button>
      <div className={'font-bold mt-4'}>List products</div>
      <div className={'mt-4'}>
        {
          !data && <div>Load product</div>
        }
        <div>
          {
            data &&
              <div className={'flex gap-4'}>
                {
                  data.map(prod => {
                    return (
                      <div key={prod.id} className={'flex flex-col bg-card px-2 py-4 rounded-md shadow w-32'}>
                        <div className={'font-bold'}>{prod.name}</div>
                        <div className={'text-gray-600 mt-4'}>{prod.price} cents</div>
                        <Button className={'mt-2'}
                                onClick={()=> navigate(`/checkout/${prod.id}`)}>
                          Buy
                        </Button>
                      </div>
                    )
                  })
                }
              </div>
          }
        </div>
      </div>

    </div>
  );
}

export default Home;