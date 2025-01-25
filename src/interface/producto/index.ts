
export interface Sequence {
    invoiceNumber: number;
}
export const SequenceInput : Sequence ={
    invoiceNumber: 0
}


export interface ListProduct {
    id:     number;
    name:   string;
    code:   string;
    price:  number;
    weight: string;
    status: string;
}

export const defaultInputValues : ListProduct = {
    id: 0,
    name: "",
    code: "",
    price: 0,
    status: "",
    weight: ""
}

export interface IFromikValues {
    productoSeleccionado : ListProduct[]
}

export const defaultInputValuesList : IFromikValues ={
    productoSeleccionado: []
}