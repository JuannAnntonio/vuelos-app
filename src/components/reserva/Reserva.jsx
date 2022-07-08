import React from "react";
import { useLocation } from "react-router-dom";
import { Divider } from "primereact/divider";
import Pasajeros1 from "./Pasajeros1";
import EnvioVaucher2 from "./EnvioVaucher2";
import DatosContacto3 from "./DatosContacto3";
import DatosTarjeta4 from "./DatosTarjeta4";
import DatosIngresados5 from "./DatosIngresados5";
import Precio from "../vuelo/Precio";

export default function Reserva() {
  const props = useLocation().state;
  console.log(props);

  return (
    <div className="grid flex justify-content-center">
      <div className="col-8 align-items-center justify-content-center">
        <Pasajeros1 />
        <Divider />
        <EnvioVaucher2 />
        <Divider />
        <DatosContacto3 />
        <Divider />
        <DatosTarjeta4 />
        <Divider />
        <DatosIngresados5 />
      </div>

      <Divider layout="vertical" />
      <div className="col-3">
        <Precio precioVuelo={props?.precioVuelo} styleButton='none' />
      </div>
    </div>
  );
}
