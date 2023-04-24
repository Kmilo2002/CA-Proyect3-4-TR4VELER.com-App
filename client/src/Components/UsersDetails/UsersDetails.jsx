import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { TbArrowBackUp } from "react-icons/tb";
import { Card, CardBody, CardText, Button } from "reactstrap";

const UsersDetails = () => {
  const { usersId } = useParams();

  const [users, setUsers] = useState([]);

  const role = localStorage.getItem("role");

  const token = localStorage.getItem("token");

  const banned = localStorage.getItem("banned")

  const [errorM, setErrorM] = useState(null);

  const getUsers = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3500/api/user/${usersId}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      console.log(response.data);
      setUsers(response.data.user);
    } catch (error) {
      setErrorM(error.response.data);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const bannUser = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3500/api/users_ban/${usersId}`, 
      {...users},
      {
        headers:{
          Authorization: token
        }
      })

      console.log(response.data)
      setUsers(response.data)

      setTimeout(() => {
        window.location.href = `/users/${usersId}`
      }, 2500);

    } catch (error) {
      setErrorM(error.response.data.message)
    }
  }

  const unbannUser = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3500/api/user_unbanned/${usersId}`,
      {...users},
      {
        headers:{
          Authorization: token,
        }
      })

      console.log(response.data)
      setUsers(response.data)

      setTimeout(() => {
        window.location.href = `/users/${usersId}`
      }, 2500);
    } catch (error) {
      setErrorM(error.response.data.message)
    }
  }

const timestamp = localStorage.getItem("timestamp"); // ejemplo de marca de tiempo
const date = new Date(timestamp); // creas una instancia de Date con la marca de tiempo
const dateString = date.toLocaleDateString(); // conviertes la fecha en una cadena en formato local
console.log(dateString); // imprime la fecha en formato "MM/DD/YYYY"

  return (
    <div>
      {role == 1 ? (
        <div>
          <Link to={"/users"}>
            <TbArrowBackUp className="goBack" />
          </Link>
          <h3>
            Nombre: {users.name}{" "}{users.surname} <br />
            Teléfono: {users.phone} <br />
            Correo electrónico: {users.email} <br />
            Ciudad: {users.city} <br />
            País: {users.country}
          </h3>
          <Card
          className="my-2"
          color="dark"
          inverse
          style={{
            width: "380px",
            height: "115px",
          }}
        >
        <CardBody>
          <CardText>
            Esta cuenta fue creada a través del correo electrónico: <br />
            {users.email}
          </CardText>
        </CardBody>
        </Card>
        <Card
          className="my-2"
          color="dark"
          inverse
          style={{
            width: "380px",
            height: "100px",
          }}
        >
        <CardBody>
          <CardText>
            Esta cuenta fue creada: <br />
            {dateString}
          </CardText>
        </CardBody>
        </Card>
          {
            users.banned == false ? (
            <div>
            <Link to={``}>
            <Button className="button3" onClick={bannUser}>Banear Usuario</Button>
          </Link></div>) : (<div><Link to={``}>
            <Button className="button1" onClick={unbannUser}>Desbanear Usuario</Button>
          </Link>{" "}</div>)
          }
          </div>
      ) : (<></>)
      }
    </div>
  );
};

export default UsersDetails;
