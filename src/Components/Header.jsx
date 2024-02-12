import Logo from "../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import "../Components/Header.css";
const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="Header">
      <img onClick={() => navigate("/")} src={Logo} alt="logo marvel" />
      <div>
        <button onClick={() => navigate("/characters")}>Personnages</button>
      </div>
      <div>
        <button onClick={() => navigate("/comics")}>Comics</button>
      </div>
    </div>
  );
};

export default Header;
