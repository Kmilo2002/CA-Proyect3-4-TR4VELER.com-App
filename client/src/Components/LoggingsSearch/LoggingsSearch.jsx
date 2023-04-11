import React from "react";
import axios from "axios";
import Cards from "../Cards/Cards";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Form,
  Input,
  FormGroup,
  Label,
  Button,
} from "reactstrap";
import { Divider } from "@chakra-ui/react";
import { FaPlus, FaMinus } from "react-icons/fa"
import "./LoggingsSearch.css";

const LoggingsSearch = () => {
  const [loggings, setLoggings] = useState([]);
  
  const [filter, setFilter] = useState([])

  const role = localStorage.getItem("role")

  const [errorM, setErrorM] = useState(null);

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
      {
        role == 0 ? (
          <div>
          <h1>¿A dónde vamos?</h1>
          <Form>
            <FormGroup floating>
              <Input
                className="input"
                id="name"
                name="name"
                placeholder="Name"
                type="text"
                onChange = {e => setFilter(e.target.value)}
              />
              <Label for="exampleName" className="label">
                Buscar alojamiento
              </Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                className="input"
                id="name"
                name="name"
                placeholder="Name"
                type="date"
                onChange = {e => setFilter(e.target.value)}
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
                onChange = {e => setFilter(e.target.value)}
              />
              <Label for="exampleName" className="label">
                Salida
              </Label>
            </FormGroup>
            </Form>
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
            <Cards />
        </div>
      ) : (
        <div>
          <h1>¿A dónde vamos?</h1>
      <Form>
        <FormGroup floating>
          <Input
            className="input"
            id="name"
            name="name"
            placeholder="Name"
            type="text"
            onChange={e => setFilter(e.target.value)}
          />
          <Label for="exampleName" className="label">
            ¿A dónde viaja?
          </Label>
        </FormGroup>
        <FormGroup inline>
          <Input type="checkbox" />
          <Label check className="title2">
            Viajo por trabajo
          </Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            className="input"
            id="name"
            name="name"
            placeholder="Name"
            type="date"
            onChange= {e => setFilter(e.target.value)}
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
            onChange= {e => setFilter(e.target.value)}
          />
          <Label for="exampleName" className="label">
            Salida
          </Label>
          
        </FormGroup>
        <p>Total de personas: {Total()}</p>
        <div className="BigBox">
          <div className="miniBox">
            <p>Adultos: {adults}</p>
            <Button onClick={incrementAdults} className = "button4">
              <FaPlus />
            </Button>
            <Button onClick={decrementAdults} className = "button4">
              <FaMinus />
            </Button>
          </div>
          <div className="miniBox">
            <p>Niños: {childs}</p>
            <Button onClick={incrementChilds} className = "button4">
              <FaPlus />
            </Button>
            <Button onClick={decrementChilds} className = "button4">
              <FaMinus />
            </Button>
          </div>
          <div className="miniBox">
            <p>Bebés: {babys}</p>
            <Button onClick={incrementBabys} className = "button4">
              <FaPlus />
            </Button>
            <Button onClick={decrementBabys} className = "button4">
              <FaMinus />
            </Button>
          </div>
        </div>
        <Link to = {"/loggings"}><Button className = "button1">Buscar &gt;</Button></Link>
        <Link to = {"/"}><Button className = "button2">&lt; Cancelar</Button></Link>
      </Form>
      <Divider orientation = "horizontal" />
      <Cards />
        </div>
      )}
      
    </div>
  );
};

export default LoggingsSearch;
