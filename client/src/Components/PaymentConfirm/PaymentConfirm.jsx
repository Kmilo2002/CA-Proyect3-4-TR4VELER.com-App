import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardText } from 'reactstrap';
import { RiCalendarCheckLine} from "react-icons/ri"
import { Link } from 'react-router-dom';
import { Divider } from '@chakra-ui/react';
import axios from 'axios';


const PaymentConfirm = () => {
 const idreserva = localStorage.getItem("idreserva")

 const [reservation, setReservation] = useState([])

 const token = localStorage.getItem("token")

 const [errorM, setErrorM] = useState(null)

 const Reservation = async () => {
  try {
    const response = await axios.get(
      `http://localhost:3500/api/reservation/${idreserva}`,
    {
      headers: {
        Authorization: token
      }
    })

    console.log(response.data)
    setReservation(response.data.reservation)
  } catch (error) {
    console.log(error.data)
    setErrorM(error.response.data.message)
  }
 }

 useEffect(() => {
  Reservation()
 }, [])

  return (
    <div>
        <Divider orientation='horizontal' />
        <Card
        className="my-2"
        color="dark"
        inverse
        style={{
          width: "380px",
          height: "455px",
        }}
        >
            <CardBody>
                <RiCalendarCheckLine className='photo'/>
                <CardText>
                <h2>Reservación Confirmada</h2>
                Su reservación ya está siendo procesada por nuestro equipo
                <Divider orientation='horizontal' />
                <h3>
                Día entrada:{" "}{new Date(reservation.dayIn).toLocaleDateString()} <br />
                Día Salida:{" "}{new Date(reservation.dayOut).toLocaleDateString()} <br />
                Total de Personas:{" "}{reservation.persons} <br />
                Precio Total: {reservation.totalPrice} €
                </h3>
                </CardText>
                <Divider orientation='horizontal' />
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