import React from "react";
import Form from "./form";
import { Box,IconButton,Typography } from "@mui/material";
import logo from "../../Assets/logo.png"
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from "react-redux";
import { setLoginModal } from "../../state";

const LoginPage = () =>{
  const dispatch = useDispatch()
  const handleClose = () => dispatch(setLoginModal());
    return(
            <Box display="flex" height="100vh" alignItems="center" justifyContent="center" gap="4rem" position="relative">
                <Box position="absolute"
                width="clamp(50%,500px,100%)"
                p="2rem"
                borderRadius="1.5rem"
                backgroundColor="beige">
                    <IconButton onClick={handleClose} sx={{position:"absolute", right:"2%", top:"3%"}}>
                        <CloseIcon /> 
                    </IconButton>
                    <Box display="flex" mb={2} alignItems="center" justifyContent="center">
                    <img className='logo' src={logo} style={{filter: "invert(1)"}}/>
                    </Box>
                    <Form />
                </Box>
            </Box>
    );
};

export default LoginPage;