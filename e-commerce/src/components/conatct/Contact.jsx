import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoMapOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
const Contact = () => {
  return (
    <div className="contact_container">
      <div className="box1">
        <div>
          <IoMapOutline />
          <h3>Address</h3>
          <span>123Street, NasrCity, Cairo, Egypt</span>
        </div>
        <div>
          <IoMailOutline />
          <h3>Email Adress</h3>
          <span>info@mail.com</span>
        </div>
        <div>
          <IoPhonePortraitOutline />
          <h3>Phone</h3>
          <span>+0201516156151</span>
        </div>
      </div>
      <div className="box2">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11595.93004304157!2d31.330707503288266!3d30.060832421890115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1713117036147!5m2!1sar!2seg"></iframe>
      </div>
    </div>
  );
};

export default Contact;
