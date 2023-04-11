import React, { useEffect, useState } from 'react'
import { TbArrowBackUp } from "react-icons/tb"
import { BsPersonCircle } from "react-icons/bs"
import { Card, CardBody, } from "reactstrap"
import axios from "axios"

const UserReservations = () => {

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
        <TbArrowBackUp />
        <BsPersonCircle />
        <h4>{user.name}</h4>

    </div>
  )
}

export default UserReservations