import * as Yup from "yup";

export function initValues(pasajeros) {
    let array = [];
    for (let i = 0; i < pasajeros; i++) {
        array[i] = {
            nombres: "",
            apellidos: "",
            paisResidencia: "",
            fechaNacimiento: null,
            sexo: null,
        };
    }
    console.log({
        pasajeros: array,
        email: '',
        area: '',
        numero: '',
        tipoTarjeta: null,
        numeroTarjeta: '',
        titularTarjeta: '',
        vencimiento: null,
        codSeguridad: '',
    });
    return {
        pasajeros: array,
        email: '',
        confirmaEmail: '',
        codigoPais:'',
        area: '',
        numero: '',
        tipoTarjeta: '',
        numeroTarjeta: '',
        titularTarjeta: '',
        vencimiento: null,
        codSeguridad: '',
    };
}

export function getValidationSchema() {
    return Yup.object({

        pasajeros: Yup.array().of(
            Yup.object().shape({
                nombres: Yup.string().required("Nombre es requerido"),
                apellidos: Yup.string().required("Apellido es requerido"),
                paisResidencia: Yup.string().required("Pais Residencia es requerido"),
                fechaNacimiento: Yup.date().required("Fecha de Nacimiento es requerida"),
                sexo: Yup.string().required("Sexo es requerida"),
            })
        ),
        email: Yup.string().required("Email es requerido").email("Ingresa un email valido"),
        confirmaEmail: Yup.string().required("Confirma email es requerido").email("Ingresa un email valido"),

        codigoPais: Yup.string().required("Cód. País es requerido"),
        area: Yup.string().required("Area es requerida"),
        numero: Yup.string().required("Número es requerido"),

        tipoTarjeta: Yup.string().required("Tipo Tarjeta es requerido"),
        numeroTarjeta: Yup.number().required("Número de Tarjeta es requerido"),
        titularTarjeta: Yup.string().required("Titular es requerido"),
        vencimiento: Yup.date().required("Fecha Vencimiento es requerida").nullable(),
        codSeguridad: Yup.string().required("Cód. Seguridad es requerido"),
    });
};