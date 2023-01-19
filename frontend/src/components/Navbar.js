import React from "react";
import { Link } from "react-router-dom";
import ArgentBankLogo from "../assets/argentBankLogo.png";
import BtnSignIn from "./BtnSignIn";
import BtnLogout from "./BtnLogout";
import Profile from "./Profile";

const Navbar = () => {
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
          {getToken ? (
            <div className="main-nav-item">
              <Profile />
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
