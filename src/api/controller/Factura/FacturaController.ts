import { facturaValues } from "../../../layout/compras/table/components";
import { Post } from "../../MethodPost";
import { ApiResponse, FACTURA_URL } from "../../url";



interface IFacturaController{
    postFactura : (datos: facturaValues) => Promise<ApiResponse>
    
}

export const useFacturaController = (): IFacturaController  => {

const postFactura = async (datos: facturaValues): Promise<ApiResponse> =>{ 
    try {
        const response = await Post<ApiResponse>(FACTURA_URL, datos)
       return Promise.resolve(response);
    } catch (error) {console.log(error, error)
        return Promise.reject(error)
    }
}


    return { 
        postFactura
    };

} 