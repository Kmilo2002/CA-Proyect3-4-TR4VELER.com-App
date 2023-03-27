import React from "react";
import { useState } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import axios from "axios";
import NavBars from "../NavBars/NavBars.jsx";
import "../Login/Login.css";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [succesM, setSuccessM] = useState(null)
  
  const [errorM, setErrorM] = useState(null)

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
      setSuccessM(response.data.message)
    } catch (error) {
      setErrorM(error.response.data.message)
    }
    
  };

  return (
    <div>
      <NavBars></NavBars>
      <Form onSubmit={loginSubmit}>
        <FormGroup floating>
          <Input
            id="Email"
            name="email"
            value={user.email}
            placeholder="Email"
            type="email"
            onChange={onChangeInput}
          />
          <Label for="exampleEmail">Email</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            id="Password"
            name="password"
            value={user.password}
            placeholder="Password"
            type="password"
            onChange={onChangeInput}
          />
          <Label for="examplePassword">Password</Label>
        </FormGroup>{" "}
        <Button>Submit</Button>
      </Form>
      <div className="alert alert-primary" role="alert" style={{display: succesM ? "block":"none"}}>{succesM}</div>
      <div className="alert alert-warning" role="alert" style={{display: errorM ? "block":"none"}}>{errorM}</div>
    </div>
  );
};

export default Login;
