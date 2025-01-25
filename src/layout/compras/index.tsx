import { useEffect, useRef, useState } from "react";
import BasePage from "../pages/BasePage";
import { Box, Card, Grid } from "@mui/material";
import { CustomInput } from "../../components/InputFromik";
import TableProductos from "./table";
import { ButtonComponent } from "../../components/Button";
import { SequenceInput } from "../../interface/producto";
import { useCatalogoProducto } from "../../api/controller/CatalogoProducto/catologoProductoController";
import { useFormik } from "formik";
import { ListProducto } from "./list";
import {
    DefaultFormikInput,
    DetailFormikInput,
    facturaValues,
} from "./table/components";
import { useProductoZustand } from "../../store/TableZustand";
import theme from "../../theme/theme";
import { useFacturaController } from "../../api/controller/Factura/FacturaController";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { StoreZustand } from "../../store/MenuZustand";

export const Compras = () => {
    const { getSequence } = useCatalogoProducto();
    const { increment } = StoreZustand();
    const [open, setOpen] = useState<boolean>(false);
    const isFirstRender = useRef(true); 

    useEffect(() => {
        if(isFirstRender.current){
            isFirstRender.current=false;
            InitFact();
        }
    }, []);

    const { postFactura } = useFacturaController();
    const navigate = useNavigate();

    const { selectListProducto, setSelectListProducto } = useProductoZustand();

    const InitFact = async () => {
      try {
        const number =  await getSequence();
        if(number){
         formikSequence.setValues(number);
 
        }
      } catch (error) {
        console.log(error)
      }
    };
    const submitEvent = () => {
        formikHeader.resetForm();
        formikDetail.resetForm();
        setSelectListProducto([]);
        navigate("/dashboard");

        increment();
    };

    const formikSequence = useFormik({
        initialValues: SequenceInput,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    const formikHeader = useFormik({
        initialValues: DefaultFormikInput,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    const formikDetail = useFormik({
        initialValues: {
            details: DetailFormikInput,
        },
        onSubmit: async (values) => {
            const value: facturaValues = {
                invoiceHeader: {
                    invoiceNumber: formikHeader.values.invoiceNumber,
                    iva: formikHeader.values.iva,
                    status: "F",
                    total: formikHeader.values.total,
                    subTotal: formikHeader.values.subTotal,
                },
                invoideDetail: values.details,
            };

            if (formikHeader.values.total) {
                await postFactura(value)
                    .then(() => {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Compra éxitosa",
                        }),
                            submitEvent();
                    })
                    .catch((error) => console.log(error));
            }else{
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "No tiene productos",
                })
            }
            
        },
    });

    const deletProductoDetail = (index: number) => {
        const newListProduct = selectListProducto.filter(
            (producto) => producto.id != index
        );
        const newProductoFormik = formikDetail.values.details.filter(
            (producto) => producto.idProduct != index
        );
        setSelectListProducto(newListProduct);
        formikDetail.setValues({ details: newProductoFormik });
    };

    return (
        <BasePage>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "2%",
                    height: "100%",
                    
                }}
            >
                <Card sx={{ padding: "50px", width: "100%" }}>
                    <Box>
                        <Grid
                            container
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                background: "linear-gradient(60deg, #00bfff,#6b26f3)",
                                borderRadius:'10px',
                                padding:'10px'
                            }}
                        >
                            <Grid item md={2}>
                                <CustomInput
                                    value={formikSequence.values.invoiceNumber}
                                    disabled
                                    type="number"
                                    label="Numero Factura"
                                />
                            </Grid>
                            <Grid item md={2} mt={4}>
                                <ButtonComponent
                                    onClick={() => setOpen(true)}
                                    text="Producto"
                                    style={{ width: "100%" }}
                                />
                            </Grid>
                        </Grid>
                    </Box>

                    <Grid
                        mt={3}
                        sx={{ width: "100%", justifyContent: "center" }}
                    >
                        <TableProductos
                            sequence={formikSequence.values.invoiceNumber}
                            formikDetail={formikDetail}
                            deletProductoDetail={deletProductoDetail}
                            selectListProducto={selectListProducto}
                            formikHeader={formikHeader}
                        />
                    </Grid>

                    <Box
                    sx={{marginTop:'25px'}}
                    >
                         <Grid sx={{display:'flex', flexDirection:'row'}}>
                         <Grid
                            container
                            mt={2}
                            display={"flex"}
                            flexDirection={"row"}
                            justifyContent={"center"}
                            border={"5px"}
                            sx={{
                                width:"50%",
                                backgroundColor: theme.palette.action.hover,
                                borderRadius: "20px",
                                height: "auto",
                            }}
                        >
                            <Grid item xs={10} md={8}>
                                <CustomInput
                                    label="Subtotal"
                                    value={
                                        formikHeader.values.subTotal === 0
                                            ? ""
                                            : new Intl.NumberFormat().format(
                                                  formikHeader.values.subTotal
                                              )
                                    }
                                    id="subtotal"
                                    name="subtotal"
                                    disabled
                                />
                            </Grid>
                            <Grid item xs={10} md={8}>
                                <CustomInput
                                    label="Iva 14%"
                                    value={
                                        formikHeader.values.iva === 0
                                            ? ""
                                            : formikHeader.values.iva
                                    }
                                    id="iva"
                                    name="iva"
                                    disabled
                                />
                            </Grid>
                            <Grid item xs={10} md={8}>
                                <CustomInput
                                    label="Total a pagar"
                                    id="total"
                                    name="total"
                                    value={
                                        formikHeader.values.subTotal === 0
                                            ? ""
                                            : formikHeader.values.total
                                    }
                                    disabled
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            spacing={2}
                            mt={2}
                            sx={{display:'flex', justifyContent:'center'}}
                          
                        >
                    
                            <Grid item xs= {12}md={8} sx={{marginTop:'60px', marginLeft:'300px'}}>
                                <ButtonComponent
                                    onClick={formikDetail.handleSubmit}
                                    text="Facturar"
                                    style={{ width: "60%" }}
                                />
                            </Grid>
                        </Grid>
                         </Grid>
                        
                    </Box>
                </Card>
                {open && <ListProducto close={setOpen} open={open} />}
            </Box>
        </BasePage>
    );
};
