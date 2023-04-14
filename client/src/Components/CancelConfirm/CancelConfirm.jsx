import React from "react";
import { Card, CardBody, CardText } from "reactstrap";
import { MdOutlineFreeCancellation } from "react-icons/md"
import { Link } from "react-router-dom";

const CancelConfirm = () => {
    setTimeout(() => {
        window.location.href = "/reservations"
    }, 20000);

  return (
    <div>
    <Card>
      <CardBody>
        <MdOutlineFreeCancellation />
        <CardText>
          <h2>Reservación Cancelada</h2>
        </CardText>
        <Link to = {"/profile"}><p>Mi Perfil</p></Link>
        <Link to = {"/"}><p>Inicio</p></Link>
        <Link to = {"/reservations"}><p>Mis Reservas</p></Link>
      </CardBody>
    </Card>
    </div>
  );
};

export default CancelConfirm;
