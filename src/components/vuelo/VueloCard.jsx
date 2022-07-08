import React, { useState, useEffect } from "react";
import { Card } from "primereact/card";
import { Fieldset } from "primereact/fieldset";
import { ProgressSpinner } from "primereact/progressspinner";

import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";

import { VuelosService } from "../../services/VuelosService";
import DetalleVuelo from "./DetalleVuelo";
import { getAirportByIata, formatDate } from "./Util";
import Precio from "./Precio";

export default function VueloCard(props) {
  const [airports, setAirports] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    async function loadAirports() {
      try {
        const data = await new VuelosService().getAirports();
        setAirports(data);
        setStatus("success");
      } catch (error) {
        setStatus("error");
      }
    }
    loadAirports();
  }, []);

  var endCityDepart =
    props.itinerariesDepart.segments[
      props.itinerariesDepart.segments.length - 1
    ].arrival.iataCode;
  var endCityArrive =
    props.itinerariesArrive.segments[
      props.itinerariesArrive.segments.length - 1
    ].arrival.iataCode;

  const headerIda = (
    <div className="grid">
      <div className="col-6">
        <FaPlaneDeparture /> IDA
        <br />
        {formatDate(props.dateDepart)}
      </div>
      <div
        style={{ textAlign: "center" }}
        className="col-3 flex align-items-center justify-content-center"
      >
        {props.startIda}
        <br />
        {getAirportByIata(airports, props.startIda).city}
      </div>
      <div
        style={{ textAlign: "center" }}
        className="col-3 flex align-items-center justify-content-center"
      >
        {endCityDepart}
        <br />
        {getAirportByIata(airports, endCityDepart).city}
      </div>
    </div>
  );
  const headerRegreso = (
    <div className="grid">
      <div className="col-6">
        <FaPlaneArrival /> REGRESO
        <br />
        {formatDate(props.dateArrive)}
      </div>
      <div
        style={{ textAlign: "center" }}
        className="col-3 flex align-items-center justify-content-center"
      >
        {props.startRegreso}
        <br />
        {getAirportByIata(airports, props.startRegreso).city}
      </div>
      <div
        style={{ textAlign: "center" }}
        className="col-3 flex align-items-center justify-content-center"
      >
        {endCityArrive}
        <br />
        {getAirportByIata(airports, endCityArrive).city}
      </div>
    </div>
  );

  if (status === "loading")
    return (
      <ProgressSpinner
        style={{ width: "20px", height: "20px" }}
        strokeWidth="5"
      />
    );
  if (status === "error") return <span>Error</span>;

  return (
    <>
      <Card>
        <div className="grid flex align-items-center justify-content-center">
          <div className="col-8">
            <Fieldset legend={headerIda} toggleable collapsed={'true'}>
              <DetalleVuelo
                segments={props.itinerariesDepart.segments}
                airports={airports}
              />
            </Fieldset>

            <Fieldset legend={headerRegreso} toggleable collapsed={'true'}>
              <DetalleVuelo
                segments={props.itinerariesArrive.segments}
                airports={airports}
              />
            </Fieldset>
          </div>

          <div className="col-3 flex align-items-center justify-content-center">
            <Precio precioVuelo={props.precioVuelo} styleButton={'block'} />
          </div>
        </div>
      </Card>
    </>
  );
}
