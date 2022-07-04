import React, { useState, useEffect } from "react";
import { Card } from "primereact/card";
import { Fieldset } from "primereact/fieldset";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";

import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";

import { VuelosService } from "../../services/VuelosService";

function separateDate(dateString) {
  return dateString.split("T");
}

function formateDate(fecha) {
  const [year, month, day] = fecha.split("-");
  const date = new Date(+year, month - 1, +day);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("es-ES", options);
}

function GetAirportByIata(iata) {
  var airport = {};
  const [airports, setAirports] = useState([]);
  const vuelosService = new VuelosService();
  useEffect(() => {
    vuelosService.getAirports().then((data) => setAirports(data));
  }, []);

  Object.keys(airports).forEach(function (key) {
    if (airports[key]["iata"] == iata) {
      airport = airports[key];
    }
  });
  console.log(airport);
  return airport;
}

export default function VueloCard(props) {
  const startAirport = GetAirportByIata(props.startAirport);
  const endAirport = GetAirportByIata(props.endAirport);

  const [fechaDepart, horaDepart] = separateDate(props.departs);
  const [fechaArrive, horaArrive] = separateDate(props.arrives);

  const headerIda = (
    <div className="grid">
      <div className="col-6">
        <FaPlaneDeparture /> IDA
        <br />
        {formateDate(fechaDepart)}
      </div>
      <div
        style={{ textAlign: "center" }}
        className="col-3 flex align-items-center justify-content-center"
      >
        {props.startAirport}
        <br />
        {startAirport.city}
      </div>
      <div
        style={{ textAlign: "center" }}
        className="col-3 flex align-items-center justify-content-center"
      >
        {props.endAirport}
        <br />
        {endAirport.city}
      </div>
    </div>
  );
  const headerRegreso = (
    <div className="grid">
      <div className="col-6">
        <FaPlaneArrival /> REGRESO
        <br />
        {formateDate(fechaArrive)}
      </div>
      <div
        style={{ textAlign: "center" }}
        className="col-3 flex align-items-center justify-content-center"
      >
        {props.endAirport}
        <br />
        {endAirport.city}
      </div>
      <div
        style={{ textAlign: "center" }}
        className="col-3 flex align-items-center justify-content-center"
      >
        {props.startAirport}
        <br />
        {startAirport.city}
      </div>
    </div>
  );
  return (
    <>
      <Card>
        <div className="grid">
          <div className="col-9">
            <Fieldset legend={headerIda} toggleable collapsed={true}>
              <div className="grid">
                <div className="col-12">
                  <div className="p-fluid">
                    <div className="field">
                      <h1>
                        {props.startAirport} - {props.endAirport}
                      </h1>
                    </div>
                    <div className="field">
                      <h1>
                        {startAirport.city} - {endAirport.city}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              <p>{horaDepart}</p>
              <p>{startAirport.state}</p>
              <p>{startAirport.name}</p>
              <p>
                {props.startAirport} - {props.endAirport}
              </p>
            </Fieldset>
            <Divider />
            <Fieldset legend={headerRegreso} toggleable collapsed={true}>
              <div className="grid">
                <div className="col-12">
                  <div className="p-fluid">
                    <div className="field">
                      <h1>
                        {props.startAirport} - {props.endAirport}
                      </h1>
                    </div>
                    <div className="field">
                      <h1>
                        {startAirport.city} - {endAirport.city}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              <p>{horaArrive}</p>
              <p>{startAirport.state}</p>
              <p>{startAirport.name}</p>
              <p>
                {props.startAirport} - {props.endAirport}
              </p>
            </Fieldset>
          </div>
          <div className="col-1">
            <Divider layout="vertical" />
          </div>
          <div className="col-2 flex align-items-center justify-content-center">
            <Button label="Comprar" />
          </div>
        </div>
      </Card>
    </>
  );
}
