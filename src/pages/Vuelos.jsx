import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { get } from "../services/getVuelos";
import { DataScroller } from "primereact/datascroller";
import { Divider } from "primereact/divider";

import VueloCard from "../components/vuelo/VueloCard";
import Buscador from "../components/buscador/Buscador";
import "./Vuelo.css";

export default function Vuelos() {
  const data = useLocation().state;
  const [vuelos, setVuelos] = useState([]);
  const [dictionariesRes, setDictionariesRes] = useState([]);
  useEffect(() => {
    get(data).then(res => {
      setVuelos(res.data)
      setDictionariesRes(res.dictionaries)
    });
  }, [data]);

  const itemTemplate = (data) => {
    return (
      <VueloCard
        precioVuelo={data.price}
        startIda={data.itineraries[0].segments[0].departure.iataCode}
        startRegreso={data.itineraries[1].segments[0].departure.iataCode}
        dateDepart={data.itineraries[0].segments[0].departure.at}
        dateArrive={data.itineraries[1].segments[0].departure.at}
        itinerariesDepart={data.itineraries[0]}
        itinerariesArrive={data.itineraries[1]}
        dictionaries={dictionariesRes}
      />
    );
  };
  return (
    <div className="grid align-items-center justify-content-center">
      <div className="col-3 flex align-items-center justify-content-center">
        <div className="p-fluid">
          <Buscador source={data} />
        </div>
      </div>

      <Divider layout="vertical" />

      <div className="col-8 flex align-items-center justify-content-center">
        <DataScroller
          value={vuelos}
          itemTemplate={itemTemplate}
          rows={5}
          inline
          scrollHeight="800px"
          header="Desliza hacia abajo para cargar más resultados"
        />
      </div>
    </div>
  );
}
