import { AxiosResponse, AxiosError } from "axios";
import { instance } from "./url";

export const Put = async <T extends unknown>(endpoint:string , data?:object, autorized: boolean = true, params?:object): Promise<T> => {
     
    return await instance
    .put(endpoint, data, { params })
    .then(({ data }: AxiosResponse<T>) => data)
    .catch((error: AxiosError<any>) => {
      console.log("Error desde el metodo post", JSON.stringify(error, null, 3));
      throw error;
    })
    .finally(() => {
    });
}