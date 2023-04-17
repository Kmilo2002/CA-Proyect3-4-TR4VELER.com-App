import React, {useState} from 'react'
import { Alert, Form, FormGroup, Input, Label, Button } from "reactstrap";
import { Divider } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { FiAlertTriangle } from "react-icons/fi"
import axios from "axios";

const EraseLogging = () => {

    const { loggingId } = useParams()

  const [password, setPassword] = useState({
    password: ""
  })

  const token = localStorage.getItem("token")

  const [succesM, setSuccessM] = useState(null);

  const [errorM, setErrorM] = useState(null);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setPassword({ ...password, [name]: value });
    console.log(password);
  };

  const eraseLoggingSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await axios.delete(`http://localhost:3500/api/logging/${loggingId}`, 
        { data: password,
          headers: {
                Authorization: token,
            }, 
        withCredentials: true,
        })
        console.log(response)
        setSuccessM(response.data.message)

        setTimeout(() => {
            window.location.href = "/loggings"
        }, 3000);
    } catch (error) {
        console.log(error.message)
        setErrorM(error.response.data.message)
    }
  }

  return (
    <div>
        <Alert color="danger" className="color-red" style={{ display: "block" }}>
        <span className="fw-bold text-black">
          ¿Está seguro de querer borrar este alojamiento?
        </span>
      </Alert>
      <Divider orientation="horizontal" />
      <div className="card" style={{ width: "400px", height: "275px" }}>
      <div className="card-body">
        <h1>¡Acción Irreversible!</h1>
          <FiAlertTriangle className="alert2"></FiAlertTriangle>
          <Divider orientation="horizontal" />
          <p className="card-text">
            Si borra este alojamiento, deberá volver a registrarlo. 
            ¿Está seguro de continuar?
          </p>
        </div>
      </div>
      <Divider orientation="horizontal" />
      <Form onSubmit={eraseLoggingSubmit}>
        <p>Introduzca su cotraseña para borrar este alojamiento</p>
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
        <Button className="button3" type="submit">Borrar alojamiento</Button>
        <br />
        <Link to={`/loggings/${loggingId}`}>
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
  )
}

export default EraseLogging