import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from "@/pages/home/Home.tsx";
import CheckOutPage from "@/pages/checkout/CheckOutPage.tsx";
import ProductVariantPage from "@/pages/product-variants/ProductVariantPage.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import NewProductPage from "@/pages/products/NewProductPage.tsx";
import RootLayout from "@/pages/rootLayout/RootLayout.tsx";
import ProductCheckoutPage from "@/pages/checkout/ProductCheckoutPage.tsx";
import CheckoutSuccessPage from "@/pages/checkout/CheckoutSuccessPage.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "/products/new",
        element: <NewProductPage/>,
      },
      {
        path: "/checkout/:productId",
        element: <ProductCheckoutPage/>,
      },
      {
        path: "/checkout-success",
        element: <CheckoutSuccessPage/>,
      },
      {
        path: "/product-variant",
        element: <ProductVariantPage/>
      }
    ]
  },

]);

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
