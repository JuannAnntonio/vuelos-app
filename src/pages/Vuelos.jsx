import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { get } from "../services/getVuelos";
import { DataScroller } from "primereact/datascroller";
import { Divider } from "primereact/divider";
import { ProgressSpinner } from "primereact/progressspinner"
import VueloCard from "../components/vuelo/VueloCard";
import Buscador from "../components/buscador/Buscador";
import { Message } from 'primereact/message';
import "./Vuelo.css";

export default function Vuelos() {
  const data = useLocation().state;
  const msgNotData = useRef(null);

  const [vuelos, setVuelos] = useState([]);
  const [dictionariesRes, setDictionariesRes] = useState([]);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    if (data) {
      setLoading(true)

      get(data).then(res => {
        setVuelos(res.data)
        setDictionariesRes(res.dictionaries)
        setLoading(false)
      });
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
              <Message severity="warn" text="Debes rellenar el formulario para obtener los datos" />
            </div>
          </>
      }
    </div>
  );
}
