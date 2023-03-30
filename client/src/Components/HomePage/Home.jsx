import React from "react";
import "../HomePage/Home.css";
import { Card, CardImg, CardBody, CardText } from "reactstrap";


const Home = () => {
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
              height: "230px",
            }}
          >
              <CardImg  
              alt="Card image"
              src="https://picsum.photos/200/300?grayscale"
              style={{
                height: "190px",
              }}
              />
              <CardBody>
              <CardText className="cardtext">
              Ciudad 1
            </CardText>
            </CardBody>
          </Card>
          <Card
            className="my-2"
            color="dark"
            inverse
            style={{
              width: "380px",
              height: "230px",
            }}
          >
            <CardImg  
              alt="Card image"
              src="https://picsum.photos/200/300?grayscale"
              style={{
                height: "190px",
              }}
              />
              <CardBody>
              <CardText className="cardtext">
              Ciudad 2
            </CardText>
            </CardBody>
          </Card>
          <Card
            className="my-2"
            color="dark"
            inverse
            style={{
              width: "380px",
              height: "230px",
            }}
          >
            <CardImg  
              alt="Card image"
              src="https://picsum.photos/200/300?grayscale"
              style={{
                height: "190px",
              }}
              />
              <CardBody>
              <CardText className="cardtext">
              Ciudad 3
            </CardText>
            </CardBody>
          </Card>
        </div>
        <div className="Box2">
          <Card
            className="my-2"
            color="dark"
            inverse
            style={{
              width: "380px",
              height: "230px",
            }}
          >
            
            <CardImg  
              alt="Card image"
              src="https://picsum.photos/200/300?grayscale"
              style={{
                height: "190px",
              }}
              />
              <CardBody>
            <CardText className="cardtext">
              Ciudad 4
            </CardText>
            </CardBody>
          </Card>
          <Card
            className="my-2"
            color="dark"
            inverse
            style={{
              width: "380px",
              height: "230px",
            }}
          >
            <CardImg  
              alt="Card image"
              src="https://picsum.photos/200/300?grayscale"
              style={{
                height: "190px",
              }}
              />
              <CardBody>
              <CardText className="cardtext">
              Ciudad 5
            </CardText>
            </CardBody>
          </Card>
          <Card
            className="my-2"
            color="dark"
            inverse
            style={{
              width: "380px",
              height: "230px",
            }}
          >
            <CardImg  
              alt="Card image"
              src="https://picsum.photos/200/300?grayscale"
              style={{
                height: "190px",
              }}
              />
              <CardBody>
              <CardText className="cardtext">
              Ciudad 6
            </CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
