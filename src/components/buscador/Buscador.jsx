import React, { useState, useEffect } from 'react';
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { AutoComplete } from 'primereact/autocomplete';
import { VuelosService } from '../../services/VuelosService';

export default function Buscador() {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [filteredCountries, setFilteredCountries] = useState(null);
  
    /*
    useEffect(() => {
      new VuelosService().getAirports().then((data) => setCountries(data));
    }, []); 
*/

    useEffect(() => {
        async function loadAirports() {
            const data = await new VuelosService().getAirports();
            setCountries(data);
        }
        loadAirports();
      }, []);
  
    const searchCountry = (event) => {
      setTimeout(() => {
        let _filteredCountries;
        if (!event.query.trim().length) {
          _filteredCountries = [...countries];
        } else {
          _filteredCountries = countries.filter((country) => {
            return country.stateCity
              .toLowerCase()
              .startsWith(event.query.toLowerCase());
          });
        }
        setFilteredCountries(_filteredCountries);
      },25);
    };
  
    const setObject2 = (e) => {
      //setSelectedCountry1(e.value);
      console.log("VAL:", selectedCountry);
    };
  return (
    <>
      <div className="field">
        <h1>Vuelos</h1>
      </div>
      <div className="field">
      Origen:
          <AutoComplete
        value={selectedCountry}
        suggestions={filteredCountries}
        completeMethod={searchCountry}
        field="stateCity"
        onChange={(e) => setSelectedCountry(e.value)}
        onHide={(e) => setObject2(e)}
        aria-label="Countries"
      />
      </div>
      <div className="field">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          {/* <InputText value={value3} onChange={(e) => setValue3(e.target.value)} placeholder="Search" /> */}
          <InputText placeholder="Destino" />
        </span>
      </div>
      <Button label="Buscar" />
    </>
  );
}
