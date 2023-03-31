import React from "react";
import { useState } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import axios from "axios";
import { Card, CardImg, CardBody, CardText } from "reactstrap";
import { Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom"
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
      localStorage.setItem("name", response.data.userFind.name);
      localStorage.setItem("role", response.data.userFind.role);
      localStorage.setItem("token", response.data.accessToken)

      setTimeout(() => {
        window.location.href = "/"
      }, 2000);
      
    } catch (error) {
      setErrorM(error.response.data.message);

      setTimeout(() => {
        window.location.href = "/login"
      }, 1500);
    }
  };

  return (
    <div>
      <header className="header">
        <h1>Login</h1>
      </header>
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
        <Link to = {"/"} ><Button className="button2">&lt; Cancelar</Button></Link>
      </Form>
      <Divider orientation="horizontal" />
      <p>¿No tienes una cuenta? Entonces, <Link to = {"/register"}>Registrate</Link></p>
      <p>¿Haz olvidado tu <Link>contraseña?</Link></p>
      <div
        className="alert alert-primary"
        role="alert"
        style= {{ display: succesM ? "block" : "none" }}
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
              height: "230px",
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
              src="https://picsum.photos/200/300"
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
              src="https://picsum.photos/200/300"
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
              src="https://picsum.photos/200/300"
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
              src="https://picsum.photos/200/300"
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
              src="https://picsum.photos/200/300"
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

export default Login;
