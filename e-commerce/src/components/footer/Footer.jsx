import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="footer">
      <div className="main-footer">
        <div>
          <div>
            <h1>Shop Bag</h1>
            <h6>Online Store</h6>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Iusto deserunt reprehenderit
            <br /> ex commodi iste rerum!
          </p>
          <div>
            <a href="">
              <FaFacebookSquare />
            </a>
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <FaSquareXTwitter />
            </a>
          </div>
        </div>
        <div>
          <h3>Quick Links</h3>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>
        <div>
          <h3>Contact Us</h3>
          <h4>Phone:</h4>
          <h5>00201516156151</h5>
          <h4>Address:</h4>
          <h5>123Street, NasrCity, Cairo, Egypt</h5>
        </div>
        <div>
          <h3>Subscribe</h3>
          <p>For Latest News & Updates</p>
          <input type="text" placeholder="Your Email" />
        </div>
      </div>
      <div className="second-footer">
        <img src="src/images/logo.png" alt="LOGO" />
      </div>
    </div>
  );
};

export default Footer;
