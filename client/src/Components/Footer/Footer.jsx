import React from "react";
import { Link } from "react-router-dom"
import { FiHome } from "react-icons/fi"
// import { RiLuggageDepositLine } from "react-icons/ri"
import "./Footer.css"

const Footer = () => {
  const role = localStorage.getItem("role");

  const footerHome = () => {
    return (
      <nav className="navbar bg-dark" data-bs-theme="dark">
        <nav className="navbar-bottom bg-body-tertiary">
          <div className="container-fluid">
            <p className="text">TR4VЄLЄR.com</p>
            <p className="text1">Todos los derechos reservados®</p>
          </div>
        </nav>
        <Link to = "/"><FiHome className="icons_foot"/></Link>
      </nav>
    );
  };

  const footerUser = () => {
    return (
      <nav className="navbar bg-dark" data-bs-theme="dark">
        <nav className="navbar-bottom bg-body-tertiary">
          <div className="container-fluid">
          <p className="text">TR4VЄLЄR.com</p>
          <p className="text2">Todos los derechos reservados®</p>
          </div>
        </nav>
        {/* <Link ><RiLuggageDepositLine /></Link> */}
        <Link to = "/"><FiHome className="icons_foot"/></Link>
      </nav>
    );
  };

  const footerAdmin = () => {
    return (
      <nav className="navbar bg-dark" data-bs-theme="dark">
        <nav className="navbar-bottom bg-body-tertiary">
          <div className="container-fluid">
          <p className="text">TR4VЄLЄR.com</p>
          <p className="text2">Todos los derechos reservados®</p>
          </div>
        </nav>
        <Link to = "/"><FiHome className="icons_foot"/></Link>
        
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
