import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Card } from "primereact/card";
import { SelectButton } from "primereact/selectbutton";

export default function DatosTarjeta() {
  const [pago, setPago] = useState(null);
  const optionPago = ["Tarjeta de crédito", "Tarjeta de débito"];
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
        <div className="col-12" style={{ fontSize: "18px" }}>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <InputText placeholder="Vencimiento MM/AA" />
          </div>
        </div>

        <div className="col-12" style={{ fontSize: "18px" }}>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <InputNumber placeholder="Código de Seguridad" />
          </div>
        </div>

        <div className="col-12" style={{ fontSize: "18px" }}>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <InputText placeholder="Dirección de entrega del resumen de la tarjeta" />
          </div>
        </div>

        <div className="col-12" style={{ fontSize: "18px" }}>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <InputText placeholder="Ciudad" />
          </div>
        </div>
        <div className="col-12" style={{ fontSize: "18px" }}>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <InputText placeholder="Calle" />
          </div>
        </div>
        <div className="col-12" style={{ fontSize: "18px" }}>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <InputNumber placeholder="Número" />
          </div>
        </div>

        <div className="col-12" style={{ fontSize: "18px" }}>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <InputNumber placeholder="Piso" />
          </div>
        </div>
        <div className="col-12" style={{ fontSize: "18px" }}>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <InputNumber placeholder="Departamento" />
          </div>
        </div>
        <div className="col-12" style={{ fontSize: "18px" }}>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <InputNumber placeholder="Código Postal" />
          </div>
        </div>
      </div>
    </Card>
  );
}
