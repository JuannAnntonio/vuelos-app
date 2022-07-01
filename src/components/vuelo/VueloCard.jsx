import React from "react";
import { Card } from "primereact/card";

export default function VueloCard(props) {
  return (
    <>
      <Card>
        <div>
          <b>IDA: {props.departs} | {props.startAirport}   {props.endAirport} </b>
          {/* <b>IDA: {props.startAirport} | {props.departs}   {props.arrives} </b> */}
        </div>
        <div>
        <b>REGRESO: {props.arrives} | {props.endAirport}   {props.startAirport} </b>
          {/* <b>REGRESO: {props.endAirport} | {props.arrives}   {props.departs}</b> */}
          
        </div>
        <div>
          ${props.flightPrice}
        </div>
      </Card>
    </>
  );
}
