import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Card, CardBody } from "reactstrap"
import { Divider } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import { TbArrowBackUp } from "react-icons/tb"
import "./Loggings.css"

const Loggings = () => {
    const [loggings, setLoggings] = useState([]);

    const [errorM, setErrorM] = useState(null);

    const getLoggings = async () => {
        try {
          const response = await axios.get("http://localhost:3500/api/loggings");
          console.log(response.data.alojamientos);
          setLoggings(response.data.alojamientos);
        } catch (error) {
          setErrorM(error.response.data.message);
        }
      };
    
      useEffect(() => {
        getLoggings();
      }, []);

  return (
    <div>
        <Link to = {'/loggings_search'}><TbArrowBackUp className='goBack' /></Link> 
        <h1>Alojamientos</h1>
        {loggings.map((alojamiento) => {
            return (
              <Card
            className="my-2"
            color="dark"
            inverse
            style={{
              width: "380px",
              height: "125px",
            }}>
              <CardBody>
              <Link key={alojamiento._id} to={`/loggings/${alojamiento._id}`}>
                <div>
                  <h3>{alojamiento.location}</h3>
                  <h4>{alojamiento.name}</h4>
                  <Divider orientation="horizontal" />
                </div>
              </Link>
              </CardBody>
              </Card>
            );
          })}
    </div>
  )
}

export default Loggings