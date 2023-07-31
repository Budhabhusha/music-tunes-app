import { Routes as BaseRoutes, BrowserRouter, Route } from "react-router-dom"
import AuthMiddleWare from "./middleware/AuthMiddleWare"
import { useSelector } from "react-redux"

const Routes = () => {
    const { token } = useSelector((state:any)=>state.auth);
    return (
        <BrowserRouter>
            <BaseRoutes>
              <Route path="/*" element={<AuthMiddleWare isLoggedIn={!!token} />}/>
            </BaseRoutes>
        </BrowserRouter>
    )
}

export default Routes