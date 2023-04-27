import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Input, FormGroup, Label, Button } from "reactstrap";
import { Divider } from "@chakra-ui/react";
import { FaPlus, FaMinus } from "react-icons/fa";
import axios from "axios";

const ReservationDetails = () => {
  const idlogging = localStorage.getItem("idlogging")

  const [reservation, setReservation] = useState({
    dayIn: "",
    dayOut: "",
    persons: "",
    meals: "",
    logging: idlogging,
  });


  const [logging, setLogging] = useState([]);

  const [errorM, setErrorM] = useState(null);

  const token = localStorage.getItem("token");

  const getLogging = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3500/api/logging/${idlogging}`
      );
      console.log(response.data);
      setLogging(response.data);
    } catch (error) {
      setErrorM(error.response.data.message);
    }
  };

  useEffect(() => {
    getLogging();
  }, []);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setReservation({ ...reservation, [name]: value });
    console.log(reservation);
  };

  const ReservationDetails = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3500/api/register/reservation",
        { ...reservation },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      console.log(response);
      setReservation(response.data);

      setTimeout(() => {
        window.location.href = "/payment_confirm"
      }, 3000);

    } catch (error) {
      console.log(error.response)
      setErrorM(error.response.data.message);
    }
  };


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

  reservation.persons = Total();

  return (
    <div>
      <Form onSubmit={ReservationDetails}>
      <h1>Detalles de la Reservación</h1>
        <FormGroup floating>
          <Input
            className="input"
            id="dayIn"
            name="dayIn"
            value={reservation.dayIn}
            placeholder="Llegada"
            type="date"
            onChange={onChangeInput}
          />
          <Label for="exampleDayIn" className="label">
           Fecha de Llegada
          </Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            className="input"
            id="dayOut"
            name="dayOut"
            value={reservation.dayOut}
            placeholder="dayOut"
            type="date"
            onChange={onChangeInput}
          />
          <Label for="exampleDayOut" className="label">
            Fecha de Salida
          </Label>
        </FormGroup>
        <div className="BigBox">
          <p>Total de personas: {Total()}</p>
          <div className="miniBox">
            <p>Adultos: {adults}</p>
            <Button onClick={incrementAdults} onChange={onChangeInput} className="button4">
              <FaPlus />
            </Button>
            <Button onClick={decrementAdults} onChange={onChangeInput} className="button4">
              <FaMinus />
            </Button>
          </div>
          <div className="miniBox">
            <p>Niños: {childs}</p>
            <Button onClick={incrementChilds} onChange={onChangeInput} className="button4">
              <FaPlus />
            </Button>
            <Button onClick={decrementChilds} onChange={onChangeInput} className="button4">
              <FaMinus />
            </Button>
          </div>
          <div className="miniBox">
            <p>Bebés: {babys}</p>
            <Button onClick={incrementBabys} onChange={onChangeInput} className="button4">
              <FaPlus />
            </Button>
            <Button onClick={decrementBabys} onChange={onChangeInput} className="button4">
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
            value={reservation.meals}
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
          <Button className="button1" type="submit">
            Pagar
          </Button>
        <br />
        <Link to={`/loggings_search/${idlogging}`}>
          <Button className="button2">Volver</Button>
        </Link>
      </Form>
    </div>
  );
};

export default ReservationDetails;
