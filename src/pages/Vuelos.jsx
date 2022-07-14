import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { formatToISO8601 } from "../components/vuelo/Util";
import { DataScroller } from "primereact/datascroller";
import { Divider } from "primereact/divider";

import { VuelosService } from "../services/VuelosService";
import VueloCard from "../components/vuelo/VueloCard";
import Buscador from "../components/buscador/Buscador";
import "./Vuelo.css";

export default function Vuelos() {
  const data = useLocation().state;

  var raw = JSON.stringify({
    "currencyCode": "USD",
    "originDestinations": [
      {
        "id": "1",
        "originLocationCode": "RIO",
        "destinationLocationCode": "MAD",
        "departureDateTimeRange": {
          "date": formatToISO8601(data.departureDate),
          "time": "10:00:00"
        }
      },
      {
        "id": "2",
        "originLocationCode": "MAD",
        "destinationLocationCode": "RIO",
        "departureDateTimeRange": {
          "date": formatToISO8601(data.returnDate),
          "time": "17:00:00"
        }
      }
    ],
    "travelers": [
      {
        "id": "1",
        "travelerType": "ADULT"
      },
      {
        "id": "2",
        "travelerType": "CHILD"
      }
    ],
    "sources": [
      "GDS"
    ],
    "searchCriteria": {
      "maxFlightOffers": 2,
      "flightFilters": {
        "cabinRestrictions": [
          {
            "cabin": "BUSINESS",
            "coverage": "MOST_SEGMENTS",
            "originDestinationIds": [
              "1"
            ]
          }
        ],
        "carrierRestrictions": {
          "excludedCarrierCodes": [
            "AA",
            "TP",
            "AZ"
          ]
        }
      }
    }
  });

  const vuelosService = new VuelosService();
  const [vuelos, setVuelos] = useState([]);
  const [dictionariesRes, setDictionariesRes] = useState([]);
  useEffect(() => {
    async function get() {
      try {
        const data = await vuelosService.getToken().then(data => data)
        const requestOptions = {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            ...data
          },
          body: raw,
          redirect: 'follow'
        };

        vuelosService.getVuelos(requestOptions).then(res => {
          setDictionariesRes(res.dictionaries)
          setVuelos(res.data)
        })
        
      } catch (error) {
        console.log(error.status);
      }
    }
    get();
  }, []);

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
