import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';


export default function EnvioVaucher2 () {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [radioValue1, setRadioValue1] = useState('');
    const [radioValue2, setRadioValue2] = useState('');

    return (
        <div>
            <div className="card">
                <h5>¿A dondé enviaremos tus vouchers?
                     El email que elijas será fundamental para que gestiones tu reserva y recibas información importante sobre tu viaje.
                </h5>
                <div className="grid p-fluid">
                    <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-user"></i>
                            </span>
                            <InputText placeholder="Email (Donde recibirás tus vouchers)" />
                        </div>
                </div>

                <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">www</span>
                            <InputText placeholder="Confirma tu email" />
                            import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';


export default function EnvioVaucher2() {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [radioValue1, setRadioValue1] = useState('');
    const [radioValue2, setRadioValue2] = useState('');
    return (
        <div>
            <div className="card">
                <h5>¿A dondé enviaremos tus vouchers?
                     El email que elijas será fundamental para que gestiones tu reserva y recibas información importante sobre tu viaje.
                </h5>
                <div className="p-inputgroup">
                    <span className="p-inputgroup-addon">
                    <i className="pi pi-user"></i>
                    </span>
                    <InputText placeholder="Email (Donde recibirás tus vouchers)" />
                </div>
             </div>

                <div className="p-inputgroup">
                    <span className="p-inputgroup-addon">www</span>
                    <InputText placeholder="Confirma tu email" />
                </div>
        </div>
  );
}