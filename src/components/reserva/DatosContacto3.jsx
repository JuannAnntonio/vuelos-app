import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
import { InputNumber } from "primereact/inputnumber";
import { RadioButton } from "primereact/radiobutton";
import { Card } from "primereact/card";

export default function DatosContacto3() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [radioValue1, setRadioValue1] = useState("");
  const [radioValue2, setRadioValue2] = useState("");
  const [acepto, setAcepto] = useState(null);
    
  return (
    <Card>
         <h2 className="text-center">¿A qué número podemos llamarte?</h2>
         <br />
         <div className="grid">
          <div className="col-12" style={{ fontSize: "18px" }}>
           <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
             <i className="pi pi-user"></i>
            </span>
             <InputText placeholder="Celular o Particular" />
           </div>
         </div>

         <div className="grid">
          <div className="col-12" style={{ fontSize: "18px" }}>
           <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
             <i className="pi pi-user"></i>
            </span>
             <InputText placeholder="Código de País" />
            </div>
         </div>

         <div className="grid">
           <div className="col-12" style={{ fontSize: "18px" }}>
            <div className="p-inputgroup">
             <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
             </span>
              <InputText placeholder="Área" />
           </div>
         </div>

         <div className="grid">
          <div className="col-12" style={{ fontSize: "18px" }}>
           <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
             <i className="pi pi-user"></i>
            </span>
             <InputText placeholder="Número" />
           </div>
         </div>

         <div className="grid">
          <div className="col-12" style={{ fontSize: "18px" }}>
           <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
             <i className="pi pi-user"></i>
            </span>
             <InputText placeholder="Acepto" />
           <div className="field-radiobutton">
            <RadioButton
              inputId="city1"
              name="city"
              value="Mantenme_Informado_vía_WhatsApp_y_SMS"
              onChange={(e) => setAcepto(e.value)}
              checked={acepto === "Mantenme_Informado_vía_WhatsApp_y_SMS"}
            />
            <label htmlFor="city1">Mantenme_Informado_vía_WhatsApp_y_SMS</label>
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