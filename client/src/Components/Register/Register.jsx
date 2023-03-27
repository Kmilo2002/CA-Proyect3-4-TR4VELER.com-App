import React from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { useState } from "react";
import axios from "axios"
import "../Register/Register.css";



const Register = () => {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    password: "",
    city: "",
    country: ""
  })

  const [succesM, setSuccessM] = useState(null)
  
  const [errorM, setErrorM] = useState(null)

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const registerSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3500/api/register/user", {...user});
    console.log(response)
    setSuccessM(response.data.message)
    } catch (error) {
      setErrorM(error.response.data.message)
    }
    
  }



  return (
    <div>
      <Form onSubmit={registerSubmit}>
    <FormGroup floating>
      <Input
        id="Name"
        name="name"
        value={user.name}
        placeholder="Name"
        type="text"
        onChange={onChangeInput}

      />
      <Label for="exampleName">
        Name
      </Label>
    </FormGroup>
    {' '}
    <FormGroup floating>
      <Input
        id="Surname"
        name="surname"
        value={user.surname}
        placeholder="Surname"
        type="text"
        onChange={onChangeInput}
      />
      <Label for="exampleSurname">
        Surname
      </Label>
    </FormGroup>
    {' '}
    <FormGroup floating>
      <Input
        id="exampleEmail"
        name="email"
        value={user.email}
        placeholder="Email"
        type="email"
        onChange={onChangeInput}
      />
      <Label for="exampleEmail">
        Email
      </Label>
    </FormGroup>
    {' '}
    <FormGroup floating>
      <Input
        id="examplePhoneNumber"
        name="phone"
        value={user.phone}
        placeholder="PhoneNumber"
        type="Number"
        onChange={onChangeInput}
      />
      <Label for="examplePhoneNumber">
        Phone Number
      </Label>
    </FormGroup>
    {' '}
    <FormGroup floating>
      <Input
        id="exampleCity"
        name="city"
        value={user.city}
        placeholder="City"
        type="text"
        onChange={onChangeInput}
      />
      <Label for="exampleCity">
        City
      </Label>
    </FormGroup>
    {' '}
    <FormGroup floating>
      <Input
        id="exampleCountry"
        name="country"
        value={user.country}
        placeholder="Country"
        type="text"
        onChange={onChangeInput}
      />
      <Label for="exampleCountry">
        Country
      </Label>
    </FormGroup>
    {' '}
    <FormGroup floating>
      <Input
        id="examplePassword"
        name="password"
        value={user.password}
        placeholder="Password"
        type="password"
        onChange={onChangeInput}
      />
      <Label for="examplePassword">
        Password
      </Label>
    </FormGroup>
    {' '}
    {/* <FormGroup floating>
      <Input
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
    <Button>Submit</Button>
  </Form>
  <div className="alert alert-primary" role="alert" style={{display: succesM ? "block":"none"}}>{succesM}</div>
      <div className="alert alert-warning" role="alert" style={{display: errorM ? "block":"none"}}>{errorM}</div>
    </div>
  );
};

export default Register;

