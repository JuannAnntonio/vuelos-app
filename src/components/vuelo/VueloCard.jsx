import { useState, useEffect } from "react";
import { Card } from "primereact/card";
import { Fieldset } from "primereact/fieldset";
import { ProgressSpinner } from "primereact/progressspinner";
import { Divider } from "primereact/divider";

import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";

import { getAirports } from "../../services/getAirports";
import DetalleVuelo from "./DetalleVuelo";
import { getAirportByIata, formatDate, formatTimeHM } from "./Util";
import Precio from "./Precio";
import Header from "./Header";

export default function VueloCard(props) {
  const [airports, setAirports] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    async function loadAirports() {
      try {
        const response = await getAirports();
        setAirports(response.data);
        setStatus("success");
      } catch (error) {
        setStatus("error");
      }
    }
    loadAirports();
  }, []);

  let jsonHeaderIda = {
    titulo: "IDA",
    icono: <FaPlaneDeparture />,
    fecha: formatDate(props.dateDepart),
    start: {
      codigo: props.startIda,
      aeropuerto: getAirportByIata(airports, props.startIda).city,
    },
    end: {
      codigo:
        props.itinerariesDepart.segments[
          props.itinerariesDepart.segments.length - 1
        ].arrival.iataCode,
      aeropuerto: getAirportByIata(
        airports,
        props.itinerariesDepart.segments[
          props.itinerariesDepart.segments.length - 1
        ].arrival.iataCode
      ).city,
    },
    escalas: props.itinerariesDepart.segments,
    tiempo: formatTimeHM(props.itinerariesDepart.duration),
  };

  let jsonHeaderVuelta = props.itinerariesArrive
    ? {
        titulo: "REGRESO",
        icono: <FaPlaneArrival />,
        fecha: formatDate(props.dateArrive),
        start: {
          codigo: props.startRegreso,
          aeropuerto: getAirportByIata(airports, props.startRegreso).city,
        },
        end: {
          codigo:
            props.itinerariesArrive.segments[
              props.itinerariesArrive.segments.length - 1
            ].arrival.iataCode,
          aeropuerto: getAirportByIata(
            airports,
            props.itinerariesArrive.segments[
              props.itinerariesArrive.segments.length - 1
            ].arrival.iataCode
          ).city,
        },
        escalas: props.itinerariesArrive.segments,
        tiempo: formatTimeHM(props.itinerariesArrive.duration),
      }
    : null;

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
            <Fieldset
              legend={<Header atr={jsonHeaderIda} />}
              toggleable
              collapsed={true}
            >
              <DetalleVuelo
                segments={props.itinerariesDepart.segments}
                dictionaries={props.dictionaries}
                airports={airports}
              />
            </Fieldset>

            {jsonHeaderVuelta ? (
              <Fieldset
                legend={<Header atr={jsonHeaderVuelta} />}
                toggleable
                collapsed={true}
              >
                <DetalleVuelo
                  segments={props.itinerariesArrive.segments}
                  dictionaries={props.dictionaries}
                  airports={airports}
                />
              </Fieldset>
            ) : (
              ""
            )}
          </div>
          <Divider layout="vertical" />
          <div className="col-3 flex align-items-center justify-content-center">
            <Precio
              precioVuelo={props.precioVuelo}
              ida={jsonHeaderIda}
              vuelta={jsonHeaderVuelta}
              dictionaries={props.dictionaries}
              adults={props.adults}
              children={props.children}
              styleButton={"block"}
            />
          </div>
        </div>
        <Divider />
      </Card>
    </>
  );
}
