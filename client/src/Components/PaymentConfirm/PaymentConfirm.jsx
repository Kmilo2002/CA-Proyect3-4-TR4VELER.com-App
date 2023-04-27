import React from 'react'
import { Card, CardBody, CardText } from 'reactstrap';
import { RiCalendarCheckLine} from "react-icons/ri"
import { Link } from 'react-router-dom';
import { Divider } from '@chakra-ui/react';


const PaymentConfirm = () => {

  return (
    <div>
        <Divider orientation='horizontal' />
        <Card
        className="my-2"
        color="dark"
        inverse
        style={{
          width: "380px",
          height: "290px",
        }}
        >
            <CardBody>
                <RiCalendarCheckLine className='photo'/>
                <CardText>
                <h2>Reservación Confirmada</h2>
                Su reservación ya está siendo procesada por nuestro equipo
                </CardText>
                <Link to = {"/reservations"}><p>Mis Reservas</p></Link>
                <Link to = {"/"}><p>Inicio</p></Link>
                <Link to = {"/profile"}><p>Mi Perfil</p></Link>
            </CardBody>
        </Card>
        <Divider orientation='horizontal' />
    </div>
  )
}

export default PaymentConfirm