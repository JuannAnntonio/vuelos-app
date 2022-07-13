import React, { useState, useEffect, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import { SelectButton } from "primereact/selectbutton";
import { Calendar } from "primereact/calendar";

import EnvioVaucher2 from "./EnvioVaucher2";
import DatosContacto3 from "./DatosContacto3";
import DatosFinales6 from "./DatosFinales6";
import DatosTarjeta from "./DatosTarjeta";

export default function Pasajeros1() {
  //Tenemos que pintar el numero de pasajeros que vengan, simulare que vienen 2 por ahora
  const tamanio = 2;
  function initPasajeros() {
    const array = [];
    for (let i = 0; i < tamanio; i++) {
      array[i] = {
        index: i,
        nombre: "",
        apellidos: "",
        paisResidencia: "",
        fechaNacimiento: null,
        sexo: null,
      };
    }
    return array;
  }
  const [pasajeros, setPasajeros] = useState(initPasajeros());
  const optionSexo = ["Masculino", "Femenino"];

  function changePasajero(index, key, value) {
    //console.log("VAL", value);

    /* let temp_state = [...pasajeros];
      temp_state[index][key] = value 
      setPasajeros(temp_state);
      console.log("pasajeros-U", pasajeros);
    */

    setPasajeros(
      pasajeros.map((p) =>
        p.index === index ? { ...p, [key]: value } : { ...p }
      )
    );
  }

  function printPasajeros() {
    return pasajeros.map((pasajero, i) => {
      return (
        <div key={Math.random()}>
          <h3>Pasajero: {i + 1}</h3>

          <div className="grid">
            <div className="col-12" style={{ fontSize: "18px" }}>
              <div className="p-inputgroup">
                <span className="p-inputgroup-addon">
                  <i className="pi pi-user"></i>
                </span>
                {console.log("PAS:74", pasajero)}
                <InputText
                  placeholder="Nombres"
                  value={pasajero.nombre}
                  onChange={(e) => changePasajero(i, "nombre", e.target.value)}
                />
              </div>
            </div>
            <div className="col-12" style={{ fontSize: "18px" }}>
              <div className="p-inputgroup">
                <span className="p-inputgroup-addon">
                  <i className="pi pi-user"></i>
                </span>
                <InputText
                  placeholder="Apellidos"
                  value={pasajero.apellidos}
                  onChange={(e) =>
                    changePasajero(i, "apellidos", e.target.value)
                  }
                />
              </div>
            </div>

            <div className="col-12" style={{ fontSize: "18px" }}>
              <div className="p-inputgroup">
                <span className="p-inputgroup-addon">
                  <i className="pi pi-user"></i>
                </span>
                <InputText
                  placeholder="País de Residencia"
                  value={pasajero.paisResidencia}
                  onChange={(e) =>
                    changePasajero(i, "paisResidencia", e.target.value)
                  }
                />
              </div>
            </div>

            <div
              className="col-3 flex align-items-center"
              style={{ fontSize: "17px" }}
            >
              Fecha de Nacimiento:
            </div>
            <div className="col-4">
              <Calendar
                id="icon"
                showIcon
                value={pasajero.fechaNacimiento}
                onChange={(e) =>
                  changePasajero(i, "fechaNacimiento", e.target.value)
                }
              />
            </div>

            <div
              className="col-1 flex align-items-center"
              style={{ fontSize: "17px" }}
            >
              Sexo:
            </div>
            <div className="col-4">
              <SelectButton
                options={optionSexo}
                value={pasajero.sexo}
                onChange={(e) => changePasajero(i, "sexo", e.target.value)}
              />
            </div>
          </div>
          <Divider />
        </div>
      );
    });
  }

  return (
    <>
      <Card>
        <h2 className="text-center">¿Quiénes viajan?</h2>
        {printPasajeros()}
      </Card>
      <Divider />
      <EnvioVaucher2 />
      <Divider />
      <DatosContacto3 />
      <Divider />
      <DatosTarjeta />
      <Divider />
      <DatosFinales6 info={pasajeros} />
    </>
  );
}
