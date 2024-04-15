import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "../src/App.scss";
import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Undefind from "./components/undefind/Undefind";
import Contact from "./components/conatct/Contact";
import ProductList from "./components/productList/ProductList";
import MenClothes from "./components/menClothes/MenClothes";
import WomanClothes from "./components/womanClothes/WomanClothes";
import Jewlery from "./components/jewelery/Jewlery";
import Electronics from "./components/electronics/Electronics";
import SingleProduct from "./components/singleProduct/SingleProduct";
import { Toaster } from "react-hot-toast";
import Cart from "./components/cart/Cart";
import WishList from "./components/wishList/WishList";
import { useState } from "react";
import Auth from "./components/Auth/Auth";
import { ContextProvider } from "./context/Context";
import ReactProtect from "./components/ReactProtect/ReactProtect";

function App() {
  const [prodId, setProdId] = useState(0);
  const Routing = createBrowserRouter([
    { path: "/", element: <Auth /> },
    {
      path: "",
      element: (
        <ReactProtect>
          <Layout />
        </ReactProtect>
      ),
      children: [
        {
          path: "/home",
          element: (
            <ReactProtect>
              <Home />
            </ReactProtect>
          ),
          children: [
            {
              path: "",
              element: <ProductList prodId={prodId} setProdId={setProdId} />,
            },
            { path: "mensClothes", element: <MenClothes /> },
            { path: "women's clothing", element: <WomanClothes /> },
            { path: "jewelery", element: <Jewlery /> },
            { path: "electronics", element: <Electronics /> },
          ],
        },
        {
          path: "About",
          element: (
            <ReactProtect>
              <About />
            </ReactProtect>
          ),
        },
        {
          path: "contact",
          element: (
            <ReactProtect>
              <Contact />
            </ReactProtect>
          ),
        },
        {
          path: "singleProduct/:id",
          element: (
            <ReactProtect>
              <SingleProduct />
            </ReactProtect>
          ),
        },
        {
          path: "cart",
          element: (
            <ReactProtect>
              <Cart prodId={prodId} setProdId={setProdId} />
            </ReactProtect>
          ),
        },
        {
          path: "wishList",
          element: (
            <ReactProtect>
              <WishList />
            </ReactProtect>
          ),
        },
      ],
    },
    { path: "*", element: <Undefind /> },
  ]);
  return (
    <>
      <ContextProvider>
        <RouterProvider router={Routing} />
        <Toaster position="top-right" reverseOrder={false} />
      </ContextProvider>
    </>
  );
}

export default App;
