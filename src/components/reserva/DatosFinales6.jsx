import React from "react";
import { Card } from "primereact/card";

export default function DatosFinales6(props) {
  //console.log("DatosFinales6",props)
  return (
    <Card>
      <h2 className="text-center">Antes de finalizar revisa los datos ingresados</h2>
      <br />
      <h3>Fecha</h3>
      <h3>Ida:</h3>
      <h3>Vuelta:</h3>
      
      <h3>Pasajeros</h3>
      <h3>Nombres:</h3>
      <h3>Apellidos</h3>
    </Card>
  );
}