import React from "react";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";

import { ImAirplane } from "react-icons/im";
import { IoEllipsisHorizontalOutline } from "react-icons/io5";
import { BsCheckLg, BsXLg } from "react-icons/bs";

export default function ResumenVuelo(props) {
  console.log("ResumenVuelo", props);
  const ida = props.detalleIda;
  const vuelta = props.detalleVuelta;

  return (
    <Card>
      <div className="grid flex align-items-center justify-content-center">
        <div className="col-2">
          <ImAirplane size="25"/>
        </div>
        <div className="col-10">
          <h2 className="text-center"> Detalle de la compra</h2>
        </div>
        <div className="col-12">
          <h3>
            {" "}
            {ida.start.aeropuerto} - {ida.end.aeropuerto}{" "}
          </h3>
        </div>
        <div className="col-12">
          {ida.titulo}
          <br />
          {ida.fecha}
        </div>
        <div className="col-6">
          {ida.escalas.map((segment, index) => {
            return (
              <>
                <img
                  key={"IMG" + segment.carrierCode + index}
                  style={{ width: "30px", height: "30px" }}
                  src={"/img/" + segment.carrierCode + ".png"}
                />
                {segment.carrierCode}
                <br />
              </>
            );
          })}
        </div>
        <div className="col-6" style={{ textAlign: "right" }}>
          Duración<h4>{ida.tiempo}</h4>
        </div>

        <div className="col-4" style={{ textAlign: "center" }}>
          <h3>{ida.start.codigo}</h3>
        </div>

        <div className="col-4" style={{ textAlign: "center" }}>
          <h4>{ida.escalas.length} escala(s)</h4>
          <IoEllipsisHorizontalOutline />
        </div>
        <div className="col-4" style={{ textAlign: "center" }}>
          <h3>{ida.end.codigo}</h3>
        </div>

        <Divider />

        <div className="col-12">
          <h3>
            {" "}
            {vuelta.start.aeropuerto} - {vuelta.end.aeropuerto}{" "}
          </h3>
        </div>
        <div className="col-12">
          {vuelta.titulo}
          <br />
          {vuelta.fecha}
        </div>
        <div className="col-6">
          {vuelta.escalas.map((segment, index) => {
            return (
              <>
                <img
                  key={"IMG" + segment.carrierCode + index}
                  style={{ width: "30px", height: "30px" }}
                  src={"/img/" + segment.carrierCode + ".png"}
                />
                {segment.carrierCode}
                <br />
              </>
            );
          })}
        </div>
        <div className="col-6" style={{ textAlign: "right" }}>
          Duración<h4>{vuelta.tiempo}</h4>
        </div>

        <div className="col-4" style={{ textAlign: "center" }}>
          <h3>{vuelta.start.codigo}</h3>
        </div>

        <div className="col-4" style={{ textAlign: "center" }}>
          <h4>{vuelta.escalas.length} escala(s)</h4>
          <IoEllipsisHorizontalOutline />
        </div>
        <div className="col-4" style={{ textAlign: "center" }}>
          <h3>{vuelta.end.codigo}</h3>
        </div>

        <Divider />

        <div className="col-12">
          <h3> Política de cambios y cancelaciones</h3>
        </div>
        <div className="col-2" style={{ color: "#00AD00" }}>
          <BsCheckLg />
        </div>
        <div className="col-10" style={{ color: "#00AD00" }}>
          <h4> Permite (con costo)</h4>
        </div>
        <div className="col-2">
          <BsXLg />
        </div>
        <div className="col-10">
          <h4> No permite</h4>
        </div>
      </div>
    </Card>
  );
}
