import React from "react";
const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <p className="footer-text">Copyright {currentYear} Argent Bank</p>
      </footer>
    </div>
  );
};

export default Footer;
