import { Box, Card, Grid } from "@mui/material";
import { CustomInput } from "../../../components/InputFromik";
import { Validations, defaultInput } from "./components/validations";
import { useFormik } from "formik";
import { ButtonComponent } from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { authController } from "../../../api/controller/Auth/AuthController";
import { AuthInterface } from "../../../interface/auth/inde";
import "../style/style.css";
import "../../../App.css"
import logo from '../../../assets/img/foodLogo.png'

export const Login = () => {


    const navigate = useNavigate();

    const { postAuthentication } = authController();



    const formik = useFormik({
        initialValues: defaultInput,
        validationSchema: Validations[0],
        onSubmit: async (values) => {
            try {
                const value: AuthInterface = {
                    userName: values.userName,
                    password: values.password,
                };

                navigate("/dashboard");
                
                // const result = await postAuthentication(value);
                // if (result.result) {

                //     Swal.fire({
                //         position: "center",
                //         icon: "success",
                //         title: "Ingreso con éxito",
                //         // showConfirmButton: false,
                //         // timer: 1500
                //     });
                //     navigate("/dashboard");
                // }else{
                //     Swal.fire({
                //         position: "center",
                //         icon: "error",
                //         title: "Usuario no registrado",
                //     });
                // }
            } catch (error) {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Usuario no registrado",
                });
            }
        },
    });

    return (
        <Grid className="login-style" >
            <Card className="card-login">
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    width={"80%"}
                    component={"form"}
                    onSubmit={formik.handleSubmit}
                >
                    <Grid>
                        <img alt="logo" className="imgStyleLogo" src={logo} />
                    </Grid>
                    <CustomInput
                    fontSize={14}
                        id="email"
                        label="Usuario: "
                        name="userName"
                        value={formik.values.userName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.userName &&
                            Boolean(formik.errors.userName)
                        }
                        helperText={
                            formik.touched.userName && formik.errors.userName
                        }
                    />
                    <CustomInput
                    fontSize={14}
                        id="password"
                        label="Contraseña"
                        name="password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.password &&
                            Boolean(formik.errors.password)
                        }
                        helperText={
                            formik.touched.password && formik.errors.password
                        }
                    />
                    <ButtonComponent
                    style={{width:'100%', marginTop:'10px',backgroundColor:'#0093E9',backgroundImage: 'linear-gradient(61deg, #0093E9 1%, #000000 95%)'}}
                        text="Iniciar sesion"
                        onClick={() => formik.submitForm()}
                    />
                </Box>
            </Card>
            {/*Login css*/}
            
        </Grid>
    );
};
