import { Container, Stack } from "@mui/system";
import React, { useState } from "react";
import logo from "../../Assets/logo.png";
import "./navbar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Box,
  FormControl,
  IconButton,
  InputBase,
  MenuItem,
  Modal,
  Select,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Cart from "../CartUI/CartUI";
import { useDispatch, useSelector } from "react-redux";
import state, { setItems, setLoginModal, setLogout } from "../../state";
const Navbar = () => {
  const navigate = useNavigate();
  const userId = useSelector((state) => state.user?._id);
  const isLoggedIn = useSelector((state) => state?.token);
  const dispatch = useDispatch();
  const [openCart, setOpenCart] = useState(false);
  const getCartItems = async () => {
    const response = await fetch(`http://localhost:3001/cart/${userId}/get`, {
      method: "GET",
      headers: { Authorization: `Bearer ${isLoggedIn}` },
    });
    const data = await response.json();
    dispatch(setItems({ items: data }));
  };
  const toggleCart = () => {
    setOpenCart(!openCart);
    getCartItems();
  };
  return (
    <>
      <Container maxWidth="xl" sx={{ bgcolor: "#171717" }}>
        <Stack
          maxWidth="1200px"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          padding="1em 0"
          sx={{ position: "sticky", marginInline: "auto" }}>
          <a href="">
            <img className="logo" src={logo} onClick={() => navigate("/")} />
          </a>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            padding="1rem 0"
            gap="0 2rem">
            <Box
              onClick={() =>
                isLoggedIn ? toggleCart() : dispatch(setLoginModal())
              }>
              <IconButton>
                <ShoppingCartIcon sx={{ color: "white" }} />
              </IconButton>
            </Box>

            <Box
              onClick={() => {
                isLoggedIn ? dispatch(setLogout()) : dispatch(setLoginModal());
              }}
              px={2}
              py={1}
              sx={{
                color: "white",
                backgroundColor: isLoggedIn ? "#B30015" : "#097969",
                borderRadius: 2,
                cursor: "pointer",
              }}>
              <Typography>{isLoggedIn ? "LogOut" : "Log In"}</Typography>
            </Box>
            {/* <Nav_Menu /> */}
          </Stack>
        </Stack>
      </Container>
      {openCart && <Cart onClose={() => setOpenCart(false)} />}
      {/* <Modal
        onClose={toggleCart}
        open={cartModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Cart />
      </Modal> */}
    </>
  );
};

export default Navbar;
