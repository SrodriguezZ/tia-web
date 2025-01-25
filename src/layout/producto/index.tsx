import DataTable from "../../components/DataTable";
import { Box, IconButton, Tooltip } from "@mui/material";
import { ButtonComponent } from "../../components/Button";
import { CreateProducto } from "./form1/createProducto";
import { useEffect, useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useProductoController } from "../../api/controller/Producto/ProductoController";
import { ListProduct, defaultInputValues } from "../../interface/producto";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import { FormikInput, Validations } from "./components/validations";
import { BasePage } from "../pages/BasePage";
import { IProducto } from "../../api/controller/Producto/interface";
import { FormikProducto } from "./form1/schema";

export const Producto = () => {

    const {getListProducto, deleteByIdProducto,postProducto,putByIdProducto} = useProductoController();
    const [tablaProducto, setTablaProducto] = useState<IProducto[]>([]);
    const [open, setOpen] = useState<boolean>(false);
    const [bandera, setBandera] = useState<boolean>(false);

    useEffect(()=>{
        Init()
    },[]);
 const  Init = async () => { 
       
        try {
            const response = await getListProducto();
            setTablaProducto(response)
        } catch (error) {
            console.log(error)
        }
     }
    const submitForm = () => { 
        setOpen(false);
        Init();
        formikCreate.resetForm();
     }

    const modalCreated = () => {
        setOpen(true);
        formikCreate.resetForm();

    };
    const formikCreate = useFormik({
        initialValues: FormikProducto,
       // validationSchema:Validations[0],
        onSubmit: async (values) => {

           
            if(bandera){
                putByIdProducto(values).then(()=> {
                   console.log(values)
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Editado con éxito",
                        }),
                        submitForm()
                    
                }).catch(error => console.log(error))
            }else{
                postProducto(values).then(()=> {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Guardado con éxito",
                    }),
                    submitForm()
                });
            }
           
           
        },
    });
   

     const clickDelete = (id:number) => { 
        deleteByIdProducto(id).then(()=> {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Elimanado con éxito",
            });
            Init()
        }).catch(error => console.log(error))
      }

      const clickUpdate = (datos:IProducto) => { 
        formikCreate.setValues(datos)
        setBandera(true)
        setOpen(true)
       }

    const columns: GridColDef[] = [
        { field: "id", headerName: "Id", width: 100, headerAlign: "center", align: "center" },
        { field: "nombreProducto", headerName: "Producto", width: 200 , headerAlign: "center", align: "center"},
        { field: "stock", headerName: "Cantidad", width: 200 ,  headerAlign: "center", align: "center"},
        { field: "fechaCreacion", headerName: "Fecha creacion", width: 200 ,  headerAlign: "center", align: "center"},
        {
            field: "acciones",
            headerName: "Acciones",
            width: 200,
            renderCell: (params) => (
                <Box>
                     <Tooltip title="Editar">
                     <IconButton onClick={()=> clickUpdate(params.row)} color="info" aria-label="delete">
                        <EditIcon />
                    </IconButton>
                    </Tooltip>

                    <Tooltip title="Eliminar">
                    <IconButton onClick={()=> clickDelete(params.row.id)} color="error" aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                    </Tooltip>
                   
                </Box>
            ),
        },
    ];

    return (
        <BasePage>
        <Box sx={{height:'20%', borderRadius:'5px', borderBottom:'10px'}}>
        <Box display={"flex"} justifyContent={"flex-end"} alignItems={'center'} sx={{height:'100%', width:'100%', padding:'15px'}} >
                <ButtonComponent onClick={modalCreated} text="Crear producto" />
            </Box>
        </Box>
            
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height:'100%'
                }}
            >
                <Box>
                    <DataTable rows={tablaProducto} columns={columns} />
                </Box>
                
            </Box>

            {open && (

                <CreateProducto formikCreate={formikCreate} open={open} close={setOpen} />
            )}
        </BasePage>
    );
};

