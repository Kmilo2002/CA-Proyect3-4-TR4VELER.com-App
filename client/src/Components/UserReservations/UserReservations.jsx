import React, { useEffect, useState } from 'react'
import { TbArrowBackUp } from "react-icons/tb"
import { BsPersonCircle } from "react-icons/bs"
import { Button, Card, CardBody, CardText, Form, } from "reactstrap"
import axios from "axios"
import { Link, useParams } from 'react-router-dom'
import "./UserReservations.css"

const UserReservations = () => {
    const { reservationsId} = useParams()

    const [user, setUser] = useState([])

    const [reservations, setReservations] = useState([])

    const [error, setErrorM] = useState(null)

    const token = localStorage.getItem("token")

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

    const getUserReservs = async () => {
        try {
          const response = await axios.get("http://localhost:3500/api/user_reservations", 
          {...reservations},
          {
            headers: {
                Authorization: token,
            },
          }
        );
          console.log(response.data.user)
          setReservations(response.data.user)
        } catch (error) {
        setErrorM(error.response.data.message)
        }
    }


    useEffect(() => {
        getUser()
        getUserReservs()
    }, [])

    
  
  return (
    <div>
      <Form>
        <Link to = {"/profile"}><TbArrowBackUp className='goBack'/></Link>
         <br />
         <BsPersonCircle className='photo'/>
        
        <h1>
          {user.name} {" "}
          {user.surname}
        </h1>
        <h2>Gestión de Reservas</h2>
        <Card
        className="my-2"
        color="dark"
        inverse
        style={{
          width: "380px",
          height: "200px",
        }}
      >
          <CardBody>
            <CardText>
            Información de la Reserva
            </CardText>
            <Link to = {`/reservation_modify/${reservationsId}`}><Button className='button5'>Gestionar</Button></Link>
            <Link to = {`/reservation_cancel/${reservationsId}`}><Button className='button6'>Cancelar</Button></Link>
          </CardBody>
        </Card>
      </Form>
    </div>
  )
}

export default UserReservations