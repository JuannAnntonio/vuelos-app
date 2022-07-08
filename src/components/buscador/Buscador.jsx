import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { AutoComplete } from "primereact/autocomplete";
import { VuelosService } from "../../services/VuelosService";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import { Card } from "primereact/card";
import { TabView, TabPanel } from "primereact/tabview";
//import  from 'react/style-prop-object';

export default function Buscador() {
  const [countries, setCountries] = useState([]);
  const [selectOrigen, setSelectOrigen] = useState(null);
  const [selectDestino, setSelectDestino] = useState(null);
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
    }, 25);
  };

  const setObject2 = (e) => {
    //setSelectedCountry1(e.value);
    console.log("Origen:", selectOrigen);
    console.log("Destino:", selectDestino);
  };

  /*const header = (
      <img alt="Card" src="images/usercard.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
  );*/
  const footer = (
    <span>
      <Button label="Buscar " icon="pi pi-check" />
    </span>
  );

  return (
    <>
      <div>
        <TabView>
          <TabPanel header="Ida y Vuelta">
            <div className="surface-500 card:bg-cyan-500  flex align-items-center justify-content-center">
              <Card
                align="center"
                title=""
                colorstyle="purpure"
                style={{ width: "25em" }}
                footer={footer}
              >
                <div className="field">
                  <h1>
                    {" "}
                    <FaPlaneDeparture /> -- Vuelos -- <FaPlaneArrival />{" "}
                  </h1>
                </div>

                <div className="field">
                  <div className="grid">
                    <div className="col-3">
                      <h3>Origen:</h3>
                    </div>
                    <div className="col-9">
                      <AutoComplete
                        value={selectOrigen}
                        suggestions={filteredCountries}
                        completeMethod={searchCountry}
                        field="stateCity"
                        onChange={(e) => setSelectOrigen(e.value)}
                        onHide={(e) => setObject2(e)}
                        aria-label="Countries o"
                      />
                    </div>
                  </div>
                </div>
                <div className="field">
                  Destino:
                  <AutoComplete
                    value={selectDestino}
                    suggestions={filteredCountries}
                    completeMethod={searchCountry}
                    field="stateCityd"
                    onChange={(e) => setSelectDestino(e.value)}
                    onHide={(e) => setObject2(e)}
                    aria-label="Countries d"
                  />
                </div>
              </Card>
            </div>
          </TabPanel>

          <TabPanel header="Solo Ida">
            <Card
              align="center"
              title=""
              colorstyle="purpure"
              style={{ width: "25em" }}
              footer={footer}
            >
              <div className="field">
                <h1>
                  {" "}
                  <FaPlaneDeparture /> -- Vuelos -- <FaPlaneArrival />{" "}
                </h1>
              </div>

              <div className="field">
                Origen:
                <AutoComplete
                  value={selectOrigen}
                  suggestions={filteredCountries}
                  completeMethod={searchCountry}
                  field="stateCity"
                  onChange={(e) => setSelectOrigen(e.value)}
                  onHide={(e) => setObject2(e)}
                  aria-label="Countries o"
                />
              </div>
              <div className="field">
                Destino:
                <AutoComplete
                  value={selectDestino}
                  suggestions={filteredCountries}
                  completeMethod={searchCountry}
                  field="stateCityd"
                  onChange={(e) => setSelectDestino(e.value)}
                  onHide={(e) => setObject2(e)}
                  aria-label="Countries d"
                />
              </div>
            </Card>
          </TabPanel>
        </TabView>
      </div>
    </>
  );
}
