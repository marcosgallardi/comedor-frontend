import React from "react";
import axios from "axios";
import { Navbar } from "../Components/Navbar/Navbar";
import { useState, useEffect } from "react";
import { Menu } from "../Components/Menu/Menu";
import cocinero from "../Assets/cocinando.png";

export const LandingPage = () => {
  const [comida, setComida] = useState({});

  const [currentTime, setCurrentTime] = useState(new Date());

  const updateTime = () => {
    setCurrentTime(new Date());
  };

  useEffect(() => {
    const data = async () => {
      try {
        let { data } = await axios("comedor/menuGet");
        setComida(data);
      } catch (error) {
        throw error;
      }
    };

    data();

    const intervalId = setInterval(updateTime, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const fecha = () => {
    const date = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("es-ES", options);
  };

  return (
    <div>
      <Navbar />

      <div>
        <h2 className="text-center display-5 fw-bold pt-5">
          Menu de {fecha()}, {currentTime.toLocaleTimeString()} Hs
        </h2>
        <div className="d-flex justify-content-center pt-5">
          <div className="row border border-dark rounded-3 p-3">
            <div className="col-lg-8 col-sm-12">
              <Menu
                nombre={"Menu Principal"}
                diaComida={comida.menuPrincipal}
              />

              <Menu nombre={"Menu Dieta"} diaComida={comida.menuDieta} />

              <Menu nombre={"Menu Uno"} diaComida={comida.menuUno} />

              <Menu nombre={"Menu Dos"} diaComida={comida.menuDos} />
            </div>
            <div className="col-4">
              <img src={cocinero} alt="" className="img-fluid d-none d-sm-block" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
