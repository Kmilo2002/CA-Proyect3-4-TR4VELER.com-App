import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Form,
  Input,
  FormGroup,
  Label,
  Button,
  Card,
  CardBody,
} from "reactstrap";
import { Divider } from "@chakra-ui/react";

const Users = () => {
  const [users, setUsers] = useState([]);

  const [filterName, setFilterName] = useState(" ");

  const [searchResults, setSearchResults] = useState([]);

  const role = localStorage.getItem("role");

  const token = localStorage.getItem("token")

  const [error, setErrorM] = useState(null);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3500/api/users",
      {
        headers: {
          Authorization: token
        }
      });

      console.log(response.data);
      setUsers(response.data.usuarios);
    } catch (error) {
      setErrorM(error.response.data);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleClick = () => {
    const filteredUsers = users.filter((usuario) => {
      if (usuario.name.toLowerCase().includes(filterName.toLowerCase())) {
        return true;
      }
    });
    setSearchResults(filteredUsers);
    console.log(filteredUsers);
  };

  return (
    <div>
      {
      role == 1 ? (
      <div>
        <Form>
          <FormGroup>
            <FormGroup floating>
              <Input
                className="input"
                id="name"
                name="name"
                placeholder="Name"
                type="text"
                onChange={(e) => setFilterName(e.target.value)}
              />
              <Label for="exampleName" className="label">
                Buscar Usuario
              </Label>
            </FormGroup>
          </FormGroup>
          <Button className="button1" onClick={handleClick}>
            Buscar &gt;
          </Button>
          <Link to={"/"}>
            <Button className="button2">&lt; Cancelar</Button>
          </Link>
        </Form>
        <div>
        {users.map((usuario) => {
            return (
              <Card
                className="my-2"
                color="dark"
                inverse
                style={{
                  width: "380px",
                  height: "75px",
                }}
              >
                <CardBody>
                  <Link key={usuario._id} to={`/users/${usuario._id}`}>
                    <div>
                      <h3>
                        {usuario.name}{" "}
                        {usuario.surname}
                      </h3>
                      <Divider orientation="horizontal" />
                    </div>
                  </Link>
                </CardBody>
              </Card>
            );
          })}
        </div>
        <div>
          {searchResults.map((usuario) => {
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
                  <Link key={usuario._id} to={`/users/${usuario._id}`}>
                    <div>
                      <h3>
                        {usuario.name}
                        {usuario.surname}
                      </h3>
                      <h4>
                        {usuario.phone}{" "} 
                        {usuario.email}{" "}
                        {usuario.city}{" "}
                        {usuario.country}{" "}
                      </h4>
                    </div>
                  </Link>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
      ) : 
      (<></>)}
    </div>
  );
};

export default Users;
