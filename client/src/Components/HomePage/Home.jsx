import React from "react";
import "../HomePage/Home.css";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
  CardHeader,
  CardBody,
  Badge,
  Navbar,
  NavbarBrand,
} from "reactstrap";

const Home = () => {
  return (
    <div>
      <Navbar className="my-2" color="dark" dark>
        <NavbarBrand href="/">
          <img
            alt="logo"
            src="../../../../JPGs/Valknut.jpg"
            style={{
              height: 50,
              width: 50,
            }}
          />
          TR4VЄLЄR
        </NavbarBrand>
      </Navbar>
      <header>
        <h1>Welcome to TR4VЄLЄR.com</h1>
      </header>
      <Badge color="dark">Register</Badge>
      <Badge color="dark">Login</Badge>
      <Card inverse>
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/900/270?grayscale"
          style={{
            height: 350,
          }}
          width="75vh"
        />
        <CardImgOverlay>
          <CardTitle tag="h5">Card Title</CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardImgOverlay>
      </Card>
      <Card
        className="my-2"
        color="dark"
        inverse
        style={{
          width: "18rem",
        }}
      >
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
        </CardBody>
      </Card>
      <Card
        className="my-2"
        color="dark"
        inverse
        style={{
          width: "18rem",
        }}
      >
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
        </CardBody>
      </Card>
      <Card
        className="my-2"
        color="dark"
        inverse
        style={{
          width: "18rem",
        }}
      >
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
        </CardBody>
      </Card>
      <Card
        className="my-2"
        color="dark"
        inverse
        style={{
          width: "18rem",
        }}
      >
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Home;
