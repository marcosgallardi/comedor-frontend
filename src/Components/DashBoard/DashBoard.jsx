import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import axios from "axios";

export const DashBoard = () => {
  let initialState = {
    id: 1,
    menuPrincipal: "",
    menuUno: "",
    menuDos: "",
    menuDieta: "",
  };

  const endpoint = "comedor/menuPut";

  const [menu, setMenu] = useState(initialState);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setMenu({
      ...menu,
      [name]: value,
    });
  };

  let handleSubmit = async (e) => {
    try {
      await axios.put(endpoint, menu);
    } catch (error) {
      throw error.message;
    }
  };

  return (
    <div>
      <Link to="/">
        <img src={logo} alt="logo" className="w-25 p-5" />
      </Link>
      <form
        className="position-absolute top-50 start-50 translate-middle"
        onSubmit={handleSubmit}>
        <h2 className="display-5 fw-bold">Cambiar menu</h2>
        <div className="pt-5">
          <label htmlFor="" className="form-label">
            Menu principal
          </label>
          <input
            type="text"
            name="menuPrincipal"
            onChange={handleChange}
            value={menu.menuPrincipal}
            className="form-control"
          />
          <label htmlFor="" className="form-label">
            Menu Uno
          </label>
          <input
            type="text"
            name="menuUno"
            onChange={handleChange}
            value={menu.menuUno}
            className="form-control"
          />
          <label htmlFor="" className="form-label">
            Menu Dos
          </label>
          <input
            type="text"
            name="menuDos"
            onChange={handleChange}
            value={menu.menuDos}
            className="form-control"
          />
          <label htmlFor="" className="form-label">
            Menu Dieta
          </label>
          <input
            type="text"
            name="menuDieta"
            onChange={handleChange}
            value={menu.menuDieta}
            className="form-control"
          />
        </div>
        <div class="d-grid gap-2">
          <button className="btn btn-primary mt-5">Cambiar</button>
        </div>
      </form>
    </div>
  );
};
