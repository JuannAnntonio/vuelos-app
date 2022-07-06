import { BreadCrumb } from 'primereact/breadcrumb';
import { Messages } from 'primereact/messages';
import { Toast } from 'primereact/toast';
 
 

const items = [
    { label: 'Inicio' },
    { label: 'Búsqueda' },
    { label: 'Compra' },
    { label: 'Contacto' },
    ];

const home = { icon: 'pi pi-home', url: 'https://www.primefaces.org/primereact' }


<Messages ref={messages}></Messages>

<Button onClick={showSuccess} label="Success" className="p-button-success" />
<Button onClick={showInfo} label="Info" className="p-button-info" />
<Button onClick={showWarn} label="Warn" className="p-button-warning" />
<Button onClick={showError} label="Error" className="p-button-danger" />
<Button onClick={showMultiple} label="Multiple" />
 

 