import React from "react";
import { useState } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom"
import { Divider } from "@chakra-ui/react";
import "./LoggingRegister.css";


const LoggingRegister = () => {
  const [logging, setLogging] = useState({
    location: "",
    name: "",
    title: "",
    description: "",
    price: "",
    map: "",
  });

  const token = localStorage.getItem("token")

  const [succesM, setSuccessM] = useState(null);

  const [errorM, setErrorM] = useState(null);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setLogging({ ...logging, [name]: value });
    console.log(logging);
  };

  const loggingregisterSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3500/api/register/logging",{...logging}, 
        {
          headers: {
            Authorization: token
          }
        });
      console.log(response);
      setSuccessM(response.data.message);

      setTimeout(() => {
        window.location.href = "/loggings"
      }, 3000);
    } catch (error) {
      setErrorM(error.response.data.message);

      setTimeout(() => {
        window.location.href = "/logging_register"
      }, 2000);
    }
  };

  return (
    <div>
      <header className="header">
      <h1>Register for New Loggings</h1>
      </header>
      <Divider orientation = "horizontal" />
      <Form onSubmit={loggingregisterSubmit}>
        <FormGroup floating>
          <Input className="input"
            id="location"
            name="location"
            value={logging.location}
            placeholder="Location"
            type="text"
            onChange={onChangeInput}
          />
          <Label for="Location" className="label">Location</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input className="input"
            id="logginname"
            name="name"
            value={logging.name}
            placeholder="Loggin Name"
            type="text"
            onChange={onChangeInput}
          />
          <Label for="Logging Name" className="label">Logging Name</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input className="input"
            id="title"
            name="title"
            value={logging.title}
            placeholder="Title"
            type="text"
            onChange={onChangeInput}
          />
          <Label for="Title" className="label">Title</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input className="input"
            id="description"
            name="description"
            value={logging.description}
            placeholder="description"
            type="text"
            onChange={onChangeInput}
          />
          <Label for="Description" className="label">Description</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input className="input"
            id="price"
            name="price"
            value={logging.price}
            placeholder="Price"
            type="Number"
            onChange={onChangeInput}
          />
          <Label for="Price" className="label">Price</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input className="input"
            id="map"
            name="map"
            value={logging.map}
            placeholder="Address"
            type="text"
            onChange={onChangeInput}
          />
          <Label for="Address" className="label">Address</Label>
        </FormGroup>{" "}
        <Divider orientation = "horizontal" />
        <Button className="button1">Registro de Alojamiento &gt;</Button>
        <br />
        <Link to = {"/loggings"}><Button className="button2">&lt; Cancelar</Button></Link>
      </Form>
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
    </div>
  );
};

export default LoggingRegister;
