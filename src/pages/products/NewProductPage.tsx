import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ProductServices} from "@/services/products/product-services.ts";
import  {productFormSchema} from "@/pages/products/types/type.ts";
import {useNavigate} from "react-router";
import BackButton from "@/components/common/BackButton.tsx";

function NewProductPage() {

  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {mutateAsync} = useMutation({
    mutationFn: ProductServices.createProduct,
    onSuccess: async ()=> {
      await queryClient.invalidateQueries({
        queryKey: ['products'],
      })
      navigate('/');
    }
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof productFormSchema>>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      name: "",
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof productFormSchema>) {
    console.log(values)
    await mutateAsync(values);
  }
  return (
    <div>
      <div className={'font-bold'}>New Product</div>
      <BackButton/>
      <div className={'w-lg mt-4 bg-white p-4 rounded-md shadow'}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input placeholder="Price" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default NewProductPage;