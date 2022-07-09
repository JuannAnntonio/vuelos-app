import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { RadioButton } from "primereact/radiobutton";

export default function Pasajeros1() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [radioValue1, setRadioValue1] = useState("");
  const [radioValue2, setRadioValue2] = useState("");
  const [sexo, setSexo] = useState(null);
  return (
    <div className="card">
      <h1>¿Quiénes viajan?</h1>
      <h1 className="text-center">Pasajeros</h1>
      <div className="grid p-fluid">
        <div className="p-inputgroup">
          <span className="p-inputgroup-addon">
            <i className="pi pi-user"></i>
          </span>
          <InputText placeholder="NOMBRES" />
        </div>

        <div className="p-inputgroup">
          <span className="p-inputgroup-addon">
            <i className="pi pi-user"></i>
          </span>
          <InputText placeholder="APELLIDOS" />
        </div>

        <div className="p-inputgroup">
          <span className="p-inputgroup-addon">
            <i className="pi pi-user"></i>
          </span>
          <InputText placeholder="PAÍS DE RESIDENCIA" />
        </div>

        <div className="p-inputgroup">
          <span className="p-inputgroup-addon">
            <i className="pi pi-user"></i>
          </span>
          <InputText placeholder="FECHA DE NACIMIENTO" />
        </div>

        <div className="p-inputgroup">
          <span className="p-inputgroup-addon">
            <i className="pi pi-user"></i>
          </span>
          <InputText placeholder="SEXO" />
          <div className="field-radiobutton">
            <RadioButton
              inputId="city1"
              name="city"
              value="Masculino"
              onChange={(e) => setSexo(e.value)}
              checked={sexo === "Masculino"}
            />
            <label htmlFor="city1">Masculino</label>
          </div>
          <div className="field-radiobutton">
            <RadioButton
              inputId="city1"
              name="city"
              value="Femenino"
              onChange={(e) => setSexo(e.value)}
              checked={sexo === "Femenino"}
            />
            <label htmlFor="city1">Femenino</label>
          </div>
        </div>
      </div>
    </div>
  );
}
