import * as Yup from "yup";

export const Schema = Yup.object({
    email: Yup.string()
        .email("El email no es válido")
        .required("El Email es Obligatorio"),
    password: Yup.string()
        .required("Ingrese su contraseña")
})
