import { useSelector } from "react-redux";
import AppRoutes from "../AppRoutes";
import AuthRoutes from "../AuthRoutes/AuthRoutes";
const MiddleWareRoutes = () => {
    const {token}=useSelector((state:any)=>state.auth);
      return (
        <>
        {token?<AppRoutes/>:<AuthRoutes />}
         </>
    );
};
export default MiddleWareRoutes;