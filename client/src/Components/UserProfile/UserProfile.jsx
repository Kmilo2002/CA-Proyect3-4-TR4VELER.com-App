import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoMdPerson } from "react-icons/io";
import { IoStarOutline, IoSettingsOutline } from "react-icons/io5";
import { RiLuggageDepositFill } from "react-icons/ri";
import { FiThumbsUp, FiAlertOctagon, FiBell, FiLogOut } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import { BsHouseAdd, BsPersonCircle } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { Divider } from "@chakra-ui/react";
import "./UserProfile.css";

const UserProfile = () => {
  const [user, setUser] = useState({});

  // const {userId} = useParams()

  const token = localStorage.getItem("token");

  const role = localStorage.getItem("role");

  const [errorM, setErrorM] = useState(null);

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:3500/api/user", {
        headers: {
          Authorization: token,
        },
      });
      console.log(response.data);
      setUser(response.data.user);
    } catch (error) {
      setErrorM(error.response.data.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <h1>Perfil del Usuario</h1>
      {role == 1 ? (
        <div>
          <Link to = "/logout" className="link"><FiLogOut className="logout" /></Link>
        </div>
      ) : (
        <div>
          <div className="Box">
            <BsPersonCircle className="photo" />
            <Link to = "/logout"><FiLogOut className="logout" /></Link>
          </div>
          <Divider orientation="horizontal" className="divider" />
          <IoMdPerson className="icons" />
          <Link to="/modify_user" className="text1">
            <p>Gestiona tu perfil</p>
          </Link>
          <RiLuggageDepositFill className="icons" />
          <Link to="/reservations" className="text1">
            <p>Gestiona tus reservas</p>
          </Link>
          <IoSettingsOutline className="icons" />
          <p>Ajustes</p>
          <IoStarOutline className="icons" />
          <p>Danos tu opinión</p>
          <FiThumbsUp className="icons" />
          <p>Compártenos en tus redes sociales</p>
          <FiAlertOctagon className="icons" />
          <p>Notificar un problema</p>
          <FaRegEnvelope className="icons" />
          <p>Contáctanos</p>
          <FiBell className="icons" />
          <p>Notificaciones y alertas</p>
          <Divider orientation="horizontal" className="divider" />
          <h4>Colaboración:</h4>
          <BsHouseAdd className="icons" />
          <p>Solicitar unir un alojamiento tuyo</p>
        </div>
      )}
    </div>
  );
};
export default UserProfile;
