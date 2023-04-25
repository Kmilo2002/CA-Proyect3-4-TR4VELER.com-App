import React, { useEffect } from 'react'
import { Card, CardBody, CardText } from 'reactstrap';
import { RiEmotionHappyLine } from "react-icons/ri"
import "./Welcome.css"

const Welcome = () => {
  
  const idlogging = localStorage.getItem("idlogging")

    useEffect(() => {
      if (!idlogging) {
      setTimeout(() => {
          window.location.href = "/"
      }, 2000)
  } else {
    setTimeout(() => {
    window.location.href = `/loggings_search/${idlogging}`
  }, 2000)}})

  return (
    <div>
        <RiEmotionHappyLine className='hFace' />
        <Card
        className='my-2'
        color='dark'
        inverse 
        style={{
            width: "380px",
            height: "150px"
        }}
        >
         <CardBody>
            <CardText>
            ¡Gracias por registrarse en nuestra aplicación!
            ¡Disfrute de sus viajes, junto a nuestro equipo, que 
            hará todo lo que esté a nuestro alcance, para que se lleve memorias y
            momentos inolvidables!
            </CardText>
         </CardBody>
        </Card>
    </div>
  )
}

export default Welcome