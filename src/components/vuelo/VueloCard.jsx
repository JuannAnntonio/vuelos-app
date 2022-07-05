import React, { useState, useEffect } from "react";
import { Card } from "primereact/card";
import { Fieldset } from "primereact/fieldset";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";

import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";

import { VuelosService } from "../../services/VuelosService";
import DetalleVuelo from "./DetalleVuelo";
import { getAirportByIata, formatTime, formatDate } from "./Util";






export default function VueloCard(props) {

const [airports, setAirports] = useState([]);
const [status, setStatus] = useState("loading");
const vuelosService = new VuelosService();

useEffect(() => {
  async function loadAirports() {
    try{
      const data = await vuelosService.getAirports();
    setAirports(data);
    setStatus("success");
    }catch(error){
      setStatus("error");
    }
  }
  loadAirports();
}, []);



  /*const startAirport = GetAirportByIata(props.startAirport);
  const endAirport = GetAirportByIata(props.endAirport);

  let [fechaDepart, horaDepart] = separateDate(props.departs);
  const [fechaArrive, horaArrive] = separateDate(props.arrives);*/


  var endCityDepart = props.itinerariesDepart.segments[props.itinerariesDepart.segments.length-1].arrival.iataCode;
  var endCityArrive = props.itinerariesArrive.segments[props.itinerariesArrive.segments.length-1].arrival.iataCode;

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
  
  if(status==="loading") return <span>Loading</span>
  if(status==="error") return <span>Error</span>

  return (
    <>
      <Card>
        <div className="grid">
          <div className="col-9">
            <Fieldset legend={headerIda} toggleable collapsed={true}>
              <DetalleVuelo
              segments = {props.itinerariesDepart.segments}
              airports ={airports}
              />
            </Fieldset>
            <Divider />
             <Fieldset legend={headerRegreso} toggleable collapsed={true}>
             <DetalleVuelo
              segments = {props.itinerariesArrive.segments}
              airports ={airports}
              />
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
