import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getVuelos } from "../services/getVuelos";
import { DataScroller } from "primereact/datascroller";
import { Divider } from "primereact/divider";
import { ProgressSpinner } from "primereact/progressspinner"
import VueloCard from "../components/vuelo/VueloCard";
import Buscador from "../components/buscador/Buscador";
import { Message } from 'primereact/message';
import "./Vuelo.css";

export default function Vuelos() {
  const data = useLocation().state;

  const [vuelos, setVuelos] = useState([]);
  const [dictionariesRes, setDictionariesRes] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      const response = await getVuelos(data)
      setVuelos(response.data)
      setDictionariesRes(response.dictionaries)
      setLoading(false)
    }
    if (data) {
      fetchData()
    }
  }, [data]);

  const itemTemplate = (vuelo) => {
    let dataVuelta = vuelo.itineraries[1] ? vuelo.itineraries[1] : null;
    return (
      <VueloCard
        precioVuelo={vuelo.price}
        startIda={vuelo.itineraries[0].segments[0].departure.iataCode}
        startRegreso={dataVuelta ? dataVuelta.segments[0].departure.iataCode : null}
        dateDepart={vuelo.itineraries[0].segments[0].departure.at}
        dateArrive={dataVuelta ? dataVuelta.segments[0].departure.at : null}
        itinerariesDepart={vuelo.itineraries[0]}
        itinerariesArrive={dataVuelta}
        dictionaries={dictionariesRes}
        adults={data['adults']}
        children={data['children']}
      />
    );
  };

  return (
    <div className="grid align-items-center justify-content-center">
      {
        data
          ? <>
            <div className="col-3 flex align-items-center justify-content-center">
              <div className="p-fluid">
                <Buscador source={data} />
              </div>
            </div>

            <Divider layout="vertical" />

            <div className="col-8 flex align-items-center justify-content-center">
              {
                loading
                  ? <ProgressSpinner />
                  : <DataScroller
                    value={vuelos}
                    itemTemplate={itemTemplate}
                    rows={5}
                    inline
                    scrollHeight="800px"
                    header="Desliza hacia abajo para cargar más resultados"
                  />
              }
            </div>
          </>
          : <>
            <div className="col-3 flex align-items-center justify-content-center">
              <div className="p-fluid">
                <Buscador source={data} />
              </div>
            </div>

            <Divider layout="vertical" />

            <div className="col-8 flex align-items-center justify-content-center">
              <Message severity="warn" text="Ingresa datos para obtener resultados" />
            </div>
          </>
      }
    </div>
  );
}
