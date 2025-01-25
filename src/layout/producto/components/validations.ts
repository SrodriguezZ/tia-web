import * as yup from "yup";

export const Validations = [
    yup.object().shape({
        name: yup.string().required("Nombre es requerido"),
        code: yup.string().required("Código es requerido"),
        weight: yup.string().required("Peso es requerido"),
    }),
];


export const defaultInput :FormikInput ={
    name: "",
    code: "",
    price: "",
    weight: "",
    status: ""
}


export interface FormikInput {
    name  : string;
    code : string;
    price: string;
    weight: string;
    status: string;

}

export interface DicStatus {
    [key:string]: string;
}

export const statusDictionary: DicStatus = {
    true: 'A',
    false: 'I',
  };