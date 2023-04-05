import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Form,
  Input,
  FormGroup,
  Label,
  Card,
  CardImg,
  CardBody,
  CardText,
  Button,
} from "reactstrap";
import { Divider } from "@chakra-ui/react";
import { FaPlus, FaMinus } from "react-icons/fa"
import "./Loggings.css";

const Loggings = () => {
  const [loggings, setLoggings] = useState([]);

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
      <Form>
        <FormGroup floating>
          <Input
            className="input"
            id="name"
            name="name"
            placeholder="Name"
            type="text"
            onChange
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
      </Form>

      <div className="BigBox">
        <div className="Box1">
          <Card
            className="my-2"
            color="dark"
            inverse
            style={{
              width: "380px",
              height: "230px",
            }}
          >
            <CardImg
              alt="Card image"
              src="https://picsum.photos/200/300"
              style={{
                height: "190px",
              }}
            />
            <CardBody>
              <CardText className="cardtext">Ciudad 1</CardText>
            </CardBody>
          </Card>
          <Card
            className="my-2"
            color="dark"
            inverse
            style={{
              width: "380px",
              height: "230px",
            }}
          >
            <CardImg
              alt="Card image"
              src="https://picsum.photos/200/300"
              style={{
                height: "190px",
              }}
            />
            <CardBody>
              <CardText className="cardtext">Ciudad 2</CardText>
            </CardBody>
          </Card>
        </div>
        <div className="Box2">
          <Card
            className="my-2"
            color="dark"
            inverse
            style={{
              width: "380px",
              height: "230px",
            }}
          >
            <CardImg
              alt="Card image"
              src="https://picsum.photos/200/300"
              style={{
                height: "190px",
              }}
            />
            <CardBody>
              <CardText className="cardtext">Ciudad 3</CardText>
            </CardBody>
          </Card>
          <Card
            className="my-2"
            color="dark"
            inverse
            style={{
              width: "380px",
              height: "230px",
            }}
          >
            <CardImg
              alt="Card image"
              src="https://picsum.photos/200/300"
              style={{
                height: "190px",
              }}
            />
            <CardBody>
              <CardText className="cardtext">Ciudad 4</CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Loggings;
