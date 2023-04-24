import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardBody, Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";
import "./Loggings.css";

const Loggings = () => {
  const [loggings, setLoggings] = useState([]);

  const [filterLocation, setFilterLocation] = useState(" ");

  const [searchResults, setSearchResults] = useState([])

  const [filter, setFilter] = useState("")

  const [errorM, setErrorM] = useState(null);

  const role = localStorage.getItem("role");

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

  const handleClick = () => {
    const filteredPlaces = loggings.filter(logging => {
      // logging.location.toLowerCase().includes(filterLocation.toLowerCase()) || 
      // logging.name.toLowerCase().includes(filterName.toLowerCase())
      if(
        logging.location.toLowerCase().includes(filterLocation.toLowerCase()) 
        // || logging.name.toLowerCase().includes(filterName.toLowerCase())
      ) 
      {
       return true  
      }  
  });
   setSearchResults(filteredPlaces)
    console.log(filteredPlaces) 
  }

  return (
    <div>
      {role == 1 ? (
        <div>
          <Link to={"/"}>
            <TbArrowBackUp className="goBack" />
          </Link>
          <h1>Alojamientos</h1>
          <Link to={"/logging_register"}>
            <Button className="button1">Registro</Button>
          </Link>
          <Divider orientation = "horizontal" className="divider1"/>
          <Form>
          <FormGroup floating>
              <Input
                className="input"
                id="name"
                name="name"
                value={filterLocation}
                placeholder="Name"
                type="text"
                onChange = {e => setFilterLocation(e.target.value)}
              />
              <Label for="exampleName" className="label">
                Buscar alojamiento
              </Label>
            </FormGroup>
          </Form>
          <Divider orientation="horizontal" className="divider1"/>
          <Button className="button1" onClick={handleClick}>Buscar &gt;</Button>
          <Divider orientation="horizontal" className="divider1"/>
          <div>
          {searchResults.map((alojamiento) => {
            return (
              <Card
                className="my-2"
                color="dark"
                inverse
                style={{
                  width: "380px",
                  height: "125px",
                }}
              >
                <CardBody>
                  <Link
                    key={alojamiento._id}
                    to={`/loggings_search/${alojamiento._id}`}
                  >
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
          {loggings.map((alojamiento) => {
            return (
              <Card
                className="my-2"
                color="dark"
                inverse
                style={{
                  width: "380px",
                  height: "125px",
                }}
              >
                <CardBody>
                  <Link
                    key={alojamiento._id}
                    to={`/loggings/${alojamiento._id}`}
                  >
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
        <></>)
      }
    </div>
  );
};

export default Loggings;
