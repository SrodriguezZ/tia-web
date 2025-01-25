export interface IFormikAsignar{
    id: number,
    nombreLocal?:string;
    direccion?:string;
    telefono?:string;
    productoResponses: IFormikProductoAsignar[]
}

export interface IFormikProductoAsignar {
    id: number;
    nombreProducto: string;
    stock: number;
}

export const FormikAsignar :IFormikAsignar = {
    id: 0,
    nombreLocal: "",
    direccion: "",
    telefono: "",
    productoResponses: []
}

