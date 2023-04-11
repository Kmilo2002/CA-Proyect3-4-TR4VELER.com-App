import React, { useEffect, useState } from "react";
import { Form, Input, Label } from "reactstrap";
import axios from "axios";

const ModifyLogging = () => {
  const [logging, setLogging] = useState({
    name: "",
    description: "",
    price: "",
  });

  const token = localStorage.getItem("token");

  const [succesM, setSuccessM] = useState(null);

  const [errorM, setErrorM] = useState(null);

  const getLoggings = async () => {
    try {
      const response = await axios.get("http://localhost:3500/api/logging", {
        headers: {
          Authorization: token,
        },
      });
      console.log(response.data);
      setLogging(response.data);
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
        "",
        { ...logging },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(response.data);
      setSuccessM(response.data);

      setTimeout(() => {
        window.location.href = "/loggings";
      }, 2000);
    } catch (error) {
      setErrorM(error.response.data.message);
    }
  };

  useEffect(() => {
    getLoggings();
    modLogging();
  }, []);

  return (
    <div>
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
            id="description"
            name="description"
            value={logging.description}
            placeholder="Description"
            type="text"
            onChange={onChangeInput}
          />
          <Label for="exampleDescription" className="label">
          </Label>
            Descripción
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
        
      </Form>
    </div>
  );
};

export default ModifyLogging;
