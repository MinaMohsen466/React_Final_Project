import { useEffect, useState } from "react";
import configAxios from "../../configAxios/ConfigAxios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cart_increment } from "../../store/cartStore";
import Loading from "../loading/Loading";
import AuthAxios from "../../configAxios/AuthAxios";

const SingleProduct = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { cart_count } = useSelector((state) => state.counter);
  const [loading, setLoading] = useState(true);

  async function AllProduct() {
    try {
      const { data } = await configAxios({ url: "/products" });
      setProduct(data);
      loading(false);
    } catch {
      console.error("Error fetching data:");
      setLoading(false);
    }
  }
  async function handelCartProduct(id) {
    let cartData = {
      primId: product[id - 1].id,
      title: product[id - 1].title,
      description: product[id].description,
      price: product[id - 1].price,
      image: product[id - 1].image,
    };
    try {
      await AuthAxios({
        url: "/cart",
        method: "POST",
        data: cartData,
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    AllProduct();
  }, [cart_count]);
  return (
    <>
      {loading ? (
        <div className="singlePageLoader">
          <Loading />
        </div>
      ) : (
        <div className="singleProduct-container">
          {product.map((data) =>
            data.id == id ? (
              <div key={data.id} className="product-data">
                <img src={data.image} alt="" />
                <div className="product-details">
                  <h2>
                    {data.price}
                    <span>$</span>
                  </h2>
                  <h3>{data.title}</h3>
                  <hr />
                  <p>{data.description}</p>
                  <button
                    onClick={() => {
                      dispatch(cart_increment());
                      handelCartProduct(data.id);
                    }}
                  >
                    <span>add To Cart</span>
                  </button>
                </div>
              </div>
            ) : null
          )}
        </div>
      )}
    </>
  );
};

export default SingleProduct;
