import React from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import "../Register/Register.css";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    password: "",
    city: "",
    country: "",
  });

  const [succesM, setSuccessM] = useState(null);

  const [errorM, setErrorM] = useState(null);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const registerSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3500/api/register/user",
        { ...user }
      );
      console.log(response);
      setSuccessM(response.data.message);
      localStorage.setItem("token");
      localStorage.setItem("role");
      localStorage.setItem("id");
      localStorage.setItem("name");

      setTimeout(() => {
        window.location.href = '/welcome'
      }, 500)

    } catch (error) {
      setErrorM(error.response.data.message);
    }
  };

  return (
    <div>
      <header className="header">
      <h1>Register</h1>
      </header>
      <Form onSubmit={registerSubmit}>
        <FormGroup floating>
          <Input className="input"
            id="name"
            name="name"
            value={user.name}
            placeholder="Name"
            type="text"
            onChange={onChangeInput}
          />
          <Label for="exampleName" className="label">Name</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input className="input"
            id="surname"
            name="surname"
            value={user.surname}
            placeholder="Surname"
            type="text"
            onChange={onChangeInput}
          />
          <Label for="exampleSurname" className="label">Surname</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input className="input"
            id="exampleEmail"
            name="email"
            value={user.email}
            placeholder="Email"
            type="email"
            onChange={onChangeInput}
          />
          <Label for="exampleEmail" className="label">Email</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input className="input"
            id="examplePhoneNumber"
            name="phone"
            value={user.phone}
            placeholder="PhoneNumber"
            type="text"
            onChange={onChangeInput}
          />
          <Label for="examplePhoneNumber" className="label">Phone Number</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input className="input"
            id="exampleCity"
            name="city"
            value={user.city}
            placeholder="City"
            type="text"
            onChange={onChangeInput}
          />
          <Label for="exampleCity" className="label">City</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input className="input"
            id="exampleCountry"
            name="country"
            value={user.country}
            placeholder="Country"
            type="text"
            onChange={onChangeInput}
          />
          <Label for="exampleCountry" className="label">Country</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input className="input"
            id="examplePassword"
            name="password"
            value={user.password}
            placeholder="Password"
            type="password"
            onChange={onChangeInput}
          />
          <Label for="examplePassword" className="label">Password</Label>
        </FormGroup>{" "}
        {/* <FormGroup floating>
      <Input className="input"
        id="examplePassword"
        name="password"
        placeholder="Password"
        type="password"
        onChange={onChangeInput}
      />
      <Label for="examplePassword">
        Repeat Password
      </Label>
    </FormGroup>
    {' '} */}
    
        <Button className="button1">Registrarse &gt;</Button> <br />
        <Link to = {"/login"}><Button className="button1">Ya tengo una cuenta &gt;</Button></Link><br />
        <Link to = {"/"}><Button className="button2">&lt; Cancelar</Button></Link>
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

export default Register;
