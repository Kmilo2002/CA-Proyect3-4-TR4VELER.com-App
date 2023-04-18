import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { TbArrowBackUp } from "react-icons/tb";
import { Button } from "reactstrap";

const UsersDetails = () => {
  const { usersId } = useParams();

  const [users, setUsers] = useState([]);

  const role = localStorage.getItem("role");

  const token = localStorage.getItem("token");

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
          <Link to={``}>
            <Button className="button1">Desbanear Usuario</Button>
          </Link>{" "}
          <br />
          <Link to={``}>
            <Button className="button3">Banear Usuario</Button>
          </Link>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default UsersDetails;
