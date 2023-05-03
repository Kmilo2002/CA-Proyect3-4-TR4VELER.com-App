import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { TbArrowBackUp } from "react-icons/tb";
import { Button, Card, CardImg } from "reactstrap";
import "./LoggingDetails.css";

const LoogingDetails = () => {
  const { loggingId } = useParams();

  const [logging, setLogging] = useState({});

  const role = localStorage.getItem("role");

  const [errorM, setErrorM] = useState(null);

  const getLoggings = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3500/api/logging/${loggingId}`
      );
      console.log(response.data);
      setLogging(response.data.logging);
      localStorage.setItem("idlogging", response.data.logging._id);
    } catch (error) {
      setErrorM(error.response.data.message);
    }
  };

  useEffect(() => {
    getLoggings();
  }, []);

  return (
    <div>
      {role == 1 ? 
      (<div>
        <Link to={"/loggings"}>
        <TbArrowBackUp className="goBack" />
      </Link>
      </div>) : 
      (<div>
        <Link to={"/loggings_search"}>
        <TbArrowBackUp className="goBack" />
      </Link>
      </div>)}
      <div>
        <Card
          className="my-2"
          color="dark"
          inverse
          style={{
            width: "380px",
            height: "192px",
          }}
        >
          <CardImg
            alt="Card image"
            src="https://picsum.photos/200/300"
            style={{
              height: "190px",
            }}
          />
        </Card>
        <Card
          className="my-2"
          color="dark"
          inverse
          style={{
            width: "380px",
            height: "192px",
          }}
        >
          <CardImg
            alt="Card image"
            src="https://picsum.photos/200/300?grayscale"
            style={{
              height: "190px",
            }}
          />
        </Card>
        <h1>Lugar: {logging.location}</h1>
        <h2>Nombre: {logging.name}</h2>
        <h3>Descripción: {logging.description}</h3>
        <h4>Precio: {logging.price} euros por noche</h4>
        <h5>Impuesto: 10% IVA</h5>
        {role == 1 ? (
          <div>
            <Link to = {`/loggings_modify/${loggingId}`}><Button className="button1">Modificar</Button></Link> <br/>
            <Link to = {`/logging_delete/${loggingId}`}><Button className="button3">Borrar</Button></Link>
          </div>
        ) :
         role == 0 ? (
          <div>
            <Link to={`/reservation_details/${loggingId}`}>
              <Button className="button1">Reservar ahora</Button>
            </Link>
          </div>
        ) : 
        (
          <div>
            <Link to={"/login"}>
              <Button className="button1">¿Desea reservar?</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoogingDetails;
