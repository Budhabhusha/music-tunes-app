import AppRoutes from "../AppRoutes";
import AuthRoutes from "../AuthRoutes/AuthRoutes";
const MiddleWareRoutes = () => {
    let userInfo = localStorage.getItem("user");
    let loggedInUser = userInfo && JSON.parse(userInfo);
    console.log("Log",loggedInUser?.loggedIn);
    
    return (
        <>
         {loggedInUser?.loggedIn ?  <AppRoutes /> : <AuthRoutes />}
        </>
    );
};
export default MiddleWareRoutes;