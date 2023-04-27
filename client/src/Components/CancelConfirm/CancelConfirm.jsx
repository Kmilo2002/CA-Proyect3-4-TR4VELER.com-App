import React from "react";
import { Card, CardBody, CardText } from "reactstrap";
import { MdOutlineFreeCancellation } from "react-icons/md"
import { Link } from "react-router-dom";
import { Divider } from "@chakra-ui/react";

const CancelConfirm = () => {

  return (
    <div>
      <Divider orientation="horizontal" />
    <Card
    className="my-2"
    color="dark"
    inverse
    style={{
      width: "380px",
      height: "235px",
    }}
    >
      <CardBody>
        <MdOutlineFreeCancellation className="photo"/>
        <CardText>
          <h2>Reservación Cancelada</h2>
        </CardText>
        <Link to = {"/profile"}><p>Mi Perfil</p></Link>
        <Link to = {"/"}><p>Inicio</p></Link>
        <Link to = {"/reservations"}><p>Mis Reservas</p></Link>
      </CardBody>
    </Card>
    <Divider orientation="horizontal" />
    </div>
  );
};

export default CancelConfirm;
