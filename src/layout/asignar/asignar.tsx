import React, { useEffect, useState } from "react";
import { BasePage } from "../pages/BasePage";
import { Box, Card, Grid, Typography, List, ListItem, IconButton } from "@mui/material";
import { ButtonComponent, SelectFormik } from "../../components";
import { useProductoController } from "../../api/controller/Producto/ProductoController";
import { useFormik } from "formik";
import DeleteIcon from "@mui/icons-material/Delete";
import { ISelectIem } from "../../api/controller/Producto/interface";
import { FormikAsignar } from "./schema";
import { LocalesController } from "../../api/controller/local/LocalController";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const Asignar = () => {
  const { getSelectModal } = useProductoController();
  const { getSelectModalLocal, postLocalAndProduct } = LocalesController();
  const [optionLocal, setOptionLocal] = useState<ISelectIem[]>([]);
  const [optionProductos, setOptionProductos] = useState<ISelectIem[]>([]);
  const [numberProducto, setNumberProducto] = useState<number>(0);
  const [selectedProductos, setSelectedProductos] = useState<ISelectIem[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    try {
      const responseLocal = await getSelectModalLocal();
      const responseProductos = await getSelectModal();
      setOptionLocal(responseLocal);
      setOptionProductos(responseProductos);
    } catch (error) {
      console.error(error);
    }
  };

  const agregarProducto = (producto: ISelectIem | null) => {
    if (producto && !selectedProductos.find((p) => p.value === producto.value)) {
      setSelectedProductos([...selectedProductos, producto]);
    }
  };

  const eliminarProducto = (productoId: number) => {
    setSelectedProductos(selectedProductos.filter((p) => p.value !== productoId));
  };

  const formik = useFormik({
    initialValues: FormikAsignar,
    onSubmit: async (values) => {
        values.productoResponses = selectedProductos.map(producto => ({
          id: producto.value,
          nombreProducto: producto.label,
          stock: 0
        }));
      try{
        const response = await postLocalAndProduct(values);
       if(response.success){
        Swal.fire({
            position: "center",
            icon: "success",
            title: response.message,
        }), 
        navigate("/dashboard")   
       }
      }catch(error){
        console.log(error)
      }
    },
  });
  const selectorProducto = (option: { label: string; value: number }) => {
    console.log(option.value);
    if (option) {
        setNumberProducto(option != null ? option.value : 0);
    } 
};
  return (
    <BasePage>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Box sx={{ width: "50%", height: "100%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <SelectFormik
                label="Local *"
                onChange={(selectedOption: { value: number; label: string }) =>
                  formik.setFieldValue("id", selectedOption ? selectedOption.value : "")
                }
                options={optionLocal}
                onBlur={formik.handleBlur}
                touched={formik.touched.id}
                errorMessage={formik.errors.id}
                name="id"
                id="id"
              />
            </Grid>
          </Grid>

          <Card sx={{ marginTop: "20px", padding: "20px", minHeight: "50vh" }}>
            <Typography variant="h6" sx={{ marginBottom: "10px" }}>
              Productos
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={8}>
                <SelectFormik
                  label="Producto *"
                  onChange={(selectedOption: { value: number; label: string }) =>
                    selectorProducto(selectedOption)
                  }
                  options={optionProductos}
                  onBlur={formik.handleBlur}
                 // touched={formik.touched.}
                //  errorMessage={formik.errors.productoId}
                  name="productoId"
                  id="productoId"
                />
              </Grid>
              <Grid item xs={4}>
                <ButtonComponent
                  text="Agregar Producto"
                  onClick={() =>
                    agregarProducto(optionProductos.find((p) => p.value === numberProducto!) || null)
                  }
                 // startIcon={<AddIcon />}
                />
              </Grid>
            </Grid>

            <List sx={{ marginTop: "20px" }}>
              {selectedProductos.map((producto) => (
                <ListItem
                  key={producto.value}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  <Typography>{producto.label}</Typography>
                  <IconButton onClick={() => eliminarProducto(producto.value)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                </ListItem>
              ))}
            </List>
          </Card>

          <Box sx={{ marginTop: "20px", display: "flex", justifyContent: "flex-end" }}>
            <ButtonComponent text="Guardar" onClick={formik.handleSubmit} />
          </Box>
        </Box>
      </Box>
    </BasePage>
  );
};
