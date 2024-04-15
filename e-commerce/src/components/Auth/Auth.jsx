import { useState } from "react";
import Collaps from "../collaps/Collaps";
import Login from "../login/Login";
import Register from "../register/Register";

const Auth = () => {
  const [componentId, setComponentId] = useState(1);
  const authData = [
    { id: "1", text: "Login", component: <Login /> },
    {
      id: "2",
      text: "Register",
      component: <Register setComponentId={setComponentId} />,
    },
  ];
  return (
    <div className="auth-container">
      <div className="box-container">
        <div className="btn-container">
          {authData.map((data) => (
            <div key={data.id}>
              <Collaps
                text={data.text}
                id={data.id}
                setComponentId={setComponentId}
                componentId={componentId}
              />
            </div>
          ))}
        </div>
        <div className="form-container">
          {authData.map((data) => (
            <div key={data.id}>
              {componentId == data.id ? data.component : ""}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Auth;
