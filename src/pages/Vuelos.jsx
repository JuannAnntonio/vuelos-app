import React, { useState, useEffect } from "react";
import { DataScroller } from "primereact/datascroller";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { VuelosService } from "../services/VuelosService";
import VueloCard from "../components/vuelo/VueloCard";

import "./Vuelo.css";

export default function Vuelos() {
  const [vuelos, setVuelos] = useState([]);
  const vuelosService = new VuelosService();
  useEffect(() => {
    vuelosService.getVuelos().then((data) => setVuelos(data));
  }, []);

  const itemTemplate = (data) => {
    return (
      <VueloCard
        departs={data.itineraries[0].segments[0].departure.at}
        arrives={data.itineraries[0].segments[0].arrival.at}
        startAirport={data.itineraries[0].segments[0].departure.iataCode}
        endAirport={data.itineraries[0].segments[0].arrival.iataCode}
        flightPrice={data.price.total}
      />
    );
  };
  return (
    <div className="grid">
      <div className="col-3 flex align-items-center justify-content-center">
        <div className="p-fluid">
          <div className="field">
            <h1>Vuelos</h1>
          </div>
          <div className="field">
            <span className="p-input-icon-left">
              <i className="pi pi-search" />
              {/* <InputText value={value3} onChange={(e) => setValue3(e.target.value)} placeholder="Search" /> */}
              <InputText placeholder="Origen" />
            </span>
          </div>
          <div className="field">
            <span className="p-input-icon-left">
              <i className="pi pi-search" />
              {/* <InputText value={value3} onChange={(e) => setValue3(e.target.value)} placeholder="Search" /> */}
              <InputText placeholder="Destino" />
            </span>
          </div>
          <Button label="Buscar" />
        </div>
      </div>
      <div className="col-1">
        <Divider layout="vertical" />
      </div>
      <div className="col-8 flex align-items-center justify-content-center">
        <DataScroller
          value={vuelos}
          itemTemplate={itemTemplate}
          rows={5}
          inline
          scrollHeight="600px"
          header="Desliza hacia abajo para cargar más resultados"
        />
      </div>
    </div>
  );
}
