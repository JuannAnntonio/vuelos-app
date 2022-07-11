import React from "react";

export default function Header(props) {
  let header = props.atr;
  return (
    <div className="grid">
      <div className="col-5" style={{ fontSize: "18px" }}>
        {header.icono} {header.titulo}
        <br />
        {header.fecha}
      </div>
      <div
        style={{ textAlign: "center", fontSize: "16px" }}
        className="col-3 flex align-items-center justify-content-center"
      >
        {header.start.codigo}
        <br />
        {header.start.aeropuerto}
      </div>
      <div
        style={{ textAlign: "center", fontSize: "16px" }}
        className="col-3 flex align-items-center justify-content-center"
      >
        {header.end.codigo}
        <br />
        {header.end.aeropuerto}
      </div>
      <div
        className="col-1 flex align-items-center justify-content-center"
        style={{ textAlign: "center", fontSize: "16px" }}
      >
        Duración {header.tiempo}
      </div>
    </div>
  );
}
