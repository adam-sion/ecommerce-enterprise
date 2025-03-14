import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Loader from "./components/utils/Loader/Loader";
export const AdminRoute = ()=> {
  const {isAdmin} = useSelector((state)=> state.auth);  
   if (isAdmin === null) {
    return <Loader/>
   }
   
  return isAdmin ? <Outlet/> : <Navigate to="/" replace />;
  
}