import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
// para ver as páginas pós login, trocar <AuthRoutes> por <AppRoutes>

export function Routes(){
    return(
        <BrowserRouter>
            < AuthRoutes/>
        </BrowserRouter>
    )
}
