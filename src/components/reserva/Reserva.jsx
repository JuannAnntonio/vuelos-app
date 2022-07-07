import React, { useState } from "react";

import { Divider } from "primereact/divider";
import Pasajeros1 from "./Pasajeros1";
import EnvioVaucher2 from "./EnvioVaucher2";
import DatosContacto3 from "./DatosContacto3";
import DatosTarjeta4 from "./DatosTarjeta4";
import DatosIngresados5 from "./DatosIngresados5";

export default function Reserva() {
  return (
    <div className="grid align-items-center justify-content-center">
      <div className="col-8">
        <Pasajeros1 />
        <Divider/>
        <EnvioVaucher2 />
        <Divider/>
        <DatosContacto3 />
        <Divider/>
        <DatosTarjeta4 />
        <Divider/>
        <DatosIngresados5 />
      </div>

      <Divider layout="vertical" />
      <div className="col-3">JUAN</div>
    </div>
  );
}
