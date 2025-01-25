
import { ApiResponse,  URL_LOCAL } from "../../url";
import { Post } from "../../MethodPost";
import { Get } from "../../MethodGet";
import { Delete } from "../../MethodDelete";
import { Put } from "../../MethodPut";
import { IFormikLocales } from "../../../layout/locales/form1/schema";
import { ISelectIem } from "../Producto/interface";
import { IFormikAsignar } from "../../../layout/asignar/schema";

interface ProductoControlleProsp {
    getListLocales: ()=> Promise <IFormikLocales[]>;
    getSelectModalLocal : () => Promise<ISelectIem[]>;
    postLocales: (datos: IFormikLocales) => Promise<ApiResponse>;
    getByLocal : (id:number) => Promise<IFormikLocales>;
    deleteByIdLocales : (id:number) => Promise<ApiResponse>;
    putByIdLocales : (datos:IFormikLocales) => Promise<ApiResponse>;
    postLocalAndProduct:(dato:IFormikAsignar) => Promise<ApiResponse>;
}

export const LocalesController = (): ProductoControlleProsp => {
    const getByLocal = async (id:number): Promise<IFormikLocales> =>{
        try {
            const response = await Get<IFormikLocales>(`${URL_LOCAL}/${id}`)

           return response;
        } catch (error) {console.log(error, error)
            return Promise.reject(error)
        }
    }
    
    const putByIdLocales = async (datos:IFormikLocales): Promise<ApiResponse> =>{
        try {
            const response = await Put<ApiResponse>(URL_LOCAL, datos)
           return response;
        } catch (error) {console.log(error, error)
            return Promise.reject(error)
        }
    }




    const deleteByIdLocales = async (id:number): Promise<ApiResponse> =>{
        try {
            const response = await Delete<ApiResponse>(`${URL_LOCAL}/${id}`)

           return response;
        } catch (error) {console.log(error, error)
            return Promise.reject(error)
        }
    }

    const getListLocales = async (): Promise<IFormikLocales[]> =>{
        try {
            const response = await Get<IFormikLocales[]>(URL_LOCAL)
           return response
        } catch (error) {console.log(error, error)
            return Promise.reject(error)
        }
    }

    const getSelectModalLocal = async (): Promise<ISelectIem[]> =>{
        try {
            const response = await Get<ISelectIem[]>(`${URL_LOCAL}/select`)
           
           return response
        } catch (error) {console.log(error, error)
            return Promise.reject(error)
        }
    }

    const postLocales = async (datos: IFormikLocales): Promise<ApiResponse> => {
        try {
            const response = await Post<ApiResponse>(URL_LOCAL, datos);
            return response
        } catch (error) {
            console.log(error, error);
            return Promise.reject(error);
        }
    };

    const postLocalAndProduct = async(dato:IFormikAsignar) : Promise<ApiResponse> => {
        try {
            const response = await Post<ApiResponse>(`${URL_LOCAL}/product`, dato);
            return response
        } catch (error) {
            console.log(error, error);
            return Promise.reject(error);
        }
    };

    return {
        postLocales,
        getListLocales,
        deleteByIdLocales,
        putByIdLocales,
        getSelectModalLocal,
        getByLocal,
        postLocalAndProduct
    };
};
