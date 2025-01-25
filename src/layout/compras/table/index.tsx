import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StyledTableCell, StyledTableRow } from "./style";
import { CustomInput } from "../../../components/InputFromik";
import { FormikProps } from "formik";
import { DetailFormik, HeaderFormik } from "./components";
import { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { ListProduct } from "../../../interface/producto";
import { IconButton } from "@mui/material";

interface Props {
    sequence: number;
    formikDetail: FormikProps<{ details: DetailFormik[] }>;
    deletProductoDetail: (index: number) => void;
    selectListProducto: ListProduct[];
    formikHeader: FormikProps<HeaderFormik>;
}
export default function TableProductos({
    formikHeader,
    sequence,
    formikDetail,
    deletProductoDetail,
    selectListProducto,
}: Props) {
    useEffect(() => {
        if (sequence) {
            formikDetail.setFieldValue("invoiceNumber", sequence);
        }
    }, [sequence]);

    const handleChange = (event: string, datos: ListProduct, index: number) => {
        const nuevaCantidad = Number(event);
        const precioProducto = datos.price;
        const productoExistente  = formikDetail.values.details.find(
            (item) => item.idProduct === datos.id
        );
        if (productoExistente  === undefined) {
          const nuevoProducto = {
            invoiceNumber: sequence,
            idProduct: datos.id,
            quantity: nuevaCantidad,
            price: precioProducto
        };

        formikDetail.setFieldValue(`details[${index}]`, nuevoProducto);

        const nuevoSubtotal = formikHeader.values.subTotal + (nuevaCantidad * precioProducto);
        formikHeader.setFieldValue("subTotal", nuevoSubtotal);
        const iva = (nuevoSubtotal * 14)/100
        formikHeader.setFieldValue("iva", iva);
        const result = nuevoSubtotal + iva;
        console.log(result)
        formikHeader.setFieldValue("total", result.toFixed(2))
        formikHeader.setFieldValue("invoiceNumber", sequence)

        }else{
            const productoFilter = formikDetail.values.details.filter( item => item.idProduct != datos.id);
            const cantidadAnterior  = productoExistente.quantity;
            productoExistente.quantity = nuevaCantidad;

            const newListProduct = [...productoFilter, productoExistente]
            formikDetail.setFieldValue("details", newListProduct);

            const nuevoSubtotal = formikHeader.values.subTotal + ((nuevaCantidad - cantidadAnterior) * precioProducto);
            console.log(nuevoSubtotal)
            formikHeader.setFieldValue("subTotal", nuevoSubtotal);

            const iva = (nuevoSubtotal * 14)/100
            formikHeader.setFieldValue("iva", iva);
            const result = nuevoSubtotal + iva;
            console.log(result)
            formikHeader.setFieldValue("total", result)

        }
        
    };

    return (
        <TableContainer
            component={Paper}
            sx={{ overflow: "scroll", maxHeight: "220px" }}
        >
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">
                            Nombre producto
                        </StyledTableCell>
                        <StyledTableCell align="center">Precio</StyledTableCell>
                        <StyledTableCell align="center">
                            Cantidad
                        </StyledTableCell>
                        <StyledTableCell align="center">
                            Eliminar
                        </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {selectListProducto.length > 0 ? (
                        selectListProducto.map((row, index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell align="center">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {row.price}
                                </StyledTableCell>
                                <StyledTableCell
                                    align="center"
                                    sx={{ width: "30%" }}
                                >
                                    <CustomInput
                                        key={row.id}
                                        type="number"
                                        onChange={(e) =>
                                            handleChange(
                                                e.target.value,
                                                row,
                                                index
                                            )
                                        }
                                    />
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <IconButton
                                        color="error"
                                        aria-label="delete"
                                        onClick={() => {
                                            deletProductoDetail(row.id);
                                        }}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))
                    ) : (
                        <StyledTableRow>
                            <StyledTableCell align="center">{}</StyledTableCell>
                            <StyledTableCell align="center">{}</StyledTableCell>
                            <StyledTableCell align="center">{}</StyledTableCell>
                            <StyledTableCell align="center">{}</StyledTableCell>
                        </StyledTableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
