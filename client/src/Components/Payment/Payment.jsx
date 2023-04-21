import React from "react";
import { useState } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { Divider } from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom"

const Payment = () => {
  const [confirmData, setconfirmData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
  });

  const token = localStorage.getItem("token");

  const id = localStorage.getItem("id")

  const [errorM, setErrorM] = useState(null);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setconfirmData({ ...confirmData, [name]: value });
    console.log(confirmData);
  };

  const confirmDataSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3500/api/register/reservation",
        {...confirmData},
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(response);
    } catch (error) {
      setErrorM(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Confirmación de datos</h2>
      <Form onSubmit={confirmDataSubmit}>
        <FormGroup floating>
          <Input
            className="input"
            id="name"
            name="name"
            value={confirmData.name}
            placeholder="Name"
            type="text"
            onChange={onChangeInput}
          />
          <Label for="exampleName" className="label">
            Name
          </Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            className="input"
            id="surname"
            name="surname"
            value={confirmData.surname}
            placeholder="Surname"
            type="text"
            onChange={onChangeInput}
          />
          <Label for="exampleSurname" className="label">
            Surname
          </Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            className="input"
            id="exampleEmail"
            name="email"
            value={confirmData.email}
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
            id="examplePhoneNumber"
            name="phone"
            value={confirmData.phone}
            placeholder="PhoneNumber"
            type="text"
            onChange={onChangeInput}
          />
          <Label for="examplePhoneNumber" className="label">
            Phone Number
          </Label>
        </FormGroup>{" "}
        <Divider orientation="horizontal" />
        <Button className="button1">Pagar &gt;</Button>
        <Link to={`/loggings_search/${id}`}><Button className="button2">&lt; Cancelar</Button></Link>
      </Form>
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

export default Payment;
