import React from "react";
import "./Footer.css"

const Footer = () => {
  const role = localStorage.getItem("role");

  const footerHome = () => {
    return (
      <nav className="navbar bg-dark" data-bs-theme="dark">
        <nav className="navbar-bottom bg-body-tertiary">
          <div className="container-fluid">
            <p className="text">TR4VЄLЄR.com</p>
          </div>
        </nav>
      </nav>
    );
  };

  const footerUser = () => {
    return (
      <nav className="navbar bg-dark" data-bs-theme="dark">
        <nav className="navbar-bottom bg-body-tertiary">
          <div className="container-fluid">
          <p className="text">TR4VЄLЄR.com</p>
          </div>
        </nav>
      </nav>
    );
  };

  const footerAdmin = () => {
    return (
      <nav className="navbar bg-dark" data-bs-theme="dark">
        <nav className="navbar-bottom bg-body-tertiary">
          <div className="container-fluid">
          <p className="text">TR4VЄLЄR.com</p>
          </div>
        </nav>
      </nav>
    )
  };

  let footer =
    role == 0 ? footerUser() : role == 1 ? footerAdmin() : footerHome();
  return (
  <div>
    {footer}
    </div>
  )
};

export default Footer;
