import React, { useState } from "react";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import { classNames } from "primereact/utils";
import { Divider } from "primereact/divider";
import { RadioButton } from "primereact/radiobutton";
import { SelectButton } from "primereact/selectbutton";
import { Calendar } from "primereact/calendar";

import { initValues, getValidationSchema } from "./ValidationUtils";
import { Button } from "primereact/button";
import * as Yup from "yup";

export default function Pasajeros(props) {
  const [formData, setFormData] = useState({});
  const optionSexo = ["Masculino", "Femenino"];
  const optionPago = ["Tarjeta de crédito", "Tarjeta de débito"];
  const optionsTipoTel = ["Celular", "Prticular"];

  const formik = useFormik({
    initialValues: initValues(2),
    validationSchema: getValidationSchema,
    onSubmit: (data) => {
      setFormData(data);
      //formik.resetForm();
      console.log(data);
    },
  });

  const isFormFieldValid = (name) =>
    !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name) => {
    console.log("[name]",name);
    console.log("isFormFieldValid(name)",isFormFieldValid(name));
    console.log("formik.errors[name]",formik.errors[name]);
    return (
      isFormFieldValid(name) && (
        <small className="p-error">{formik.errors[name]}</small>
      )
    );
  };

  function printPasajeros() {
    return formik.values.pasajeros.map((pasajero, i) => {
      return (
        <div key={i}>
          <h3>Pasajero: {i + 1}</h3>

          <div className="grid">
            <div className="col-12" style={{ fontSize: "18px" }}>
              <div className="field">
                <span className="p-float-label p-input-icon-right">
                  <i className="pi pi-envelope" />
                  <InputText
                    id={"nombres" + i}
                    name={"nombres" + i}
                    placeholder="Nombres"
                    value={formik.values.pasajeros[i].nombres}
                    onChange={(e) =>
                      formik.setFieldValue(
                        "pasajeros.[" + i + "].nombres",
                        e.target.value
                      )
                    }
                    className={classNames({
                      "p-invalid": isFormFieldValid("pasajeros.nombres"),
                    })}
                  />
                  <label
                    htmlFor={"nombres" + i}
                    className={classNames({
                      "p-error": isFormFieldValid("pasajeros.nombres"),
                    })}
                  >
                  </label>
                </span>
                {getFormErrorMessage("pasajeros.nombres")}
              </div>
            </div>
            <div className="col-12" style={{ fontSize: "18px" }}>
              <div className="p-inputgroup">
                <span className="p-inputgroup-addon">
                  <i className="pi pi-user"></i>
                </span>
                <InputText
                  placeholder="Apellidos"
                  value={formik.values.pasajeros[i].apellidos}
                  onChange={(e) =>
                    formik.setFieldValue(
                      "pasajeros.[" + i + "].apellidos",
                      e.target.value
                    )
                  }
                />
              </div>
            </div>

            <div className="col-12" style={{ fontSize: "18px" }}>
              <div className="p-inputgroup">
                <span className="p-inputgroup-addon">
                  <i className="pi pi-user"></i>
                </span>
                <InputText
                  placeholder="País de Residencia"
                  value={formik.values.pasajeros[i].paisResidencia}
                  onChange={(e) =>
                    formik.setFieldValue(
                      "pasajeros.[" + i + "].paisResidencia",
                      e.target.value
                    )
                  }
                />
              </div>
            </div>

            <div
              className="col-3 flex align-items-center"
              style={{ fontSize: "17px" }}
            >
              Fecha de Nacimiento:
            </div>
            <div className="col-4">
              <Calendar
                id="icon"
                showIcon
                value={formik.values.pasajeros[i].fechaNacimiento}
                onChange={(e) =>
                  formik.setFieldValue(
                    "pasajeros.[" + i + "].fechaNacimiento",
                    e.target.value
                  )
                }
              />
            </div>

            <div
              className="col-1 flex align-items-center"
              style={{ fontSize: "17px" }}
            >
              Sexo:
            </div>
            <div className="col-4">
              <SelectButton
                options={optionSexo}
                value={formik.values.pasajeros[i].sexo}
                onChange={(e) =>
                  formik.setFieldValue(
                    "pasajeros.[" + i + "].sexo",
                    e.target.value
                  )
                }
              />
            </div>
          </div>
          <Divider />
        </div>
      );
    });
  }
  function printResumen() {
    return formik.values.pasajeros.map((pasajero, i) => {
      return (
        <div key={i}>
          <h3>Pasajero: {i + 1}</h3>

          <h3>Nombres :&nbsp;&nbsp;{pasajero.nombres}</h3>
          <h3>Apellidos :&nbsp;&nbsp;{pasajero.apellidos}</h3>

          <Divider />
        </div>
      );
    });
  }

  return (
    <form onSubmit={formik.handleSubmit} className="p-fluid">
      <Card>{printPasajeros()}</Card>

      <Divider />

      <Card>
        <h2 className="text-center">¿A dónde enviamos tus vouchers?</h2>
        <h3>
          El email que elijas será fundamental para que gestiones tu reserva y
          recibas información importante sobre tu viaje.
        </h3>
        <div className="field">
          <span className="p-float-label p-input-icon-right">
            <i className="pi pi-envelope" />
            <InputText
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className={classNames({
                "p-invalid": isFormFieldValid("email"),
              })}
            />
            <label
              htmlFor="email"
              className={classNames({
                "p-error": isFormFieldValid("email"),
              })}
            >
              Email*
            </label>
          </span>
          {getFormErrorMessage("email")}
        </div>

        <div className="field">
          <span className="p-float-label">
            <InputText
              id="confirmaEmail"
              name="ConfirmaEmail"
              value={formik.values.confirmaEmail}
              onChange={formik.handleChange}
              autoFocus
              className={classNames({
                "p-invalid": isFormFieldValid("confirmaEmail"),
              })}
            />
            <label
              htmlFor="confirmaEmail"
              className={classNames({
                "p-error": isFormFieldValid("confirmaEmail"),
              })}
            >
              ConfirmaEmail*
            </label>
          </span>
          {getFormErrorMessage("confirmaEmail")}
        </div>
      </Card>

      <Divider />

      <Card>
        <h2 className="text-center">¿A qué número podemos llamarte?</h2>
        <br />
        <div className="grid">
          <div
            className="col-1 flex align-items-center"
            style={{ fontSize: "17px" }}
          >
            Teléfono:
          </div>
          <div className="col-3" style={{ fontSize: "18px" }}>
            <div className="field">
              <span className="p-float-label p-input-icon-right">
                <i className="pi pi-envelope" />
                <SelectButton
                  id="optionTelefono"
                  name="optionTelefono"
                  options={optionsTipoTel}
                  value={formik.values.optionTelefono}
                  onChange={formik.handleChange}
                  autoFocus
                  className={classNames({
                    "p-invalid": isFormFieldValid("optionTelefono"),
                  })}
                />
                <label
                  htmlFor="optionTelefono"
                  className={classNames({
                    "p-error": isFormFieldValid("optionTelefono"),
                  })}
                ></label>
              </span>
              {getFormErrorMessage("optionTelefono")}
            </div>
          </div>
          <div className="col-4" />
          <div className="col-4" style={{ fontSize: "18px" }}>
            <div className="field">
              <span className="p-float-label p-input-icon-right">
                <i className="pi pi-envelope" />
                <InputText
                  id="codigoPais"
                  name="codigoPais"
                  value={formik.values.codigoPais}
                  onChange={formik.handleChange}
                  className={classNames({
                    "p-invalid": isFormFieldValid("codigoPais"),
                  })}
                />
                <label
                  htmlFor="codigoPais"
                  className={classNames({
                    "p-error": isFormFieldValid("codigoPais"),
                  })}
                >
                  Codigo Pais*
                </label>
              </span>
              {getFormErrorMessage("codigoPais")}
            </div>
          </div>

          <div className="col-4" style={{ fontSize: "18px" }}>
            <div className="field">
              <span className="p-float-label p-input-icon-right">
                <i className="pi pi-envelope" />
                <InputText
                  id="area"
                  name="area"
                  value={formik.values.area}
                  onChange={formik.handleChange}
                  className={classNames({
                    "p-invalid": isFormFieldValid("area"),
                  })}
                />
                <label
                  htmlFor="area"
                  className={classNames({
                    "p-error": isFormFieldValid("area"),
                  })}
                >
                  area*
                </label>
              </span>
              {getFormErrorMessage("area")}
            </div>
          </div>

          <div className="col-8" style={{ fontSize: "18px" }}>
            <div className="field">
              <span className="p-float-label p-input-icon-right">
                <i className="pi pi-envelope" />
                <InputText
                  id="numero"
                  name="numero"
                  value={formik.values.numero}
                  onChange={formik.handleChange}
                  className={classNames({
                    "p-invalid": isFormFieldValid("numero"),
                  })}
                />
                <label
                  htmlFor="numero"
                  className={classNames({
                    "p-error": isFormFieldValid("numero"),
                  })}
                >
                  numero*
                </label>
              </span>
              {getFormErrorMessage("numero")}
            </div>
          </div>

          <div className="col-12" style={{ fontSize: "18px" }}>
            <RadioButton
              inputId="informeMensaje"
              name="informeMensaje"
              value="Mantenme informado WhatsApp/SMS"
              onChange={formik.handleChange}
              checked={
                formik.values.informeMensaje ===
                "Mantenme informado WhatsApp/SMS"
              }
            />{" "}
            Mantenme informado vía WhatsApp y SMS sobre detalles de mi compra,
            estado del vuelo y posibles cambios en mi viaje.
          </div>
        </div>
      </Card>

      <Divider />

      <Card>
        <h2 className="text-center">Datos de la tarjeta</h2>
        <br />
        <div className="grid">
          <div
            className="col-2 flex align-items-center"
            style={{ fontSize: "17px" }}
          >
            ¿Cómo deseas pagar?
          </div>
          <div className="col-4">
            <div className="field">
              <span className="p-float-label">
                <SelectButton
                  id="tipoTarjeta"
                  name="tipoTarjeta"
                  options={optionPago}
                  value={formik.values.tipoTarjeta}
                  onChange={formik.handleChange}
                  autoFocus
                  className={classNames({
                    "p-invalid": isFormFieldValid("tipoTarjeta"),
                  })}
                />
                <label
                  htmlFor="tipoTarjeta"
                  className={classNames({
                    "p-error": isFormFieldValid("tipoTarjeta"),
                  })}
                ></label>
              </span>
              {getFormErrorMessage("tipoTarjeta")}
            </div>
          </div>
          <div className="col-6" />
          <div className="col-6" style={{ fontSize: "18px" }}>
            <div className="field">
              <span className="p-float-label p-input-icon-right">
                <i className="pi pi-envelope" />
                <InputText
                  id="numeroTarjeta"
                  name="numeroTarjeta"
                  value={formik.values.numeroTarjeta}
                  onChange={formik.handleChange}
                  className={classNames({
                    "p-invalid": isFormFieldValid("numeroTarjeta"),
                  })}
                />
                <label
                  htmlFor="numeroTarjeta"
                  className={classNames({
                    "p-error": isFormFieldValid("numeroTarjeta"),
                  })}
                >
                  numeroTarjeta*
                </label>
              </span>
              {getFormErrorMessage("numeroTarjeta")}
            </div>
          </div>

          <div className="col-6" style={{ fontSize: "18px" }}>
            <div className="field">
              <span className="p-float-label p-input-icon-right">
                <i className="pi pi-envelope" />
                <InputText
                  id="titularTarjeta"
                  name="titularTarjeta"
                  value={formik.values.titularTarjeta}
                  onChange={formik.handleChange}
                  className={classNames({
                    "p-invalid": isFormFieldValid("titularTarjeta"),
                  })}
                />
                <label
                  htmlFor="titularTarjeta"
                  className={classNames({
                    "p-error": isFormFieldValid("titularTarjeta"),
                  })}
                >
                  titularTarjeta*
                </label>
              </span>
              {getFormErrorMessage("titularTarjeta")}
            </div>
          </div>
          <div
            className="col-2 flex align-items-center"
            style={{ fontSize: "17px" }}
          >
            Fecha de Vencimiento:
          </div>
          <div className="col-4">
            <Calendar
              id="vencimiento"
              name="vencimiento"
              value={formik.values.vencimiento}
              onChange={formik.handleChange}
              view="month"
              dateFormat="mm/yy"
              showIcon
            />
            <label
              htmlFor="vencimiento"
              className={classNames({
                "p-error": isFormFieldValid("vencimiento"),
              })}
            ></label>

            {getFormErrorMessage("vencimiento")}
          </div>

          <div className="col-6" style={{ fontSize: "18px" }}>
            <div className="field">
              <span className="p-float-label p-input-icon-right">
                <i className="pi pi-envelope" />
                <InputText
                  id="codSeguridad"
                  name="codSeguridad"
                  value={formik.values.codSeguridad}
                  onChange={formik.handleChange}
                  className={classNames({
                    "p-invalid": isFormFieldValid("codSeguridad"),
                  })}
                />
                <label
                  htmlFor="codSeguridad"
                  className={classNames({
                    "p-error": isFormFieldValid("codSeguridad"),
                  })}
                >
                  codSeguridad*
                </label>
              </span>
              {getFormErrorMessage("codSeguridad")}
            </div>
          </div>
        </div>
      </Card>

      <Divider />
      <Card>
        <h2 className="text-center">
          Antes de finalizar revisa los datos ingresados
        </h2>
        {printResumen()}
        <Button className="p-button-danger" type="submit" label="Comprar" />
      </Card>
    </form>
  );
}
