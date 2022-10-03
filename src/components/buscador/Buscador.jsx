import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { getAirports } from "../../services/getAirports";
import { classNames } from "primereact/utils";
import { Card } from "primereact/card";
import { RadioButton } from "primereact/radiobutton";
import { AutoComplete } from "primereact/autocomplete";
import { Calendar } from "primereact/calendar";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import { addLocale } from "primereact/api";
import "./Buscador.css";

export default function Buscador(props) {
  addLocale('es', {
    firstDayOfWeek: 1,
    dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
    dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
    dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
    monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
    monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
    today: 'Hoy',
    clear: 'Limpiar'
  });

  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(null);

  useEffect(() => {
    async function loadAirports() {
      const response = await getAirports();
      const { data } = response
      setCountries(data);
    }
    loadAirports();
  }, []);

  const dataBusqueda = props.source;
  let values = {};
  let bandera = "Ida y vuelta";
  if (dataBusqueda) {
    bandera = dataBusqueda.typeOfFlight;
    values = {
      origin: dataBusqueda.origin,
      destination: dataBusqueda.destination,
      departureDate: dataBusqueda.departureDate,
      returnDate: dataBusqueda.returnDate,
      adults: dataBusqueda.adults,
      children: dataBusqueda.children,
    };
  }
  const [typeOfFlight, setTypeOfFlight] = useState(bandera);
  const flightForm = useFormik({
    initialValues: dataBusqueda
      ? values
      : {
        origin: "",
        destination: "",
        departureDate: null,
        returnDate: null,
        adults: 1,
        children: 0,
      },
    validate: (data) => {
      let errors = {};

      if (!data.origin) {
        errors.origin = "Ingresa un origen";
      }

      if (!data.destination) {
        errors.destination = "Ingresa un destino";
      }

      if (!data.departureDate) {
        errors.departureDate = "Ingresa una fecha de partida";
      }

      return errors;
    },
    onSubmit: (data) => {
      navigate("/vuelos", {
        state: { ...data, typeOfFlight },
      });
    },
  });

  const isFormFieldValid = name => !!(flightForm.touched[name] && flightForm.errors[name]);
  const getFormErrorMessage = name => {
    return (
      isFormFieldValid(name) && (
        <small className="p-error">{flightForm.errors[name]}</small>
      )
    );
  };

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
    }, 250);
  };

  return (
    <>
      <Card
        title="Buscar vuelos"
        style={{ maxWidth: "425px", margin: "0 auto" }}
      >
        <div className="flex">
          <div className="field-radiobutton col">
            <RadioButton
              inputId="roundTrip"
              name="typeOfFlight"
              value="Ida y vuelta"
              onChange={(e) => {
                setTypeOfFlight(e.value);
              }}
              checked={typeOfFlight === "Ida y vuelta"}
            />
            <label htmlFor="roundTrip">Ida y vuelta</label>
          </div>

          <div className="field-radiobutton col">
            <RadioButton
              inputId="oneWayTrip"
              name="typeOfFlight"
              value="Ida"
              onChange={(e) => setTypeOfFlight(e.value)}
              checked={typeOfFlight === "Ida"}
            />
            <label htmlFor="oneWayTrip">Sólo ida</label>
          </div>
        </div>

        <form onSubmit={flightForm.handleSubmit} className="p-fluid">
          <div className="field mt-5">
            <span className="p-float-label">
              <AutoComplete
                name="origin"
                value={flightForm.values.origin}
                suggestions={filteredCountries}
                completeMethod={searchCountry}
                field="stateCity"
                onChange={flightForm.handleChange}
                className={classNames({
                  "p-invalid": isFormFieldValid("origin"),
                })}
              />
              <label
                htmlFor="origin"
                className={classNames({
                  "p-error": isFormFieldValid("origin"),
                })}
              >
                Origen*
              </label>
            </span>
            {getFormErrorMessage("origin")}
          </div>

          <div className="field mt-5">
            <span className="p-float-label">
              <AutoComplete
                name="destination"
                value={flightForm.values.destination}
                suggestions={filteredCountries}
                completeMethod={searchCountry}
                field="stateCity"
                onChange={flightForm.handleChange}
                className={classNames({
                  "p-invalid": isFormFieldValid("destination"),
                })}
              />
              <label
                htmlFor="origin"
                className={classNames({
                  "p-error": isFormFieldValid("destination"),
                })}
              >
                Destino*
              </label>
            </span>
            {getFormErrorMessage("destination")}
          </div>

          <div className="field mt-5">
            <span className="p-float-label">
              <Calendar
                locale="es"
                name="departureDate"
                value={flightForm.values.departureDate}
                onChange={flightForm.handleChange}
                dateFormat="yy-mm-dd"
                readOnlyInput
                className={classNames({
                  "p-invalid": isFormFieldValid("departureDate"),
                })}
              />
              <label
                htmlFor="departureDate"
                className={classNames({
                  "p-error": isFormFieldValid("departureDate"),
                })}
              >
                Ida
              </label>
            </span>
            {getFormErrorMessage("departureDate")}
          </div>

          <div className="field mt-5">
            <span className="p-float-label">
              <Calendar
                locale="es"
                name="returnDate"
                value={typeOfFlight === "Ida" ? "" : flightForm.values.returnDate}
                onChange={flightForm.handleChange}
                dateFormat="yy-mm-dd"
                minDate={flightForm.values.departureDate}
                readOnlyInput
                disabled={typeOfFlight === "Ida"}
                inputStyle={
                  typeOfFlight === "Ida" ? { background: "#ccc" } : null
                }
              />
              <label htmlFor="arrivalDate">Vuelta</label>
            </span>
          </div>

          <div className="field mt-5">
            <span className="p-float-label">
              <InputNumber
                name="adults"
                value={flightForm.values.adults}
                onValueChange={flightForm.handleChange}
                min={1}
                max={8}
                showButtons
                buttonLayout="horizontal"
                incrementButtonClassName="p-button-success p-inputnumber-button-up"
                decrementButtonClassName="p-button-danger p-inputnumber-button-down"
                incrementButtonIcon="pi pi-plus"
                decrementButtonIcon="pi pi-minus"
                mode="decimal"
              />
              <label htmlFor="adults">Adultos</label>
            </span>
            {getFormErrorMessage("name")}
          </div>

          <div className="field mt-5">
            <span className="p-float-label">
              <InputNumber
                name="children"
                value={flightForm.values.children}
                onValueChange={flightForm.handleChange}
                min={0}
                max={4}
                showButtons
                buttonLayout="horizontal"
                incrementButtonClassName="p-button-success p-inputnumber-button-up"
                decrementButtonClassName="p-button-danger p-inputnumber-button-down"
                incrementButtonIcon="pi pi-plus"
                decrementButtonIcon="pi pi-minus"
                mode="decimal"
              />
              <label htmlFor="children">Niños</label>
            </span>
            {getFormErrorMessage("name")}
          </div>

          <Button type="submit" label="Buscar vuelos" className="mt-2" />
        </form>
      </Card>
    </>
  );
}
