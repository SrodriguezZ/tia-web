import {
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControlLabel,
    Grid,
    Switch,
    Typography,
} from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import {  FormikProps } from "formik";
import { statusDictionary } from "../components/validations";
import { ButtonComponent } from "../../../components/Button";
import { CustomInput } from "../../../components/InputFromik";
import { IFormikProducto } from "./schema";

interface ProductoProps {
    open: boolean;
    close: (args: boolean) => void;
    formikCreate: FormikProps<IFormikProducto>

}
export const CreateProducto = ({ close, open,formikCreate }: ProductoProps) => {
    const modalClose = () => {
        close(false);
    };
    
    const handleSwitchChange = (
        event: React.SyntheticEvent,
        checked: boolean
    ) => {
        //console.log(checked)
        const status = statusDictionary[String(checked)];
        formikCreate.setFieldValue("status", status);
    };
    return (
        <Box>
            <Dialog
                fullWidth
                maxWidth="xs"
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
                    <Grid
                        container
                        mt={2}
                        display={"flex"}
                        justifyContent={"center"}
                    >
                        <Grid item xs={12} md={12}>
                            <CustomInput
                                label="Nombre"
                                onBlur={formikCreate.handleBlur}
                                value={formikCreate.values.nombreProducto}
                                onChange={formikCreate.handleChange}
                                helperText={
                                    formikCreate.touched.nombreProducto &&
                                    formikCreate.errors.nombreProducto
                                }
                                error={
                                    formikCreate.touched.nombreProducto &&
                                    Boolean(formikCreate.errors.nombreProducto)
                                }
                                name="nombreProducto"
                                id="nombreProducto"
                                type="text"
                                margin="none"
                            />
                        </Grid>
                        <Grid></Grid>
                        <Grid
                            container
                            display={"flex"}
                            flexDirection={"row"}
                            spacing={2}
                        >
                            <Grid item xs={12} md={12}>
                                <CustomInput
                                    label="Cantidad"
                                    value={formikCreate.values.stock}
                                    onBlur={formikCreate.handleBlur}
                                    onChange={formikCreate.handleChange}
                                    helperText={
                                        formikCreate.touched.stock &&
                                        formikCreate.errors.stock
                                    }
                                    error={
                                        formikCreate.touched.stock &&
                                        Boolean(formikCreate.errors.stock)
                                    }
                                    name="stock"
                                    id="stock"
                                    type="number"
                                    margin="none"
                                />
                            </Grid>
                          
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        padding: "15px",
                        marginTop:'10px'
                    }}
                >
                    <ButtonComponent
                        style={{ width: "50%" }}
                        onClick={() => formikCreate.submitForm()}
                        text="Guardar"
                    />
                    <ButtonComponent
                        style={{ width: "50%" }}
                        onClick={modalClose}
                        color="error"
                        text="Cancelar"
                    />
                </DialogActions>
            </Dialog>
        </Box>
    );
};
