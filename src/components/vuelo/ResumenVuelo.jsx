import React from "react";
import { Card } from "primereact/card";
import { ImAirplane } from "react-icons/im";
export default function ResumenVuelo(props) {
  return (
    <Card>
      <div className="grid flex align-items-center justify-content-center">
        <div className="col-2">
          <ImAirplane />
        </div>
        <div className="col-10">
          <h2 className="text-center"> Detalles de la compra</h2>
        </div>



        <div className="col-12">JUAN</div>
      </div>
    </Card>
  );
}
