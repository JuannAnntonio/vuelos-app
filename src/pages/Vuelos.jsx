import React, { useState, useEffect } from "react";
import { DataScroller } from "primereact/datascroller";

import { Divider } from "primereact/divider";

import { VuelosService } from "../services/VuelosService";
import VueloCard from "../components/vuelo/VueloCard";

import "./Vuelo.css";
import Buscador from "../components/buscador/Buscador";

export default function Vuelos() {
  const [vuelos, setVuelos] = useState([]);
  const vuelosService = new VuelosService();
  useEffect(() => {
    vuelosService.getVuelos().then((data) => setVuelos(data));
  }, []);

  const itemTemplate = (data) => {
    return (
      <VueloCard
        flightPrice={data.price.total}
        
        startIda={data.itineraries[0].segments[0].departure.iataCode}
        startRegreso={data.itineraries[1].segments[0].departure.iataCode}
        dateDepart={data.itineraries[0].segments[0].departure.at}
        dateArrive={data.itineraries[1].segments[0].departure.at}
        itinerariesDepart={data.itineraries[0]}
        itinerariesArrive={data.itineraries[1]}
      />
    );
  };
  return (
    <div className="grid align-items-center justify-content-center">
      <div className="col-2 flex align-items-center justify-content-center">
        <div className="p-fluid">
          <Buscador/>
        </div>
      </div>
      
        <Divider layout="vertical" />
      
      <div className="col-9 flex align-items-center justify-content-center">
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
