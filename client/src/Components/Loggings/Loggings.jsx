import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Loggings = () => {
  const [loggings, setLoggings] = useState([]);

  const [errorM, setErrorM] = useState(null);

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
      <h1>Nuestros Alojamientos</h1>
      {
      loggings.map((alojamiento) => {
        return (
          <Link key={alojamiento._id} to={`/loggings/${alojamiento._id}`}>
            <div>
              <h3>{alojamiento.location}</h3>
              <h4>{alojamiento.name}</h4>
              <p>{alojamiento.description}</p>
            </div>
          </Link>
        );
      })
    }
    </div>
  );
};

export default Loggings;
