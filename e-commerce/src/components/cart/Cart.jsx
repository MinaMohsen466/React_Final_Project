import { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import AuthAxios from "../../configAxios/AuthAxios";
import { useDispatch, useSelector } from "react-redux";
import { cart_decrement } from "../../store/cartStore";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Cart = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cart_count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  async function handelCartProduct() {
    try {
      const { data } = await AuthAxios({
        url: "/cart",
      });
      setProduct(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  async function deletCartProduct(id) {
    try {
      await AuthAxios({
        url: `/cart/${id}`,
        method: "DELETE",
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handelCartProduct();
  }, [cart_count]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : product.length == 0 ? (
        <div className="emptyCart">
          <p>Your cart is empty</p>
          <Link to={"/home"}>
            Shop Now <FaRegArrowAltCircleRight />
          </Link>
        </div>
      ) : (
        <div className="cart">
          <div>
            <h1>Cart Product</h1>
          </div>
          <div className="cart-container">
            <div className="cart-box">
              {product.map((data) => (
                <div key={data.id} className="cart-Data">
                  <div className="cartImg">
                    <img src={data.image} alt="" />
                  </div>
                  <div className="product-control">
                    <div>
                      <h3>{data.title.substring(1, 40)}</h3>
                      <p>{data.description.substring(1, 75)}</p>
                      <span>{data.price}$</span>
                    </div>
                    <div>
                      <span
                        onClick={() => {
                          dispatch(cart_decrement());
                          deletCartProduct(data.id);
                        }}
                      >
                        <MdDelete />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-Allprice">
              {product.map((data) => (
                <div key={data.id} className="cart-Price">
                  <h5>{data.title.substring(1, 30)}</h5>
                  <span>{data.price}$</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
