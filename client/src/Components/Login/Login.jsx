import React from "react";
import { useState } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import axios from "axios";
import { Card, CardImg, CardBody, CardText } from "reactstrap";
import { Divider } from "@chakra-ui/react";
import NavBars from "../NavBars/NavBars.jsx";
import "../Login/Login.css";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [succesM, setSuccessM] = useState(null);

  const [errorM, setErrorM] = useState(null);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const loginSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3500/api/users/log_in",
        { ...user }
      );
      console.log(response.data);
      setSuccessM(response.data.message);
    } catch (error) {
      setErrorM(error.response.data.message);
    }
  };

  return (
    <div>
      <header className="header">
        <h1>Login</h1>
      </header>
      <NavBars></NavBars>
      <Form onSubmit={loginSubmit}>
        <FormGroup floating>
          <Input
            className="input"
            id="Email"
            name="email"
            value={user.email}
            placeholder="Email"
            type="email"
            onChange={onChangeInput}
          />
          <Label for="exampleEmail" className="label">
            Email
          </Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            className="input"
            id="Password"
            name="password"
            value={user.password}
            placeholder="Password"
            type="password"
            onChange={onChangeInput}
          />
          <Label for="examplePassword" className="label">
            Password
          </Label>
        </FormGroup>{" "}
        <FormGroup className="input">
          <Input name="checkbox" type="checkbox" />
          <Label className="title" check for="Checkbox">
            &#32; Recuérdame
          </Label>
        </FormGroup>{" "}
        <br />
        <Button className="button1">Login &gt;</Button> <br />
        <Button className="button2">&lt; Cancelar</Button>
      </Form>
      <Divider orientation="horizontal" />
      <div
        className="alert alert-primary"
        role="alert"
        style={{ display: succesM ? "block" : "none" }}
      >
        {succesM}
      </div>
      <div
        className="alert alert-warning"
        role="alert"
        style={{ display: errorM ? "block" : "none" }}
      >
        {errorM}
      </div>
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
              src="https://picsum.photos/200/300"
              style={{
                height: "190px",
              }}
            />
            <CardBody>
            <CardText>
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
              height: "190px",
            }}
          >
            <CardImg
              alt="Card image"
              src="https://picsum.photos/200/300"
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
              src="https://picsum.photos/200/300"
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
              src="https://picsum.photos/200/300"
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
              height: "195px",
            }}
          >
            <CardImg
              alt="Card image"
              src="https://picsum.photos/200/300"
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
              src="https://picsum.photos/200/300"
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

export default Login;
