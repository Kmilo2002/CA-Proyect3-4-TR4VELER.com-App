import React, { useState } from "react";
import { Form, FormGroup, Input, Label, Button, Alert, Card, CardBody, CardText } from "reactstrap";
import { Link } from "react-router-dom";
import { Divider } from "@chakra-ui/react";


const PasswordLost = () => {
    const [user, setUser] = useState({
        email: "",
    })

    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
        console.log(user);
        };

  return (
    <div>
      <Form>
        <Divider orientation="horizontal" />
        <Alert color="danger" 
         style={{ display: "block" }}>
        <span className="fw-bold text-black">
          <h2>¿Ha olvidado su contraseña?</h2>
        </span>
      </Alert>
        <Divider orientation="horizontal" />
        <Card
          className="my-2"
          color="dark"
          inverse
          style={{
            width: "380px",
            height: "150px",
          }}
        >
        <CardBody>
          <h4>
        Introduzca su correo electrónico, con el que se registró en la aplicación,
        a donde le enviaremos un link para recuperar el acceso.
        </h4>
        </CardBody>
        </Card>
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
        </FormGroup>
        <Button className="button1">Recuperar Contraseña</Button> <br />
        <Link to = {"/login"} ><Button className="button2">Cancelar</Button></Link>
        <Divider orientation="horizontal" />
      </Form>
    </div>
  );
};

export default PasswordLost;
