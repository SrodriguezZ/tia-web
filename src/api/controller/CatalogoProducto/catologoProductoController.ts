import { Sequence } from "../../../interface/producto";
import { Get } from "../../MethodGet";
import { Sequence_URL } from "../../url";



interface CatalogoProductoPros{
    getSequence : () => Promise<Sequence>
    
}

export const useCatalogoProducto = (): CatalogoProductoPros  => {

const getSequence = async (): Promise<Sequence> =>{ 
    try {
        const response = await Get<Sequence>(Sequence_URL)
       return Promise.resolve(response);
    } catch (error) {console.log(error, error)
        return Promise.reject(error)
    }
}


    return { getSequence};

} 