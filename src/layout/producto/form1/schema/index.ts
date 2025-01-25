export interface IFormikProducto{
    id?: number;
    nombreProducto: string;
    stock: number;
}

export const FormikProducto :IFormikProducto = {
    id: 0,
    nombreProducto: "",
    stock: 0
}