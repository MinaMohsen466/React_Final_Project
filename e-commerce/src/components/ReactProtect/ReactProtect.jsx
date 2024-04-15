import { useContext, useEffect } from "react";
import { Allcontext } from "../../context/Context";
import { useNavigate } from "react-router-dom";

const ReactProtect = ({ children }) => {
  const { token } = useContext(Allcontext);
  const navigate = useNavigate();
  const use_Token = localStorage.getItem("use_Token");
  useEffect(() => {
    if (token == null && use_Token == null) {
      navigate("/");
    }
  }, [token, use_Token, navigate]);
  return token != null || use_Token != null ? children : null;
};

export default ReactProtect;
