import * as yup from "yup";

export const Validations = [
    yup.object().shape({
        nombreLocal: yup.string().required("Nombre es requerido"),
       
    }),
];

