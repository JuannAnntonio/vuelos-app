import React, { useState } from "react";

import { Divider } from "primereact/divider";
import Pasajeros1 from "./Pasajeros1";

export default function Rserva() {
  return (
    <div className="grid align-items-center justify-content-center">
      <div className="col-8">
        <Pasajeros1 />
        <Divider/>
        <Pasajeros1 />
        <Divider/>
        <Pasajeros1 />
        <Divider/>
        <Pasajeros1 />
        <Divider/>
        <Pasajeros1 />
      </div>

      <Divider layout="vertical" />
      <div className="col-3">JUAN</div>
    </div>
  );
}
