import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { RadioButton } from "primereact/radiobutton";

export default function DatosTarjeta4() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [radioValue1, setRadioValue1] = useState("");
  const [radioValue2, setRadioValue2] = useState("");
  const [pago, setPago] = useState(null);
  
  return (
    <div className="card">
      <h1>DatosTarjeta4</h1>
      <h2>¿Cómo deseas pagar?</h2>
      
      <div className="p-inputgroup">
          <span className="p-inputgroup-addon">
            <i className="pi pi-user"></i>
          </span>
          <InputText placeholder="PAGO" />
          <div className="field-radiobutton">
            <RadioButton>
              inputId="city1"
              name="city"
              value="Tarjeta de crédito"
              onChange={(e) => setPago(e.value)}
              checked={pago === "Tarjeta de crédito"}
            </RadioButton>
            <label htmlFor="city1">Tarjeta de crédito</label>
          </div>
          
          <div className="field-radiobutton">
            <RadioButton>
              inputId="city1"
              name="city"
              value="Tarjeta de débito"
              onChange={(e) => setPago(e.value)}
              checked={pago === "Tarjeta de débito"}
            </RadioButton>
            <label htmlFor="city1">Tarjeta de débito</label>
          </div>

          <div className="field-radiobutton">
            <RadioButton>
              inputId="city1"
              name="city"
              value="Transferencia electrónica"
              onChange={(e) => setPago(e.value)}
              checked={pago === "Transferencia electrónica"}
            </RadioButton>
            <label htmlFor="city1">Transferencia electrónica</label>
          </div>

          <div className="field-radiobutton">
          <RadioButton>
              inputId="city1"
              name="city"
              value="Transferencia bancaria"
              onChange={(e) => setPago(e.value)}
              checked={pago === "Transferencia bancaria"}
          </RadioButton>
            <label htmlFor="city1">Transferencia bancaria</label>
          </div>

          <div className="field-radiobutton">
         <RadioButton>
              inputId="city1"
              name="city"
              value="Efectivo en tiendas"
              onChange={(e) => setPago(e.value)}
              checked={pago === "Efectivo en tiendas"}
        </RadioButton>
            <label htmlFor="city1">Efectivo en tiendas</label>
          </div>


    <div className="grid p-fluid">
    <div className="p-inputgroup">
      <span className="p-inputgroup-addon">
        <i className="pi pi-user"></i>
      </span>
      <InputText placeholder="¿Tienes un cupón?" />
      <h3>Ingresalo acá</h3>
    </div>
    </div>
    </div>
    </div>
    );
};
