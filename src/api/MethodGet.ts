import { AxiosError, AxiosResponse } from "axios"
import { instance } from "./url"

export const Get = async <T>(endpoint: string, params?: any): Promise<T> => {


    return await instance
    .get(endpoint,{params})
    .then(({data}: AxiosResponse<T> ) => data)
    .catch((error: AxiosError<any>) => {
        console.log(JSON.stringify(error, null, 3));
        throw error;
    })
}

