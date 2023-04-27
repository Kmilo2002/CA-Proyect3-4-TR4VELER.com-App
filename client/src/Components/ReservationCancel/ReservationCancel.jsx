import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button, Form, Alert } from 'reactstrap'
import { FiAlertTriangle } from "react-icons/fi";
import { Divider } from '@chakra-ui/react';
import axios  from 'axios'

const ReservationCancel = () => {
  const { reservationId } = useParams();

  const [reserv, setReserv] = useState([])

  const token = localStorage.getItem("token")

  const [succesM, setSuccessM] = useState(null)

  const [errorM, setErrorM] = useState(null)

  const getReserv = async () => {
    try {
      const response = await axios.get(
      `http://localhost:3500/api/reservation/${reservationId}`,
      {
        headers: {
          Authorization: token
        }
      })
      console.log(response.data.reservation)
      setReserv(response.data.reservation)

    } catch (error) {
      setErrorM(error.response.data.message)
    }
  }

  useEffect(() => {
    getReserv()
  }, [])

  const deleteReserv = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.delete(`
      http://localhost:3500/api/reservations_user/${reservationId}`,
      {
        headers: {
          Authorization: token
        }
      })

      console.log(response.data)
      setSuccessM(response.data.message)

      setTimeout(() => {
        window.location.href = "/cancel_confirm"
      }, 3000);

    } catch (error) {
      console.log(error.response)
      setErrorM(error.response.data.message)
    }
  }

  
  return (
    <div>
      <Divider orientation='horizontal' />
      <Alert color="danger" className="color-red" style={{ display: "block" }}>
        <span className="fw-bold text-black">
          ¿Está seguro de querer borrar su reserva?
        </span>
      </Alert>
      <Form>
      <div className="card" style={{ width: "400px", height: "225px" }}>
        <div className="card-body">
          <h1>¡Acción Irreversible!</h1>
          <FiAlertTriangle className="alert2"></FiAlertTriangle>
          <Divider orientation="horizontal" />
          <p className="card-text">
            Si borra su reserva, no prodrá recuperarla. Tendrá que hacerla nuevamente, 
            desde el principio. ¿Está seguro de continuar?
          </p>
        </div>
      </div>
      <Divider orientation='horizontal' />
        <Button className='button3' onClick={deleteReserv}>Cancelar Reserva</Button>
        <Link to = {"/reservations"}><Button className='button2'>Volver a Mis Reservas</Button></Link>
      </Form> 
      <div
        className="alert alert-primary"
        role="alert"
        style={{ display: succesM ? "block" : "none" }}>
        {succesM}
      </div>
    </div>
  )
}

export default ReservationCancel