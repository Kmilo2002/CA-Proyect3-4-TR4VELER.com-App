import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form } from 'reactstrap'

const ReservationCancel = () => {
  const [reservation, setReservation] = useState([])

  const token = localStorage.getItem("token")



  
  return (
    <div>
      <Form>
        <Button className='button3' type="submit">Cancelar Reserva</Button>
        <Link to = {"/reservations"}><Button className='button2'>Volver a Mis Reservas</Button></Link>
      </Form> 
    </div>
  )
}

export default ReservationCancel