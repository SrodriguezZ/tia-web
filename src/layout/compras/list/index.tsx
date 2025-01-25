import {
    Box,
    Dialog,
    DialogTitle,
    Grid,
    Typography,
    DialogContent,
    DialogActions,
} from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { ListProduct, defaultInputValuesList } from "../../../interface/producto";
import { useProductoController } from "../../../api/controller/Producto/ProductoController";
import { useEffect, useState } from "react";
import DataTable from "../../../components/DataTable";
import { GridColDef } from "@mui/x-data-grid";
import { useFormik } from "formik";
import { Compras } from "..";
import { useProductoZustand } from "../../../store/TableZustand";
interface ListProps {
    open: boolean;
    close: (args: boolean) => void;
}
export const ListProducto = ({ open, close }: ListProps) => {
    const { getListProducto } = useProductoController();
    const [tablaProducto, setTablaProducto] = useState<ListProduct[]>([]);

    const {selectListProducto,setSelectListProducto} = useProductoZustand();

    useEffect(() => {
        Init();
    }, []);
    const Init = () => {
        getListProducto()
            .then((datos: ListProduct[]) => {
                setTablaProducto(datos);
            })
            .catch((error) => console.log(error));
    };

    const columns: GridColDef[] = [
        { field: "name", headerName: "Nombre", width: 300 },
        { field: "price", headerName: "Precio", width: 200 },
        { field: "code", headerName: "Codigo", width: 200 },
    ];

    const modalClose = () => {
        close(false);
    };

    const formikTable = useFormik({
        initialValues : defaultInputValuesList,
        onSubmit: (values)=> {
            console.log(values)
        }
    })

    const submitProducto = (ids: number[]) => {
        console.log(ids);
        
        const productNuevo = tablaProducto.filter( productos =>ids.includes(productos.id) )
        console.log(productNuevo)
        setSelectListProducto(productNuevo)
    };

    return (
        <Box>
            <Dialog
                fullWidth
                maxWidth="md"
                open={open}
                onClose={modalClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle
                    id="alert-dialog-title"
                    style={{ justifyContent: "center", textAlign: "center" }}
                >
                    <Grid container display={"flex"} justifyContent={"center"}>
                        <LocalMallIcon
                            fontSize="large"
                            style={{ marginRight: "10px" }}
                        />{" "}
                        <Typography variant="h5">Crear producto</Typography>
                    </Grid>
                </DialogTitle>
                <DialogContent>
                    <Box>
                        <DataTable
                            rows={tablaProducto}
                            onSelectionModelChange={submitProducto}
                            columns={columns}
                            checkboxSelection
                        />
                    </Box>
                </DialogContent>
                <DialogActions></DialogActions>
            </Dialog>
        </Box>
    );
};
