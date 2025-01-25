import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../layout/Dashboard/Dashboard";
import { Producto } from "../layout/producto";
import { Login } from "../layout/security/login";
import { Locales } from "../layout/locales";
import { Asignar } from "../layout/asignar/asignar";

export const AppRouter = createBrowserRouter([
    // {
    //     path: "/",
    //     Component: Login,
    // },
    {
        path: "/dashboard",
        Component: Dashboard,
    },
    {
        path: "/producto",
        Component: Producto,
    },
   {
    path: "/local",
        Component: Locales,
   },
    {
        path: "/",
        Component: Login,
    },
    {
        path: "/asignar",
        Component: Asignar,
    },
]);
