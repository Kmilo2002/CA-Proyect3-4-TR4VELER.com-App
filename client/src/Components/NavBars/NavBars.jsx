import React from "react";
import "./NavBars.css";

const NavBars = () => {
  const role = localStorage.getItem("role");
  const name = localStorage.getItem("name");
 
  const navHome = () => {
    return (
      <nav className="navbar bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <p className="title">Bienvenido</p>
          <ul>
               <a href="/register"><li>Regístrate</li></a>
               <a href="/login"><li>Inicio de Sesión</li></a>   
            </ul> 
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </nav>
    );
  };

  const navUser = () => {
    return (
      <nav className="navbar bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <p className="title">TRAVELER.com</p>
          <p className="title">Hola, {name} </p>
        </div>
      </nav>
    );
  };

  const navAdmin = () => {
    return (
      <nav className="navbar bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <p className="title">TRAVELER.com</p>
          <p className="title">Hola, {name} </p>
        </div>
      </nav>
    );
  };

  let navbar = role == 0 ? navUser() : role == 1 ? navAdmin() : navHome();

  return <div>{navbar}</div>;
};

export default NavBars;
