import React from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { useState } from "react";
import { Divider } from "@chakra-ui/react";
import { TbArrowBackUp } from "react-icons/tb"
import { MdAddAPhoto } from "react-icons/md"
import { Link, useParams } from "react-router-dom"
import axios from "axios";
import "./ModifyUser.css"

const ModifyUser = () => {
  const [user, setUser] = useState({
    email: "",
    phone: "",
    city: "",
    country: "",
  });

  const token = localStorage.getItem("token");

  const {userId} = useParams



  const [succesM, setSuccessM] = useState(null);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
    };

    const modUserSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.put(
          `http://localhost:3500/api/users_modify/${userId}`,
          {
            headers: {
              Authorization: token,
            },
          }, {...user}
        );
        console.log(response.data);
        setSuccessM(response.data.message);

        setTimeout(() => {
          window.location.href = "/profile";
        }, 2000);
      } catch (error) {}
    };
  
  return (
    <div>
        <Link to = "/profile/:userId"><TbArrowBackUp className="goBack" /></Link>
        <h2>Modificación de datos del usuario</h2>
        <MdAddAPhoto className="photo1"/>
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
        <Divider orientation="horizontal" />
        <Button className="button1">Guardar cambios</Button> <br />
        <Button className="button2">Borrar Cuenta</Button>
      </Form>
      <div
        className="alert alert-primary"
        role="alert"
        style={{ display: succesM ? "block" : "none" }}
      >
        {succesM}
      </div>
    </div>
  );
};

export default ModifyUser;
