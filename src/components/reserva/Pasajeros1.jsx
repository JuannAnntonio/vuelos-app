import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import { SelectButton } from "primereact/selectbutton";
import { Calendar } from "primereact/calendar";

export default function Pasajeros1() {
  const [fechaNacimiento, setFechaNacimiento] = useState(null);
  const [sexo, setSexo] = useState(null);
  const optionSexo = ["Masculino", "Femenino"];
  return (
    <Card>
      <h2>¿Quiénes viajan?</h2>
      <h3 className="text-center">Pasajeros</h3>

      <div className="grid">
        <div className="col-12" style={{ fontSize: "18px" }}>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <InputText placeholder="NOMBRES" />
          </div>
        </div>
        <div className="col-12" style={{ fontSize: "18px" }}>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <InputText placeholder="APELLIDOS" />
          </div>
        </div>

        <div className="col-12" style={{ fontSize: "18px" }}>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <InputText placeholder="PAÍS DE RESIDENCIA" />
          </div>
        </div>

        <div
          className="col-3 flex align-items-center"
          style={{ fontSize: "18px", fontWeight: "bold" }}
        >
          FECHA DE NACIMIENTO:
        </div>
        <div className="col-4">
          <Calendar
            id="icon"
            value={fechaNacimiento}
            onChange={(e) => setFechaNacimiento(e.value)}
            showIcon
          />
        </div>

        <div
          className="col-1 flex align-items-center"
          style={{ fontSize: "18px", fontWeight: "bold" }}
        >
          SEXO:
        </div>
        <div className="col-4">
          <SelectButton
            value={sexo}
            options={optionSexo}
            onChange={(e) => setSexo(e.value)}
          />
        </div>
      </div>
    </Card>
  );
}
