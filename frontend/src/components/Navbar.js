import React from "react";
import { Link } from "react-router-dom";
import ArgentBankLogo from "../assets/argentBankLogo.png";
import BtnSignIn from "./BtnSignIn";
import BtnLogout from "./BtnLogout";
import { useSelector } from "react-redux";
import { selectUser} from "../features/userSlice";
import BtnProfile from "./BtnProfile";

const Navbar = () => {

  const user = useSelector(selectUser);


  return (
    <div>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
         
          <img
            className="main-nav-logo-image"
            src={ArgentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          {user.token  ? (
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
