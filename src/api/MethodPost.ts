import { object } from "prop-types";
import { boolean } from "yup";
import { instance } from "./url";
import { AxiosError, AxiosResponse } from "axios";

export const Post = async <T extends unknown>(endpoint:string , data?:object, autorized: boolean = true, params?:object): Promise<T> => {
     
    return await instance
    .post(endpoint, data, { params })
    .then(({ data }: AxiosResponse<T>) => data)
    .catch((error: AxiosError<any>) => {
      console.log("Error desde el metodo post", JSON.stringify(error, null, 3));
      throw error;
    })
    .finally(() => {
    });
}