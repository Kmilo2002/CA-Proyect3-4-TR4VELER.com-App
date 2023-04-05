import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa"
import { Link } from "react-router-dom";
import {
  Form,
  Button,
  Input,
  FormGroup,
  Label,
  Card,
  CardImg,
  CardBody,
  CardText,
} from "reactstrap";
import { Divider } from "@chakra-ui/react";
import "./Loggings.css";

let places = [];
let search = document.getElementById("name")

const Loggings2 = () => {
  const [loggings, setLoggings] = useState([]);

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

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

  // function placeFilter(){
  //   places = loggins.filter((cities) => {
  //     if (.toLowerCase().includes(search.value.toLowerCase())) {
  //       return true
  //     } 
  //   })
  // }

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setLoggings({ ...loggings, [name]: value });
    console.log(loggings);
  };

  const getLoggings2 = async () => {
    try {
      const response = await axios.get("http://localhost:3500/api/loggings", {
        headers: {
          Authiorization: token,
        },
      });
      console.log(response.data.alojamientos);
      setLoggings(response.data.alojamientos);
    } catch (error) {
      setErrorM(error.response.data.message);
    }
  };

  useEffect(() => {
    getLoggings2();
  }, []);

  return (
    <div>
      {role == 1 ? (
        <div>
          <h1>Nuestros Alojamientos</h1>
          <Form onSubmit={getLoggings2}>
            <Link to={"/logging_register"}>
              <Button className="button3">Registro</Button>
            </Link>
            <FormGroup floating>
              <Input
                className="input"
                id="name"
                name="name"
                placeholder="Name"
                type="text"
                onChange={onChangeInput}
              />
              <Label for="exampleName" className="label">
                Gestión de alojamiento
              </Label>
            </FormGroup>
          </Form>
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
      ) : (
        <div>
          <h1>Búsqueda de Alojamiento</h1>
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
        </div>
      )}
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

export default Loggings2;
