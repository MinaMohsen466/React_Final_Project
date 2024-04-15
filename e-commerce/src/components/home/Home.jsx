import { Link, Outlet } from "react-router-dom";
import Slider from "../slider/Slider";
import { FaArrowTurnUp } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <div className="Home-links">
        <Link to={""} className="links">
          Best Product
        </Link>
        <Link to={"mensClothes"} className="links">
          Men&apos;s Fashion
        </Link>
        <Link to={"women's clothing"} className="links">
          Women&apos;s Fashion
        </Link>
        <Link to={"jewelery"} className="links">
          jewelery
        </Link>
        <Link to={"electronics"} className="links">
          electronics
        </Link>
      </div>
      <Outlet />
      <div className="above">
        <a href="#nav-container">
          <FaArrowTurnUp />
        </a>
      </div>
    </div>
  );
};

export default Home;
