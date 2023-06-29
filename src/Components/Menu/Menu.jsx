import React from "react";
import Tuerca from "../../Assets/Tuerca.png";
import styled from "../Menu/Menu.module.css";
export const Menu = ({ diaComida, nombre }) => {
  return (
    <>
      <div className="row p-3">
        <div className="col-2">
          <div className={styled.spin}>
            <img src={Tuerca} alt="Tuerca" className="d-none d-lg-block img-fluid w-50 m-auto" />
            <img src={Tuerca} alt="Tuerca" className="d-lg-none d-lg-block img-fluid w-100 m-auto" />

          </div>
        </div>
        <div className="col-6 col-sm-10 text-start fs-4 mt-4">
          {nombre}: <span className="fs-5 text-primary mt-4">{diaComida}</span>
        </div>
      </div>
    </>
  );
};
