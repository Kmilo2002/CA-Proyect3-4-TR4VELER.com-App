import React, { useState } from "react";
import { Alert, Form, FormGroup, Input, Label, Button } from "reactstrap";
import { Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FiAlertTriangle } from "react-icons/fi";
import axios from "axios";
import "./EraseUser.css";

const EraseUser = () => {
  const [password, setPassword] = useState({
    password: "",
  });

  const token = localStorage.getItem("token");

  const [succesM, setSuccessM] = useState(null);

  const [errorM, setErrorM] = useState(null);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setPassword({ ...password, [name]: value });
    console.log(password);
  };

  const eraseSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.delete("http://localhost:3500/api/user", 
      { data: password,
        headers: {
              Authorization: token,
          }, 
      withCredentials: true,
      });
      console.log(response.data);
      setSuccessM(response.data.message);
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("id");
      localStorage.removeItem("name");

      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch (error) {
      setErrorM(error.response.data.message);
    }
  };

  return (
    <div>
      <Alert color="danger" className="color-red" style={{ display: "block" }}>
        <span className="fw-bold text-black">
          ¿Está seguro de querer borrar su cuenta?
        </span>
      </Alert>
      <Divider orientation="horizontal" />
      <div className="card" style={{ width: "400px", height: "275px" }}>
        <div className="card-body">
          <h1>¡Acción Irreversible!</h1>
          <FiAlertTriangle className="alert2"></FiAlertTriangle>
          <Divider orientation="horizontal" />
          <p className="card-text">
            Si borra su cuenta, perderá el acceso a nuestra aplicación, deberá
            volver a registrarse y perderá todos los ajustes, así como los
            filtros que haya definido hasta el momento. ¿Está seguro de
            continuar?
          </p>
        </div>
      </div>
      <Divider orientation="horizontal" />
      <Form onSubmit={eraseSubmit}>
        <p>Introduzca su cotraseña para borrar su cuenta</p>
        <FormGroup floating>
          <Input
            className="input"
            id="Password"
            name="password"
            value={password.password}
            placeholder="Password"
            type="password"
            onChange={onChangeInput}
          />
          <Label for="examplePassword" className="label">
            Password
          </Label>
        </FormGroup>{" "}
        <Divider orientation="horizontal" />
        <Button className="button3">Borrar Cuenta</Button>
        <br />
        <Link to={"/profile"}>
          <Button className="button1">&lt; Cancelar</Button>
        </Link>
        <div
          className="alert alert-primary"
          role="alert"
          style={{ display: succesM ? "block" : "none" }}
        >
          {succesM}
        </div>
        <div
          className="alert alert-dark"
          role="alert"
          style={{ display: errorM ? "block" : "none" }}
        >
          {errorM}
        </div>
      </Form>
    </div>
  );
};

export default EraseUser;
