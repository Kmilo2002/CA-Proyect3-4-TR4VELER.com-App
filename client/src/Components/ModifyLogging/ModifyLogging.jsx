import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./ModifyLogging.css"

const ModifyLogging = () => {
  const { loggingId } = useParams()

  const [logging, setLogging] = useState({
    name: "",
    title: "",
    description: "",
    price: "",
  });

  const token = localStorage.getItem("token");

  const [succesM, setSuccessM] = useState(null);

  const [errorM, setErrorM] = useState(null);

  const getLoggings = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3500/api/logging/${loggingId}`, 
        {
        headers: {
          Authorization: token,
        },
      });
      console.log(response.data.logging);
      setLogging(response.data.logging);
      
    } catch (error) {
      setErrorM(error.response.data.message);
    }
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setLogging({ ...logging, [name]: value });
    console.log(logging);
  };

  const modLogging = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3500/api/logging_modify/${loggingId}`,
        { ...logging },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(response.data);
      setSuccessM(response.data.message);

      setTimeout(() => {
        window.location.href = "/loggings";
      }, 2000);
    } catch (error) {
      console.log(error.response.data)
      setErrorM(error.response.data.message);
    }
  };

  useEffect(() => {
    getLoggings();
    modLogging();
  }, []);

  return (
    <div>
      <h2>Modificación de datos del <br /> Alojamiento</h2>
      <Form onSubmit={modLogging}>
        <FormGroup floating>
          <Input
            className="imput"
            id="name"
            name="name"
            value={logging.name}
            placeholder="Name"
            type="text"
            onChange={onChangeInput}
          />
          <Label for="exampleName" className="label">
            Nombre
          </Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            className="imput"
            id="title"
            name="title"
            value={logging.title}
            placeholder="Title"
            type="text"
            onChange={onChangeInput}
          />
          <Label for="exampleTitle" className="label">
          Tipo de Habitación
          </Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            className="imput"
            id="description"
            name="description"
            value={logging.description}
            placeholder="Description"
            type="text"
            onChange={onChangeInput}
          />
          <Label for="exampleDescription" className="label">
          Descripción
          </Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            className="imput"
            id="price"
            name="price"
            value={logging.price}
            placeholder="Price"
            type="text"
            onChange={onChangeInput}
          />
          <Label for="examplePrice" className="label">
            Precio
          </Label>
        </FormGroup>{" "}
        <Button className="button1" type="submit">Guardar Cambios</Button>
        <Link to = {`/loggings/${loggingId}`}><Button className="button2">&lt; Cancelar</Button></Link>
      </Form>
    </div>
  );
};

export default ModifyLogging;
