import { useContext, useEffect, useState } from "react";
import AuthAxios from "../../configAxios/AuthAxios";
import Loading from "../loading/Loading";
import { Allcontext } from "../../context/Context";
import { FaHeart } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { cart_increment, heart_decrement } from "../../store/cartStore";

const WishList = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setWishListLength } = useContext(Allcontext);
  const { heart_count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  setWishListLength(product.length);

  async function handelWishList() {
    try {
      const { data } = await AuthAxios({
        url: "/wishList",
      });
      setProduct(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  async function deleteWishList(id) {
    try {
      await AuthAxios({
        url: `/wishList/${id}`,
        method: "DELETE",
      });
    } catch (error) {
      console.log(error);
    }
  }
  async function handelCartProduct(id) {
    let cartData = {
      primId: product[id - 1].id,
      title: product[id - 1].title,
      description: product[id - 1].description,
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
    handelWishList();
  }, [heart_count]);
  return (
    <div>
      <div className="wishlistHeader">
        <FaHeart />
        <h1>My Wishlist</h1>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="wishList-container">
          {product.map((data) => (
            <div key={data.id} className="wishList-data">
              <div>
                <img src={data.image} alt="" />
              </div>
              <div className="textData">
                <div className="textBox">
                  <h3>{data.title.substring(1, 35)}</h3>
                  <span>{data.price}$</span>
                </div>
                <div className="iconBox">
                  <span>
                    <FaHeart
                      style={{ color: "red" }}
                      onClick={() => {
                        deleteWishList(data.id);
                        dispatch(heart_decrement());
                      }}
                    />
                  </span>
                  <span>
                    <IoMdCart
                      style={{ color: "black" }}
                      onClick={() => {
                        handelCartProduct(data.id);
                        dispatch(cart_increment());
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishList;
