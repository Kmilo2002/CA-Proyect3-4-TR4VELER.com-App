import React, { useEffect, useState } from 'react'
import { TbArrowBackUp } from "react-icons/tb"
import { BsPersonCircle } from "react-icons/bs"
import { Button, Card, CardBody, Form, } from "reactstrap"
import axios from "axios"
import { Link, useParams } from 'react-router-dom'

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
          const response = await axios.get("http://localhost:3500/api/user_rev/id", {...reservations},
          {
            headers: {
                Authorization: token,
            },
          }
        );
          console.log(response.data)
          setReservations(response.data)
        } catch (error) {
            
        }
    }


    useEffect(() => {
        getUser()
        getUserReservs()
    }, [])

    
  
  return (
    <div>
      <Form>
        <TbArrowBackUp />
        <BsPersonCircle />
        <h4>{user.name}</h4>
        <Card>
          <CardBody>
            <Link to = {`/reservation_modify/${reservationsId}`}><Button className='button1'>Gestionar</Button></Link>
            <Link to = {`/reservation_cancel/${reservationsId}`}><Button className='button3'>Cancelar</Button></Link>
          </CardBody>
        </Card>
      </Form>
    </div>
  )
}

export default UserReservations