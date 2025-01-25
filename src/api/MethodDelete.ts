import { AxiosError, AxiosResponse } from "axios"
import { instance } from "./url"

export const Delete = async <T>(endpoint: string, params?: any): Promise<T> => {
    // try {
    //     //console.log(instance)
    //   const { data }: AxiosResponse<T> = await instance.get(endpoint, { params });
    //   return data;
    // } catch (error) {
    //   console.error('Error in GET request:', error);
    //   throw error;
    // }
    return await instance
    .delete(endpoint,{params})
    .then(({data}: AxiosResponse<T> ) => data)
    .catch((error: AxiosError<any>) => {
        console.log(JSON.stringify(error, null, 3));
        throw error;
    })
}
