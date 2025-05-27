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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/check-out",
    element: <CheckOutPage/>,
  },
  {
    path: "/product-variant",
    element: <ProductVariantPage/>
  }
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
