import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
export const AdminRoute = ()=> {
  const {isAdmin} = useSelector((state)=> state.auth);  

  return isAdmin ? <Outlet/> : <Navigate to="/" replace />;
  
}