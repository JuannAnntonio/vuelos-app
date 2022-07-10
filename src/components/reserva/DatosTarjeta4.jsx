import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { SelectButton } from "primereact/selectbutton";
import { Card } from "primereact/card";

export default function DatosTarjeta4() {
  const [pago, setPago] = useState(null);
  const optionPago = ["Tarjeta de crédito", "Tarjeta de débito", "Transferencia electrónica", "Transferencia bancaria", "Efectivo en tiendas"];
  
  return (
    <Card>
      <h2 className="text-center">¿Cómo deseas pagar?</h2>
      <h3 className="text-center">Forma de Pago</h3>
      
      <div className="grid">
          <div className="col-12" style={{ fontSize: "18px" }}>
             <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                 <i className="pi pi-user"></i>
              </span>
              <InputText placeholder="PAGO" />
              <div
          className="col-1 flex align-items-center"
          style={{ fontSize: "18px", fontWeight: "bold" }}
        >
        PAGO:
        </div>
        <div className="col-4">
          <SelectButton
            value={pago}
            options={optionPago}
            onChange={(e) => setPago(e.value)}
          />
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
    </div>
    </Card>
    );
};
