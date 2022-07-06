import { Steps } from 'primereact/steps';
import React, { useRef } from 'react';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import './ToastDemo.css';

const interactiveItems = [
    {
        label: 'Personal',
        command: (event) => {
            toast.current.show({severity:'info', summary:'First Step', detail: event.item.label});
        }
    },
    ,
    {
        label: 'Confirmation',
        command: (event) => {
            toast.current.show({severity:'info', summary:'Last Step', detail: event.item.label});
        }
    }
];

const ToastDemo = () => {
    const toast = useRef(null);
    const toastTL = useRef(null);
    const toastBL = useRef(null);
    const toastBR = useRef(null);
    const toastBC = useRef(null);

    const showSuccess = () => {
        toast.current.show({severity:'success', summary: 'Success Message', detail:'Message Content', life: 3000});
    }

    const showInfo = () => {
        toast.current.show({severity:'info', summary: 'Info Message', detail:'Message Content', life: 3000});
    }

    const showWarn = () => {
        toast.current.show({severity:'warn', summary: 'Warn Message', detail:'Message Content', life: 3000});
    }

    const showError = () => {
        toast.current.show({severity:'error', summary: 'Error Message', detail:'Message Content', life: 3000});
    }

    const showTopLeft = () => {
        toastTL.current.show({severity: 'info', summary: 'Info Message', detail: 'Message Content', life: 3000});
    }

    const showBottomLeft = () => {
        toastBL.current.show({severity:'warn', summary: 'Warn Message', detail:'Message Content', life: 3000});
    }

    const showBottomRight = () => {
        toastBR.current.show({severity:'success', summary: 'Success Message', detail:'Message Content', life: 3000});
    }

    const showSticky = () => {
        toast.current.show({severity: 'info', summary: 'Sticky Message', detail: 'Message Content', sticky: true});
    }

    const showConfirm = () => {
        toastBC.current.show({ severity: 'warn', sticky: true, content: (
            <div className="flex flex-column" style={{flex: '1'}}>
                <div className="text-center">
                    <i className="pi pi-exclamation-triangle" style={{fontSize: '3rem'}}></i>
                    <h4>Are you sure?</h4>
                    <p>Confirm to proceed</p>
                </div>
                <div className="grid p-fluid">
                    <div className="col-6">
                        <Button type="button" label="Yes" className="p-button-success" />
                    </div>
                    <div className="col-6">
                        <Button type="button" label="No" className="p-button-secondary" />
                    </div>
                </div>
            </div>
        ) });
    }

    const showMultiple = () => {
        toast.current.show([
            {severity:'info', summary:'Message 1', detail:'Message 1 Content', life: 3000},
            {severity:'info', summary:'Message 2', detail:'Message 2 Content', life: 3000},
            {severity:'info', summary:'Message 3', detail:'Message 3 Content', life: 3000}
        ]);
    }

    const clear = () => {
        toast.current.clear();
    }

    return (
        <div>
            <Toast ref={toast} />
            <Toast ref={toastTL} position="top-left" />
            <Toast ref={toastBL} position="bottom-left" />
            <Toast ref={toastBR} position="bottom-right" />
            <Toast ref={toastBC} position="bottom-center" />

            <div className="card toast-demo">
                <h5>Severities</h5>
                <Button label="Success" className="p-button-success" onClick={showSuccess} />
                <Button label="Info" className="p-button-info" onClick={showInfo} />
                <Button label="Warn" className="p-button-warning" onClick={showWarn} />
                <Button label="Error" className="p-button-danger" onClick={showError} />

                <h5>Positions</h5>
                <Button label="Top Left" className="mr-2" onClick={showTopLeft} />
                <Button label="Bottom Left" className="p-button-warning" onClick={showBottomLeft} />
                <Button label="Bottom Right" className="p-button-success" onClick={showBottomRight} />

                <h5>Options</h5>
                <Button onClick={showMultiple} label="Multiple" className="p-button-warning" />
                <Button onClick={showSticky} label="Sticky" />

                <h5>Clear</h5>
                <Button onClick={clear} label="Clear" />

                <h5>Custom</h5>
                <Button type="button" onClick={showConfirm} label="Confirm" className="ui-button-warning" />
            </div>
        </div>
    )
}
  
/* ToastDemo.css */

.toast-demo button {
    min-width: 10rem;
    margin-right: .5rem;
}

@media screen and (max-width: 960px) {
    .toast-demo button {
        width: 100%;
        margin-bottom: .5rem;
    }
}