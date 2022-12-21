import React from "react";
import ArgentBankLogo from "../assets/argentBankLogo.png"

const Navbar = () => {
  return (
    <div>
      <nav class="main-nav">
        <a class="main-nav-logo" href="./">
          <img
            class="main-nav-logo-image"
            src={ArgentBankLogo} 
            alt="Argent Bank Logo"
          />
          <h1 class="sr-only">Argent Bank</h1>
        </a>
        <div>
          <a class="main-nav-item" href="./signin">
            <i class="fa fa-user-circle"></i>
            Sign In
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
