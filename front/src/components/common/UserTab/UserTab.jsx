import { Button } from "@mui/material"
import { Container } from "../../utils/GeneralComponents/GeneralComponents"
import { useDispatch } from "react-redux"
import { logout } from "../../../features/auth/authSlice";
import { showToast } from "../../../features/toast/toastSlice";
import { useEffect } from "react";




export const UserTab = ({user})=> {
    const dispatch = useDispatch();
    const handleLogout = ()=> {
        dispatch(logout())
        dispatch(showToast({ message: "Logout successful", type: "success" }));
    }
    
    return (
        <>
        <Container>
        <div>{user.username}</div>
        <div>{user.email}</div>
        <img src={user.picture} alt="" />
        </Container>
       <Button onClick={handleLogout}>logout</Button>
        </>
    )
}