import React from "react";
import { Divider } from "primereact/divider";
import { getAirportByIata, formatTime, formatDateShort,formatTimeHM } from "./Util";
import "./DetalleVuelo.css";

export default function DetalleVuelo(props) {
  return (
    <>
      {props.segments.map((segment, index) => {
        return (
          <div
            className="grid flex align-items-center justify-content-center"
            key={"grid" + index}
          >
            <div className="col-5" style={{ textAlign: "center" }}>
              <h4>{formatDateShort(segment.departure.at)}</h4>
              <h2>{formatTime(segment.departure.at)}</h2>
              <h4>{segment.departure.iataCode}</h4>
              {getAirportByIata(props.airports, segment.departure.iataCode).city}
              <br />
              {getAirportByIata(props.airports, segment.departure.iataCode).name}
            </div>
            <div className="col-5" style={{ textAlign: "center" }}>
              <h4>{formatDateShort(segment.arrival.at)}</h4>
              <h2>{formatTime(segment.arrival.at)}</h2>
              <h4>{segment.arrival.iataCode}</h4>
              {getAirportByIata(props.airports, segment.arrival.iataCode).city}
              <br />
              {getAirportByIata(props.airports, segment.arrival.iataCode).name}
            </div>
            <Divider />
          </div>
        );
      })}
    </>
  );
}
