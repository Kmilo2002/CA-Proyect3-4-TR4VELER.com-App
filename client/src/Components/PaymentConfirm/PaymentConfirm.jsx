import React from 'react'
import { Card, CardBody, CardText } from 'reactstrap';
import { RiCalendarCheckLine} from "react-icons/ri"
import { Link } from 'react-router-dom';


const PaymentConfirm = () => {
    setTimeout(() => {
        window.location.href = "/reservations"
    }, 10000);

  return (
    <div>
        <Card>
            <CardBody>
                <RiCalendarCheckLine />
                <CardText>
                <h2>Reservación Confirmada</h2>
                Su reservación ya está siendo procesada por nuestro equipo
                </CardText>
                <Link to = {"/reservations"}><p>Mis Reservas</p></Link>
                <Link to = {"/"}><p>Inicio</p></Link>
                <Link to = {"/profile"}><p>Mi Perfil</p></Link>
            </CardBody>
        </Card>
    </div>
  )
}

export default PaymentConfirm