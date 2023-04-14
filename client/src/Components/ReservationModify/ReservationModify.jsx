import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Input, FormGroup, Label, Button } from "reactstrap";
import { Divider } from "@chakra-ui/react";
import { FaPlus, FaMinus } from "react-icons/fa";
import axios from "axios"

const ReservationModify = () => {

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

  return (
    <div>
      <Form>
        <h1>Gestión de Reservas</h1>
        <h2>Cambio de Fechas</h2>
        <FormGroup floating>
          <Input
            className="input"
            id="name"
            name="name"
            placeholder="Name"
            type="date"
            onChange
          />
          <Label for="exampleName" className="label">
            Llegada
          </Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            className="input"
            id="name"
            name="name"
            placeholder="Name"
            type="date"
            onChange
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
        <select required option="Tipo de Alimentación" className="form-control">
          <option value="">Tipo de Alimentación</option>
          <option value="B&B">B & B</option>
          <option value="All-Incluted">Todo Incluido</option>
          <option value="Half-Pention">Media Pensión</option>
          <option value="Full-Pention">Pensión Completa</option>
        </select>
      </div>
      <div>
      <select required option="Tipo de Habitación" className="form-control">
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
      <Divider orientation="horizontal" />
      <Button className="button1" type="submit">Guardar Cambios</Button> <br />
      <Link to = {"/reservations"}><Button className="button2">Cancelar</Button></Link>
      </Form>
    </div>
  );
};

export default ReservationModify;
