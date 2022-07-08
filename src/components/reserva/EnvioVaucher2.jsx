import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
import './FormDemo.css';

export default function EnvioVaucher2() {
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
    const formi = useFormik({
        initialValues: {
            email: '',
            ConfirmaEmail: '',
        },
        validate: (data) => {
            let errors = {};

            if (!data.email) {
                errors.email = 'Email is required.';
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
                errors.email = 'Invalid email address. E.g. example@email.com';
            }
            if (!data.ConfirmaEmail) {
                errors.ConfirmaEmail = 'Email is required.';
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
                errors.ConfirmaEmail = 'Invalid email address. E.g. example@email.com';
            } 
            if (data.email!==data.ConfirmaEmail){
                errors.ConfirmaEmail = 'Email could be the same.';

            }

            return errors;
        },
        onSubmit: (data) => {
            setFormData(data);
            setShowMessage(true);

            formi.resetForm();
        }
    });

    const isFormFieldValid = (ConfirmaEmail) => !!(formi.touched[ConfirmaEmail] && formi.errors[ConfirmaEmail]);
    const getFormErrorMessage = (ConfirmaEmail) => {
        return isFormFieldValid(ConfirmaEmail) && <small className="p-error">{formi.errors[ConfirmaEmail]}</small>;
    };

    const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;

    return (
        <div className="form-demo">
            <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                <div className="flex align-items-center flex-column pt-6 px-3">
                    <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                </div>
            </Dialog>

            <div className="flex justify-content-center">
                <div className="card">
                    <h5 className="text-center">
					¿A dónde enviamos tus vouchers?
                    El email que elijas será fundamental para que gestiones tu reserva y recibas información importante sobre tu viaje.
					</h5>
                    <form onSubmit={formi.handleSubmit} className="p-fluid">
                        
                        <div className="field">
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-envelope" />
                                <InputText id="email" name="email" value={formi.values.email} onChange={formi.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('email') })} />
                                <label htmlFor="email" className={classNames({ 'p-error': isFormFieldValid('email') })}>Email*</label>
                            </span>
                            {getFormErrorMessage('email')}
                        </div>
						
						<div className="field">
                            <span className="p-float-label">
                                <InputText id="ConfirmaEmail" name="ConfirmaEmail" value={formi.values.name} onChange={formi.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('ConfirmaEmail') })} />
                                <label htmlFor="ConfirmaEmail" className={classNames({ 'p-error': isFormFieldValid('ConfirmaEmail') })}>ConfirmaEmail*</label>
                            </span>
                            {getFormErrorMessage('name')}
                        </div>                                                
                    </form>
                </div>
            </div>
        </div>
    );
}


/* FormDemo.css */

