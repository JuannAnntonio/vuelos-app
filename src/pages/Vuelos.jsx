import React, { useState, useEffect } from "react";
import { DataScroller } from "primereact/datascroller";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import { VuelosService } from "../services/VuelosService";
import  VueloCard  from "../components/vuelo/VueloCard";


export default function Vuelos() {
  const [vuelos, setVuelos] = useState([]);
  const vuelosService = new VuelosService();
  useEffect(() => {
    vuelosService.getVuelos().then((data) => setVuelos(data));
  }, []); 

  const itemTemplate = (data) => {
    return (
      <div className="product-item">
        <VueloCard
            style={{ color: "#94031e" }}
            personName="Juan"
            departs={data.itineraries[0].segments[0].departure.at}
            arrives={data.itineraries[0].segments[0].arrival.at}
            startAirport={
              data.itineraries[0].segments[0].departure.iataCode
            }
            endAirport={data.itineraries[0].segments[0].arrival.iataCode}
            flightPrice={data.price.total}
          />

        
        
        

      </div>
    );
  };
  return (
    <div className="vuelos">
      <h1>Vuelos</h1>
      <div className="datascroller-demo">
        <div className="card">
          <DataScroller
            value={vuelos}
            itemTemplate={itemTemplate}
            rows={5}
            inline
            scrollHeight="500px"
            header="Desliza hacia abajo para cargar más"
          />

          
        </div>
      </div>
    </div>
  );
}
