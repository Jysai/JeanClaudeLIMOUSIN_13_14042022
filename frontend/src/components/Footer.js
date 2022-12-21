import React from "react";
const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <p class="footer-text">Copyright {currentYear} Argent Bank</p>
      </footer>
    </div>
  );
};

export default Footer;
