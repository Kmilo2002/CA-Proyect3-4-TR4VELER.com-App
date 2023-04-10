import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { IoMdPerson } from "react-icons/io"
import { IoStarOutline, IoSettingsOutline } from "react-icons/io5"
import { RiLuggageDepositFill } from "react-icons/ri"
import { FiThumbsUp, FiAlertOctagon, FiBell } from "react-icons/fi"
import { FaRegEnvelope } from "react-icons/fa"
import { BsHouseAdd } from "react-icons/bs"
import { Link } from "react-router-dom"
import { Divider } from "@chakra-ui/react"

const UserProfile = () => {
    const [user, setUser] = useState({})

    const token = localStorage.getItem("token")
    const role = localStorage.getItem("role")

    const [errorM, setErrorM] = useState(null)

    const getUser = async () => {
        try {
        const response = await axios.get("http://localhost:3500/api/user", {
            headers: {
                Authorization: token,
            }
        })
        console.log(response.data)
        setUser(response.data.user)
            
        } catch (error) {
          setErrorM(error.response.data.message)  
        }
        
    }

    useEffect(() => {
        getUser()
    }, [])

  return (
    <div>
        <h1>Hello, {user.name}</h1>
        {
            role == 1 ? 
            (<div>

            </div>):
            (<div>
            <IoMdPerson /><Link to = "/modify_user"><p>Gestiona tu perfil</p></Link>
            <RiLuggageDepositFill /><Link to = ""><p>Gestiona tus reservas</p></Link>
            <IoSettingsOutline /><p>Ajustes</p>
            <IoStarOutline /><p>Danos tu opinión</p>
            <FiThumbsUp /><p>Compártenos en tus redes sociales</p>
            <FiAlertOctagon /><p>Notificar un problema</p>
            <FaRegEnvelope /><p>Contáctanos</p>
            <FiBell /><p>Notificaciones y alertas</p>
            <Divider orientation = "horizontal" />
            <h4>Colaboración:</h4>
            <BsHouseAdd /><p>Solicitar unir un alojamiento tuyo</p>
            </div>)
        }
    </div>
  );
 }
export default UserProfile;