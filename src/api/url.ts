import axios from "axios";


export interface ApiResponse {
  message: string;
  detail: string;
  success: boolean;
  status: number;
}

export const Urls = {
  url : "http://localhost:8083/",
  deploy: "https://tia-backend.onrender.com/"
}
const BASE_API = `${Urls.deploy}`

//Producto
export const URL_PRODUCTO = "producto";

//local
export const URL_LOCAL = "locales"

export const DASHBOARD_API = `${URL_PRODUCTO}/dashboard`;

export const URL_PRODUCT ="product"

//Authentication
export const URL_AUTHENTICATION = "user/validate";

//Sequence

export const Sequence_URL = "invoice/header/sequence";

//Factura
export const FACTURA_URL ="invoice/header"


export const instance = axios.create({
    baseURL  : `${BASE_API}api/`,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  // instance.interceptors.request.use(
  //   config => {
  //   const token = localStorage.getItem('Token');
  //   if(token){
  //     config.headers.Authorization = `Bearer ${token}`
  //   };
  //   return config;

  //   },
  //   error => {
  //     return Promise.reject(error);
  //   }
  // )