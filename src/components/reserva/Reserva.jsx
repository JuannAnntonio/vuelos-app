import React from "react";
import { useLocation } from "react-router-dom";
import { Divider } from "primereact/divider";
import Pasajeros1 from "./Pasajeros1";

import Precio from "../vuelo/Precio";
import ResumenVuelo from "../vuelo/ResumenVuelo";

import "./Reserva.css";

export default function Reserva() {
  const props = useLocation().state["props"];

  return (
    <div
      className="grid flex justify-content-center"
      style={{ marginTop: "3.5px" }}
    >
      <div className="col-8 align-items-center justify-content-center">
        <Pasajeros1 />
      </div>

      <Divider layout="vertical" />
      <div className="col-3">
        <Precio precioVuelo={props["precioVuelo"]} styleButton="none" />
        <Divider />
        <ResumenVuelo
          detalleIda={props["detalleIda"]}
          detalleVuelta={props["detalleVuelta"]}
          dictionaries={props["dictionaries"]}
        />
      </div>
    </div>
  );
}
