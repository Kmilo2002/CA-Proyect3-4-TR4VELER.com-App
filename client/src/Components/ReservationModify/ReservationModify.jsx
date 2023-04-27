import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Form, Input, FormGroup, Label, Button } from "reactstrap";
import { Divider } from "@chakra-ui/react";
import { FaPlus, FaMinus } from "react-icons/fa";
import axios from "axios"

const ReservationModify = () => {
  const { reservationId } = useParams()

  const { loggingId } = useParams();

  const token = localStorage.getItem("token")

  const [succesM, setSuccessM] = useState(null);

  const [error, setErrorM] = useState(null)

  const [logging, setLogging] = useState([])

  const [reserv, setReserv] = useState({
    dayIn: "",
    dayOut: "",
    persons: "",
    meals: "",
    logging: loggingId
  })

  const getLogging = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3500/api/logging/${loggingId}`
      );
      console.log(response.data);
      setLogging(response.data);
    } catch (error) {
      setErrorM(error.response.data.message);
    }
  };


  const getReserv = async () => {
    try {
      const response = await axios.get(
      `http://localhost:3500/api/reservation/${reservationId}`,
      {
        headers: {
          Authorization: token
        }
      })
      console.log(response)
      setReserv(response.data.reservation)

    } catch (error) {
      setErrorM(error.response.data.message)
    }
  }

  useEffect(() => {
    getReserv();
    getLogging()
  }, [])

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setReserv({ ...reserv, [name]: value });
    console.log(reserv);
    };

  const modifyReserv = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`
      http://localhost:3500/api/reservations_modify/${reservationId}`,
      {...reserv},
      {
        headers: {
          Authorization: token,
        }
      })

      console.log(response)
      setSuccessM(response.data.message)

      setTimeout(() => {
        window.location.href = "/reservations"
      }, 3000)
    
    } catch (error) {
      console.log(error.response)
      setErrorM(error.response.data.message)
    }
  }

  const [adults, setAdults] = useState(0);
  const [childs, setChilds] = useState(0);
  const [babys, setBabys] = useState(0);

  const incrementAdults = () => {
    setAdults(adults + 1);
  };

  const incrementChilds = () => {
    setChilds(childs + 1);
  };

  const incrementBabys = () => {
    setBabys(babys + 1);
  };

  const decrementAdults = () => {
    setAdults(adults - 1);
  };

  const decrementChilds = () => {
    setChilds(childs - 1);
  };

  const decrementBabys = () => {
    setBabys(babys - 1);
  };

  const Total = () => {
    return [adults, childs, babys].reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  }; 

  reserv.persons = Total();

  // fecha que viene desde el backend
const fechaEntrada = reserv.dayIn;

// creamos una instancia de Date con la fecha del backend
const fechaIn = new Date(fechaEntrada);

// obtenemos los componentes de la fecha que queremos mostrar
const yearIn = fechaIn.getFullYear();
const monthIn = ("0" + (fechaIn.getMonth() + 1)).slice(-2);
const dayIn = ("0" + fechaIn.getDate()).slice(-2);

// concatenamos los componentes de la fecha en el formato deseado
const fechaFormateada1 = `${yearIn}-${monthIn}-${dayIn}`;

// console.log(fechaFormateada1); 


// fecha que viene desde el backend
const fechaSalida = reserv.dayOut;

// creamos una instancia de Date con la fecha del backend
const fechaOut = new Date(fechaSalida);

// obtenemos los componentes de la fecha que queremos mostrar
const year = fechaOut.getFullYear();
const month = ("0" + (fechaOut.getMonth() + 1)).slice(-2);
const day = ("0" + fechaOut.getDate()).slice(-2);

// concatenamos los componentes de la fecha en el formato deseado
const fechaFormateada2 = `${year}-${month}-${day}`;

// console.log(fechaFormateada2); 
 

  return (
    <div>
      <Form onSubmit={modifyReserv}>
        <h1>Gestión de Reservas</h1>
        <h2>Cambio de Fechas</h2>
        <FormGroup floating>
          <Input
            className="input"
            id="name"
            name="dayIn"
            value={fechaFormateada1}
            type="date"
            onChange={onChangeInput}
          />
          <Label for="exampleName" className="label">
            Llegada
          </Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            className="input"
            id="name"
            name="dayOut"
            value={fechaFormateada2}
            placeholder="Name"
            type="date"
            onChange={onChangeInput}
          />
          <Label for="exampleName" className="label">
            Salida
          </Label>
        </FormGroup>
      
      <div className="BigBox">
        <p>Total de personas: {Total()}</p>
        <div className="miniBox">
          <p>Adultos: {adults}</p>
          <Button onClick={incrementAdults} className="button4">
            <FaPlus />
          </Button>
          <Button onClick={decrementAdults} className="button4">
            <FaMinus />
          </Button>
        </div>
        <div className="miniBox">
          <p>Niños: {childs}</p>
          <Button onClick={incrementChilds} className="button4">
            <FaPlus />
          </Button>
          <Button onClick={decrementChilds} className="button4">
            <FaMinus />
          </Button>
        </div>
        <div className="miniBox">
          <p>Bebés: {babys}</p>
          <Button onClick={incrementBabys} className="button4">
            <FaPlus />
          </Button>
          <Button onClick={decrementBabys} className="button4">
            <FaMinus />
          </Button>
        </div>
      </div>
      <div>
          <select
            required
            option="Tipo de Alimentación"
            className="form-control"
            name="meals"
            value={reserv.meals}
            onChange={onChangeInput}
          >
            <option value="">Tipo de Alimentación</option>
            <option value="B&B">B & B</option>
            <option value="All-Incluted">Todo Incluido</option>
            <option value="Half-Pention">Media Pensión</option>
            <option value="Full-Pention">Pensión Completa</option>
          </select>
        </div>
        {logging.title == "Hotel" ? (
          <div>
            <select
              required
              option="Tipo de Habitación"
              className="form-control"
            >
              <option value="">Tipo de Habitación</option>
              <option value="Simple">Habitación Simple</option>
              <option value="Double">Habitación Doble</option>
              <option value="Tripple">Habitación Triple</option>
              <option value="Suite Junior">Suite Junior</option>
              <option value="Suite Junior View">Suite Junior con Vistas</option>
              <option value="Suite Senior">Suite Senior</option>
              <option value="Suite Senior View">Suite Senior con Vistas</option>
              <option value="Presidential Suite">Suite Presidencial</option>
              <option value="Royal Suite">Suite Real</option>
            </select>
          </div>
        ) : (
          <></>
        )}
      <Divider orientation="horizontal" />
      <Button className="button1" type="submit">Guardar Cambios</Button> <br />
      <Link to = {"/reservations"}><Button className="button2">Cancelar</Button></Link>
      </Form>
      <div
        className="alert alert-primary"
        role="alert"
        style={{ display: succesM ? "block" : "none" }}>
        {succesM}
      </div>
    </div>
  );
};

export default ReservationModify;
