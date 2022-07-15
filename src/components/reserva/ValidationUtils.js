import * as Yup from "yup";

export function initValues(pasajeros) {
    let array = [];
    for (let i = 0; i < pasajeros; i++) {
        array[i] = {
            nombres: "",
            apellidos: "",
            paisResidencia: "",
            fechaNacimiento: null,
            sexo: '',
        };
    }
    return {
        pasajeros: array,
        email: '',
        confirmaEmail: '',
        codigoPais: '',
        area: '',
        numero: '',
        tipoTarjeta: '',
        numeroTarjeta: '',
        titularTarjeta: '',
        vencimiento: '',
        codSeguridad: '',
    };
}

export function getValidationSchema() {
    return Yup.object({

        pasajeros: Yup.array().of(
            Yup.object().shape({
                nombres: Yup.string().required("Nombre es requerido"),
                apellidos: Yup.string().required("Apellidos son requerido"),
                paisResidencia: Yup.string().required("Pais Residencia es requerido"),
                fechaNacimiento: Yup.date().required("Fecha de Nacimiento es requerida").nullable(),
                sexo: Yup.string().required("Sexo es requerido"),
            })
        ),
        email: Yup.string().required("Email es requerido").email("Ingresa un email valido"),
        confirmaEmail: Yup.string().required("Confirma Email es requerido").email("Ingresa un email valido"),

        codigoPais: Yup.string().required("Cód. País es requerido").nullable(),
        area: Yup.string().required("Area es requerida").nullable(),
        numero: Yup.string().required("Número es requerido").nullable(),

        tipoTarjeta: Yup.string().required("Tipo Tarjeta es requerida"),
        numeroTarjeta: Yup.string().required("Número de Tarjeta es requerido").nullable(),
        titularTarjeta: Yup.string().required("Titular es requerido"),
        vencimiento: Yup.date().required("Fecha Vencimiento es requerida").nullable(),
        codSeguridad: Yup.string().required("Cód. Seguridad es requerido").nullable().
        min(3, "Cód. Seguridad {3}").
        max(3, "Cód. Seguridad {3}"),
    });
};