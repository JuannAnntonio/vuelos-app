import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Card } from "primereact/card";
import { SelectButton } from "primereact/selectbutton";
import { InputMask } from "primereact/inputmask";
import { Calendar } from "primereact/calendar";

export default function DatosTarjeta() {
  const [pago, setPago] = useState(null);
  const optionPago = ["Tarjeta de crédito", "Tarjeta de débito"];
  const [date9, setDate9] = useState(null);
 
  return (
    <Card>
      <h2 className="text-center">Datos de la tarjeta</h2>
      <br />
      <div className="grid">
        <div
          className="col-2 flex align-items-center"
          style={{ fontSize: "17px" }}
        >
          ¿Cómo deseas pagar?
        </div>
        <div className="col-10">
          <SelectButton
            value={pago}
            options={optionPago}
            onChange={(e) => setPago(e.value)}
          />
        </div>
        <div className="col-12" style={{ fontSize: "18px" }}>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <InputNumber placeholder="Número de Tarjeta" />
          </div>
        </div>

        <div className="col-12" style={{ fontSize: "18px" }}>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <InputText placeholder="Titular de la Tarjeta" />
          </div>
        </div>
        <div
          className="col-3 flex align-items-center"
          style={{ fontSize: "17px" }}
        >
          Fecha de Vencimiento:
        </div>
        <div className="col-9" style={{ fontSize: "18px" }}>
            <Calendar id="monthpicker" value={date9} onChange={(e) => setDate9(e.value)} view="month" dateFormat="mm/yy" showIcon />
        </div>

        <div className="col-12" style={{ fontSize: "18px" }}>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <InputNumber placeholder="Código de Seguridad" />
          </div>
        </div>

    </div>
    </Card>
  );
}