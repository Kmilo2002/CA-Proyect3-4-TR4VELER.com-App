import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from "axios"
import { TbArrowBackUp } from "react-icons/tb"
import { Button } from "reactstrap"

const Looging_Details = () => {
    const { loggingId } = useParams()
    const [logging, setLogging] = useState({})

    const [errorM, setErrorM] = useState(null)

    const getLoggings = async () => {
        try {
            const response = await axios.get(`http://localhost:3500/api/logging/${loggingId}`)
            console.log(response.data)
            setLogging(response.data.logging)
        } catch (error) {
            setErrorM(error.response.data.message)
        }
    }

    useEffect(() => {
        getLoggings()
    }, [])

  return (
    <div>
        <Link to = {'/loggings'}><TbArrowBackUp /></Link>
        <h1>Lugar: {logging.location}</h1>
        <h2>Nombre: {logging.name}</h2>
        <h3>Descripción: {logging.description}</h3>
        <Link to = {'/payment'}><Button className='button1'>Reservar ahora</Button></Link>
        
    </div>
  )
}

export default Looging_Details