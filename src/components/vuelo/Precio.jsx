import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { FcMoneyTransfer } from "react-icons/fc";

export default function Precio(props) {
  const navigate = useNavigate();

  var detalleIda = {};
  var detalleVuelta = {};
  if(props.ida){
    delete props.ida.icono;
    detalleIda = props.ida;
  }
  if(props.vuelta){
    delete props.vuelta.icono;
    detalleVuelta = props.vuelta;
  }
   //console.log("A-PRECIO",props);
  const values = {precioVuelo: props.precioVuelo,
    detalleIda: detalleIda,
    detalleVuelta: detalleVuelta};

   // console.log("PRECIO",values);

  return (
    <>
      <Card>
        <div className="grid flex align-items-center justify-content-center">
          <div className="col-2">
            <FcMoneyTransfer size="25"/>
          </div>
          <div className="col-10">
            <h2 className="text-center"> Detalles del pago</h2>
          </div>
          <div className="col-12">
            <h2>Precio Final:</h2>
          </div>
          <div
            className="col-6 flex align-items-center justify-content-center"
            style={{ fontSize: "18px", fontWeight: "bold" }}
          >
            {props.precioVuelo.currency}
          </div>
          <div
            className="col-6 flex align-items-center justify-content-center"
            style={{ fontSize: "30px", fontWeight: "bold" }}
          >
            {props.precioVuelo.total}
          </div>
          <div
            className="col-12"
            style={{ fontSize: "16px", fontWeight: "bold" }}
          >
            Precio antes de impuestos:
          </div>
          <div
            className="col-6 flex align-items-center justify-content-center"
            style={{ fontSize: "16px" }}
          >
            {props.precioVuelo.currency}
          </div>
          <div
            className="col-6 flex align-items-center justify-content-center"
            style={{ fontSize: "16px" }}
          >
            {props.precioVuelo.base}
          </div>
          <div className="col-12 flex align-items-center justify-content-center">
            <Button
              className="p-button-rounded"
              style={{ display: props.styleButton }}
              label="Comprar"
              onClick={() =>
                navigate("/reserva", {
                  state: {
                    props: values
                  },
                })
              }
            />
          </div>
        </div>
      </Card>
    </>
  );
}
