import React, { useEffect } from "react";
import { Form, FormGroup, Input, Label, Button, Card, CardBody, CardText } from "reactstrap";
import { useState } from "react";
import { Divider } from "@chakra-ui/react";
import { TbArrowBackUp } from "react-icons/tb"
import { BsPersonCircle } from "react-icons/bs"
import { Link } from "react-router-dom"
import axios from "axios";
import "./ModifyUser.css"

const ModifyUser = () => {
  const [user, setUser] = useState({
    email: "",
    phone: "",
    city: "",
    country: "",
    password: "",
  });

  const token = localStorage.getItem("token");

  const [succesM, setSuccessM] = useState(null);

  const [errorM, setErrorM] = useState(null)

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
    };

    const modUserSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.put(
          "http://localhost:3500/api/users_modify", {...user},
          {
            headers: {
              Authorization: token,
            },
          }
        );
        console.log(response.data);
        setSuccessM(response.data.message);

        setTimeout(() => {
          window.location.href = "/profile";
        }, 2000);
      } catch (error) {
        setErrorM(error.response.data.message)
      }
    };

    

    const getUser = async () => {
      try {
        const response = await axios.get(
        "http://localhost:3500/api/user",
        {
          headers: {
            Authorization: token
          }
        })
        console.log(response.data)
        setUser(response.data.user)
      } catch (error) {
        setErrorM(error.response.data.message)
      }
    }

    useEffect(() => {
      getUser()
    }, [])
  
  return (
    <div>
        <Link to = "/profile"><TbArrowBackUp className="goBack" /></Link>
        <h2>Modificación de datos del usuario</h2>
        <BsPersonCircle className="photo1"/>
        <Divider orientation="horizontal" />
      <Form onSubmit={modUserSubmit}>
        <FormGroup floating>
          <Input
            className="input"
            id="exampleEmail"
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
            id="examplePhoneNumber"
            name="phone"
            value={user.phone}
            placeholder="PhoneNumber"
            type="text"
            onChange={onChangeInput}
          />
          <Label for="examplePhoneNumber" className="label">
            Phone Number
          </Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            className="input"
            id="exampleCity"
            name="city"
            value={user.city}
            placeholder="City"
            type="text"
            onChange={onChangeInput}
          />
          <Label for="exampleCity" className="label">
            City
          </Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            className="input"
            id="exampleCountry"
            name="country"
            value={user.country}
            placeholder="Country"
            type="text"
            onChange={onChangeInput}
          />
          <Label for="exampleCountry" className="label">
            Country
          </Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            className="input"
            id="examplePassword"
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
        <Card
          className="my-2"
          color="dark"
          inverse
          style={{
            width: "380px",
            height: "100px",
          }}
        >
        <CardBody>
          <CardText>
            Esta cuenta fue creada a través del correo electrónico: {" "}
            {user.email}
          </CardText>
        </CardBody>
        </Card>
        <Divider orientation="horizontal" />
        <Button className="button1">Guardar cambios</Button> <br />
      <Link to = '/erase_user'><Button className="button2">Borrar Cuenta</Button></Link>
      </Form>
      <div
        className="alert alert-primary"
        role="alert"
        style={{ display: succesM ? "block" : "none" }}>
        {succesM}
      </div>
    </div>
  );
};

export default ModifyUser;
