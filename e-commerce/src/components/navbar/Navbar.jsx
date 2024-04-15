import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { FaList } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import AuthAxios from "../../configAxios/AuthAxios";
import { Allcontext } from "../../context/Context";
const Navbar = () => {
  const { cart_count } = useSelector((state) => state.counter);
  const [active, setActive] = useState(false);
  const [cartData, setCartData] = useState([]);
  const { wishListLength } = useContext(Allcontext);

  async function fetchCartData() {
    try {
      const { data } = await AuthAxios({ url: "/cart" });
      setCartData(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchCartData();
  }, [cart_count]);

  return (
    <div>
      <div className="nav-container" id="nav-container">
        <img src="src/images/logo.png" alt="logo" className="logo" />
        <div className="links-container">
          <ul>
            <Link to={"/home"} className="navLink">
              Home
            </Link>
            <Link to={"About"} className="navLink">
              About
            </Link>
            <Link to={"contact"} className="navLink">
              Contact
            </Link>
          </ul>
        </div>
        <div className="links-icon" onClick={() => setActive(!active)}>
          <FaList />
        </div>
        <div className="nav-icons">
          <Link to={"/wishList"} className="icons">
            <CiHeart />
          </Link>
          <div className="heart-counter">{wishListLength}</div>
          <Link to={"/cart"} className="icons">
            <IoMdCart />
          </Link>
          <div className="cart-counter">{cartData.length}</div>
          <FaRegUserCircle />
        </div>
      </div>
      <div className={`not_active ${active ? "nav-active" : ""}`}>
        <Link to={"/home"} className="navLink">
          Home
        </Link>
        <Link to={"About"} className="navLink">
          About
        </Link>
        <Link to={"contact"} className="navLink">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
