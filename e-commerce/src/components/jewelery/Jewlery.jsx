import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import configAxios from "../../configAxios/ConfigAxios";
import { FaArrowCircleRight } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";
import { cart_increment, heart_increment } from "../../store/cartStore";
import Loading from "../loading/Loading";
import AuthAxios from "../../configAxios/AuthAxios";

const Jewlery = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cart_count } = useSelector((state) => state.counter);

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

  async function handelwishList(id) {
    let wishListData = {
      primId: product[id - 1].id,
      title: product[id - 1].title,
      description: product[id].description,
      price: product[id - 1].price,
      image: product[id - 1].image,
    };
    try {
      await AuthAxios({
        url: "/wishList",
        method: "POST",
        data: wishListData,
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    AllProduct();
  }, [cart_count]);
  return (
    <div className="productList-container">
      {loading ? (
        <Loading />
      ) : (
        <div className="product-container">
          {product.map((data) =>
            data.category == "jewelery" ? (
              <div key={data.id} className="product-data">
                <img src={data.image} alt="" />
                <div className="product-details">
                  <h3>{`${data.title.substring(0, 30)}...`}</h3>
                  <p>{`${data.description.substring(0, 50)}...`}</p>
                  <div className="product-price">
                    <h3>{data.price}$</h3>
                    <Link
                      to={`/singleProduct/${data.id}`}
                      className="showMoreBtn"
                    >
                      <span>
                        More <FaArrowCircleRight />
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="product-icons">
                  <CiHeart
                    onClick={() => {
                      handelwishList(data.id);
                      dispatch(heart_increment());
                    }}
                  />
                  <IoMdCart
                    onClick={() => {
                      dispatch(cart_increment());
                      handelCartProduct(data.id);
                    }}
                  />
                </div>
              </div>
            ) : null
          )}
        </div>
      )}
    </div>
  );
};

export default Jewlery;
