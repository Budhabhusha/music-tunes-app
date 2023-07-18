import { createBrowserRouter } from "react-router-dom";
import MiddleWareRoutes from "./RouteMiddleware";

const router = createBrowserRouter([
    {path: '/*', element: <MiddleWareRoutes/>}
])
export default router