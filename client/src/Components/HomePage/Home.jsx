import React from "react";
import "../HomePage/Home.css";
import {
  Card,
  CardImg,
  Navbar,
} from "reactstrap";

const Home = () => {
  return (
    <div>
      <Navbar className="my-2 nav" color="dark" dark style={{width: "100%", height: "80px"}}>
          <p className="mainTitle">TR4VЄLЄR</p>
      </Navbar>
      <header className="header">
        <h1>Welcome to TR4VЄLЄR.com</h1>
      </header>
      <Card inverse>
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/900/270?grayscale"
          style={{
            width: "100%",
            height: "25vh"
          }}
          
        />
      </Card>
      <div className="BigBox">
        <div className="Box1">
          <Card
            className="my-2"
            color="dark"
            inverse
            style={{
              width: "380px",
              height: "190px",
            }}
          >
              <CardImg  
              alt="Card image"
              src="https://picsum.photos/200/300?grayscale"
              style={{
                height: "190px",
              }}
              />
          </Card>
          <Card
            className="my-2"
            color="dark"
            inverse
            style={{
              width: "380px",
              height: "190px",
            }}
          >
            <CardImg  
              alt="Card image"
              src="https://picsum.photos/200/300?grayscale"
              style={{
                height: "190px",
              }}
              />
          </Card>
          <Card
            className="my-2"
            color="dark"
            inverse
            style={{
              width: "380px",
              height: "190px",
            }}
          >
            <CardImg  
              alt="Card image"
              src="https://picsum.photos/200/300?grayscale"
              style={{
                height: "190px",
              }}
              />
          </Card>
        </div>
        <div className="Box2">
          <Card
            className="my-2"
            color="dark"
            inverse
            style={{
              width: "380px",
              height: "190px",
            }}
          >
            <CardImg  
              alt="Card image"
              src="https://picsum.photos/200/300?grayscale"
              style={{
                height: "190px",
              }}
              />
          </Card>
          <Card
            className="my-2"
            color="dark"
            inverse
            style={{
              width: "380px",
              height: "190px",
            }}
          >
            <CardImg  
              alt="Card image"
              src="https://picsum.photos/200/300?grayscale"
              style={{
                height: "190px",
              }}
              />
          </Card>
          <Card
            className="my-2"
            color="dark"
            inverse
            style={{
              width: "380px",
              height: "190px",
            }}
          >
            <CardImg  
              alt="Card image"
              src="https://picsum.photos/200/300?grayscale"
              style={{
                height: "190px",
              }}
              />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
