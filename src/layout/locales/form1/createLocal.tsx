import React from 'react'
import { IFormikLocales } from './schema';
import { Box, Dialog, DialogTitle, Grid, Typography, DialogContent, DialogActions } from '@mui/material';
import { FormikProps } from 'formik';
import { CustomInput, ButtonComponent } from '../../../components';
import LocalMallIcon from "@mui/icons-material/LocalMall";
interface LocalProps {
    open: boolean;
    close: (args: boolean) => void;
    formikCreate: FormikProps<IFormikLocales>

}
export const CreateLocal = ({ close, open,formikCreate }: LocalProps) => {
    const modalClose = () => {
        close(false);
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
                        <Typography variant="h5">Crear Local</Typography>
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
                                label="Nombre *" 
                                onBlur={formikCreate.handleBlur}
                                value={formikCreate.values.nombreLocal}
                                onChange={formikCreate.handleChange}
                                helperText={
                                    formikCreate.touched.nombreLocal &&
                                    formikCreate.errors.nombreLocal
                                }
                                error={
                                    formikCreate.touched.nombreLocal &&
                                    Boolean(formikCreate.errors.nombreLocal)
                                }
                                name="nombreLocal"
                                id="nombreLocal"
                                type="text"
                                margin="none"
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <CustomInput
                                label="Dirección"
                                onBlur={formikCreate.handleBlur}
                                value={formikCreate.values.direccion}
                                onChange={formikCreate.handleChange}
                                helperText={
                                    formikCreate.touched.direccion &&
                                    formikCreate.errors.direccion
                                }
                                error={
                                    formikCreate.touched.direccion &&
                                    Boolean(formikCreate.errors.direccion)
                                }
                                name="direccion"
                                id="direccion"
                                type="text"
                                margin="none"
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <CustomInput
                                label="Telefono"
                                onBlur={formikCreate.handleBlur}
                                value={formikCreate.values.telefono}
                                onChange={formikCreate.handleChange}
                                helperText={
                                    formikCreate.touched.telefono &&
                                    formikCreate.errors.direccion
                                }
                                error={
                                    formikCreate.touched.direccion &&
                                    Boolean(formikCreate.errors.direccion)
                                }
                                name="telefono"
                                id="telefono"
                                type="text"
                                margin="none"
                            />
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
}
