export interface HeaderFormik {
    invoiceNumber: number;
    total: number;
    subTotal: number;
    iva: number;
    status: string;
}

export const DefaultFormikInput: HeaderFormik = {
    invoiceNumber: 0,
    total: 0,
    subTotal: 0,
    iva: 0,
    status: "",
};

export interface DetailFormik {
    invoiceNumber: number;
    idProduct: number;
    quantity: number;
    price: number;
}

export const DetailFormikInput: DetailFormik[] = [
    { invoiceNumber: 0, idProduct: 0, quantity: 0, price: 0 },
];

export interface facturaValues {
    invoiceHeader : HeaderFormik ,
    invoideDetail : DetailFormik[]
    
}
