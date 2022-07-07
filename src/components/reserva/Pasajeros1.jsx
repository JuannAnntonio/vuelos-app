import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';

const InputGroupDemo = () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [radioValue1, setRadioValue1] = useState('');
    const [radioValue2, setRadioValue2] = useState('');

    return (
        <div>
            <div className="card">
                <h5>Addons</h5>
                <div className="grid p-fluid">
                    <div className="col-12 md:col-4">
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-user"></i>
                            </span>
                            <InputText placeholder="NOMBRES" />
                        </div>
                    </div>
					
					
					<div className="col-12 md:col-4">
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-user"></i>
                            </span>
                            <InputText placeholder="APELLIDOS" />
                        </div>
                    </div>

                    
					<div className="col-12 md:col-4">
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-user"></i>
                            </span>
                            <InputText placeholder="PAÍS DE RESIDENCIA" />
                        </div>
                    </div>
					
					<div className="col-12 md:col-4">
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-user"></i>
                            </span>
                            <InputText placeholder="FECHA DE NACIMIENTO" />
                        </div>
                    </div>
					
					<div className="col-12 md:col-4">
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-user"></i>
                            </span>
                            <InputText placeholder="SEXO" />
                            <li><label id="gender">Sexo:</label></li>
                            <li><input type="radio" name="msex" value="Male" /><span>Masculino</span></li>
                            <li><input type="radio" name="fsex" value="Female" /><span>Femenino</span></li>
                            <li><input type="submit" name="submit" value="Enviar" /></li>
                        </div>
                    </div>
					

                         
                  </div>
            </div>
        </div>
    );
}
                 