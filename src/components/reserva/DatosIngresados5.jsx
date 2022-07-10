import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
import { InputNumber } from "primereact/inputnumber";
import { Card } from "primereact/card";
import { SelectButton } from "primereact/selectbutton";

export default function DatosIngresados5() {
  return (
      <Card>
      <h2 className="text-center">Ingresa los datos de la tarjeta</h2>
      <h3 className="text-center">Promociones y formas de pago</h3>
    
         <div className="grid">
          <div className="col-12" style={{ fontSize: "18px" }}>
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
              </span>
              <InputNumber placeholder="Número de Tarjeta" />
            </div>
        </div>

        <div className="grid">
          <div className="col-12" style={{ fontSize: "18px" }}>
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
              </span>
              <InputText placeholder="Titular de la Tarjeta" />
            </div>
        </div>

        <div className="grid">
          <div className="col-12" style={{ fontSize: "18px" }}>
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
              </span>
              <InputText placeholder="Vencimiento MM/AA" />
            </div>
        </div>

        <div className="grid">
          <div className="col-12" style={{ fontSize: "18px" }}>
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
              </span>
              <InputNumber placeholder="Código de Seguridad" />
            </div>
        </div>

        <div className="grid">
          <div className="col-12" style={{ fontSize: "18px" }}>
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
              </span>
              <InputText placeholder="Dirección de entrega del resumen de la tarjeta" />
            </div>
        </div>

        <div className="grid">
          <div className="col-12" style={{ fontSize: "18px" }}>
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
              </span>
              <InputText placeholder="Ciudad" />
            </div>
        </div>

        <div className="grid">
          <div className="col-12" style={{ fontSize: "18px" }}>
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
              </span>
              <InputText placeholder="Calle" />
            </div>
        </div>

        <div className="grid">
          <div className="col-12" style={{ fontSize: "18px" }}>
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
              </span>
              <InputNumber placeholder="Número" />
            </div>
        </div>

        <div className="grid">
          <div className="col-12" style={{ fontSize: "18px" }}>
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
              </span>
              <InputNumber placeholder="Piso" />
            </div>
        </div>

        <div className="grid">
          <div className="col-12" style={{ fontSize: "18px" }}>
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
              </span>
              <InputNumber placeholder="Departamento" />
            </div>
        </div>

        <div className="grid">
          <div className="col-12" style={{ fontSize: "18px" }}>
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
              </span>
              <InputNumber placeholder="Código Postal" />
            </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    </Card>
  );
};
