
import { ApiResponse,  URL_PRODUCTO } from "../../url";
import { Post } from "../../MethodPost";
import { Get } from "../../MethodGet";
import { Delete } from "../../MethodDelete";
import { Put } from "../../MethodPut";
import { IProducto, ISelectIem } from "./interface";
import { IFormikProducto } from "../../../layout/producto/form1/schema";

interface ProductoControlleProsp {
    getListProducto: ()=> Promise <IProducto[]>;
    getSelectModal : () => Promise<ISelectIem[]>;
    postProducto: (datos: IFormikProducto) => Promise<ApiResponse>;
    getByProducto : (id:number) => Promise<IProducto>;
    deleteByIdProducto : (id:number) => Promise<ApiResponse>;
    putByIdProducto : (datos:IFormikProducto) => Promise<ApiResponse>;
}



export const useProductoController = (): ProductoControlleProsp => {
    const getByProducto = async (id:number): Promise<IProducto> =>{
        try {
            const response = await Get<IProducto>(`${URL_PRODUCTO}/${id}`)

           return response;
        } catch (error) {console.log(error, error)
            return Promise.reject(error)
        }
    }
    
    const putByIdProducto = async (datos:IFormikProducto): Promise<ApiResponse> =>{
        try {
            const response = await Put<ApiResponse>(URL_PRODUCTO, datos)
           return response;
        } catch (error) {console.log(error, error)
            return Promise.reject(error)
        }
    }


    const deleteByIdProducto = async (id:number): Promise<ApiResponse> =>{
        try {
            const response = await Delete<ApiResponse>(`${URL_PRODUCTO}/${id}`)

           return response;
        } catch (error) {console.log(error, error)
            return Promise.reject(error)
        }
    }

    const getListProducto = async (): Promise<IProducto[]> =>{
        try {
            const response = await Get<IProducto[]>(URL_PRODUCTO)
           return response
        } catch (error) {console.log(error, error)
            return Promise.reject(error)
        }
    }

    const getSelectModal = async (): Promise<ISelectIem[]> =>{
        try {
            const response = await Get<ISelectIem[]>(`${URL_PRODUCTO}/select`)
          
           return response
        } catch (error) {console.log(error, error)
            return Promise.reject(error)
        }
    }

    const postProducto = async (datos: IFormikProducto): Promise<ApiResponse> => {
        try {
            const response = await Post<ApiResponse>(URL_PRODUCTO, datos);
            return response
        } catch (error) {
            console.log(error, error);
            return Promise.reject(error);
        }
    };

    return {
        postProducto,
        getListProducto,
        deleteByIdProducto,
        putByIdProducto,
        getSelectModal,
        getByProducto
    };
};
