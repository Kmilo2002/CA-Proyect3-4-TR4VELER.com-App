import React from "react";
import { useState } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import axios from "axios";
import { Divider } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom"
import "../Login/Login.css";
import Cards from "../Cards/Cards";

const Login = () => {
  
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  
  const idlogging = localStorage.getItem("idlogging");

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
      localStorage.setItem("id", response.data.userFind._id)
      localStorage.setItem("token", response.data.accessToken)
      localStorage.setItem("banned", response.data.userFind.banned)
      localStorage.setItem("timestamp", response.data.userFind.createdAt)

        if(response.data.userFind.role === 1){
          setTimeout(() => {
            window.location.href = "/"
          }, 2000);
        }
        if(response.data.userFind.role === 0){
          setTimeout(() => {
            window.location.href = `/loggings_search/${idlogging}`
          }, 2000);
        }

        if(!idlogging) {
          setTimeout(() => {
              window.location.href = "/"
          }, 2000)
      } else {
        setTimeout(() => {
        window.location.href = `/loggings_search/${idlogging}`
      }, 2000)}
      
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
        <FormGroup inline>
          <Input type="checkbox" />
          <Label check className="title2">Recuérdame</Label>
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
      <Cards />
    </div>
  );
};

export default Login;
