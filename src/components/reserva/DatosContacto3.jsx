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

export default function DatosContacto3() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [radioValue1, setRadioValue1] = useState("");
  const [radioValue2, setRadioValue2] = useState("");
  const [acepto, setAcepto] = useState(null);
    
  return (
    <div className="card">
         <h1>DatosContacto3</h1>
         <h2>¿A qué número podemos llamarte?</h2>
          <div className="grid p-fluid">
         <div className="p-inputgroup">
           <span className="p-inputgroup-addon">
           <i className="pi pi-user"></i>
           </span>
           <InputText placeholder="Celular o Particular" />
         </div>
      </div>

      <div className="grid p-fluid">
         <div className="p-inputgroup">
           <span className="p-inputgroup-addon">
           <i className="pi pi-user"></i>
           </span>
           <InputText placeholder="Código de País" />
         </div>
      </div>

      <div className="grid p-fluid">
         <div className="p-inputgroup">
           <span className="p-inputgroup-addon">
           <i className="pi pi-user"></i>
           </span>
           <InputText placeholder="Área" />
        </div>
      </div>

      <div className="grid p-fluid">
         <div className="p-inputgroup">
           <span className="p-inputgroup-addon">
           <i className="pi pi-user"></i>
           </span>
           <InputText placeholder="Número" />
         </div>
      </div>

      <div className="p-inputgroup">
          <span className="p-inputgroup-addon">
            <i className="pi pi-user"></i>
          </span>
          <InputText placeholder="ACEPTO" />
          <div className="field-radiobutton">
            <RadioButton
              inputId="city1"
              name="city"
              value="MantenmeInformadoWhatsAppSMS"
              onChange={(e) => setAcepto(e.value)}
              checked={acepto === "MantenmeInformadoWhatsAppSMS"}
            />
            <label htmlFor="city1">MantenmeInformadoWhatsAppSMS</label>
          </div>
        </div>
      </div>
  );
};