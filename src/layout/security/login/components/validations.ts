
import * as yup from "yup";

interface formikLogin {
    userName: string;
    password: string;
}
export const defaultInput:formikLogin ={
    userName: "",
    password: ""
}


export const Validations = [

    yup.object().shape({
        userName: yup.string().required("Username  es requerido"),
        password: yup.string().required("Password es requerido"),
    }),

];