import { Button, Avatar, Typography, Box, styled } from "@mui/material"
import { Container } from "../../utils/GeneralComponents/GeneralComponents"
import { useDispatch } from "react-redux"
import { logout } from "../../../features/auth/authSlice";
import { showToast } from "../../../features/toast/toastSlice";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const UserContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    gap: '16px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
}));

const UserInfo = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
});

const LogoutButton = styled(Button)(({ theme }) => ({
    marginTop: '16px',
    backgroundColor: '#f44336',
    color: 'white',
    '&:hover': {
        backgroundColor: '#d32f2f',
    },
}));

export const UserTab = ({user})=> {
    const dispatch = useDispatch();
    
    const handleLogout = ()=> {
        dispatch(logout())
        dispatch(showToast({ message: "Logout successful", type: "success" }));
    }

    const handleImageError = (e) => {
        e.target.style.display = 'none';
        e.target.nextSibling.style.display = 'block';
    };
    
    return (
        <UserContainer>
            <UserInfo>
                <Box sx={{ position: 'relative', width: 80, height: 80 }}>
                    <Avatar
                        src={user.picture}
                        alt={user.username}
                        onError={handleImageError}
                        sx={{ width: 80, height: 80 }}
                    />
                    <AccountCircleIcon 
                        sx={{ 
                            display: 'none',
                            width: 80, 
                            height: 80,
                            position: 'absolute',
                            top: 0,
                            color: '#9e9e9e'
                        }} 
                    />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {user.username}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {user.email}
                </Typography>
            </UserInfo>
            <LogoutButton
                variant="contained"
                startIcon={<LogoutIcon />}
                onClick={handleLogout}
                fullWidth
            >
                Logout
            </LogoutButton>
        </UserContainer>
    )
}