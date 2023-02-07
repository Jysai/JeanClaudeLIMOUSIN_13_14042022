import React from "react";
import { Link } from "react-router-dom";
import ArgentBankLogo from "../assets/argentBankLogo.png";
import BtnSignIn from "./BtnSignIn";
import BtnLogout from "./BtnLogout";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, saveToken} from "../features/userSlice";
import BtnProfile from "./BtnProfile";
import { authUser } from "../services/authAPI";

const Navbar = () => {

  const user = useSelector(selectUser);
  const getToken = localStorage.getItem("token");

  return (
    <div>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          {" "}
          <img
            className="main-nav-logo-image"
            src={ArgentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          {user.token || getToken ? (
            <div className="main-nav-item">
              <BtnProfile />
              <BtnLogout />
            </div>
          ) : (
            <div className="main-nav-item">
              <BtnSignIn />
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
