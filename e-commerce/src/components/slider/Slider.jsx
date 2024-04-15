import { FaArrowCircleRight } from "react-icons/fa";
const Slider = () => {
  return (
    <div>
      <div className="sliderContainer">
        <div className="slider-data">
          <span className="span-text">Shop Easily</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing
            <br />
            elit.Omnis, adipisicing elit. Omnis,minima.
          </p>
          <a href="#productList-container">
            <span>
              Shop-Now <FaArrowCircleRight />
            </span>
          </a>
        </div>
      </div>
      <div className="slider-img">
        <div>
          <img src="src/images/freestocks.jpg" alt="" />
        </div>
        <div>
          <img src="src/images/priscilla.jpg" alt="" />
        </div>
        <div>
          <img src="src/images/soci.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
