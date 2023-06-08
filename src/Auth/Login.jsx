import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { validations } from "./Validations";
import tuerca from "../Assets/Tuerca.png";
import nombre from "../Assets/Nombre.png";
import styled from "../Auth/Login.module.css";
import "animate.css";

export const Login = () => {
  let inicialState = {
    username: "",
    password: "",
  };
  const [input, setInput] = useState(inicialState);
  const [errors, setErrors] = useState(inicialState);

  const [acceso, setAcceso] = useState(false);

  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(errors).length === 0) {
      let aux = await axios(
        `comedor/login?username=${input.username}&password=${input.password}`
      );
      setAcceso(aux);
      acceso && navigate("/dashboard");
    }
  };

  const handleOnChange = (e) => {
    let { value, name } = e.target;
    setInput({ ...input, [name]: value });
    setErrors(validations({ ...input, [name]: value }));
  };
  return (
    <div>
      <Link to="/">
        <button className="text-start text-white btn btn-primary p-3 m-5 rounded-4">
          Back
        </button>
      </Link>
      <form
        className="position-absolute top-50 start-50 translate-middle"
        onSubmit={handleOnSubmit}>
        <div className="row p-5 align-items-center animate__animated animate__slideInLeft">
          <div className="col-6">
            <div className={styled.spin}>
              <img src={tuerca} className="w-75" alt="alerta" />
            </div>
          </div>
          <div className="col-6">
            <img src={nombre} className="w-100" alt="alerta" />
          </div>
        </div>
        <div className="row">
          <div className="form-group col d-grid gap-2 col-6 mx-auto d">
            <label>Usuario: </label>
            <input
              type="text"
              name="username"
              value={input.username}
              className="form-control"
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group col d-grid gap-2 col-6 mx-auto">
            <label>Contraseña:</label>
            <input
              type="password"
              name="password"
              value={input.password}
              className="form-control"
              onChange={handleOnChange}
            />
          </div>
          {errors.password && <p>{errors.password}</p>}
          <button type="submit" className="btn btn-primary text-center mt-3">
            Iniciar Sesión
          </button>
        </div>
      </form>
    </div>
  );
};
