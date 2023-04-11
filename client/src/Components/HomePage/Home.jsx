import React from "react";
import Cards from "../Cards/Cards";
import "../HomePage/Home.css";
import { Card, CardImg, Button } from "reactstrap";
import { Divider } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Home = () => {

  const role = localStorage.getItem("role")

  return (
    <div>
      <header className="header">
        <h1>Welcome to TR4VЄLЄR.com</h1>
      </header>
      <Card inverse>
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/900/270?grayscale"
          style={{
            width: "100%",
            height: "25vh",
          }}
        />
      </Card>
      <Divider orientation = "horizontal" />
      {
        role == 1 ? 
        (<div>
          <Link to = {"/loggings"}><Button className="button1">Alojamientos</Button></Link> <br />
          <Link><Button className="button1">Usuarios</Button></Link>
        </div>) : 
        role == 0 ?
        (<div>
          <Link to = {"/loggings_search"}><Button className="button1">Buscar Alojamientos</Button></Link>
        </div>) : 
        (<div>
          <Link to = {"/loggings_search"}><Button className="button1">Buscar Alojamientos</Button></Link>
        </div>)
      }
      <Divider orientation = "horizontal" />    
      <Cards />
    </div>
  );
};

export default Home;
