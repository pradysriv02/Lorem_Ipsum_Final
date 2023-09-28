import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import state from "../state";
import { setItems } from "../state";
import CartItemWidget from "./CartItemWidget";
import Navbar from "./Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const Cart = ({ toggleModal }) => {
  // const { _id } = useSelector((state) => state.user);
  // const token = useSelector((state) => state.token);
  // const dispatch = useDispatch();
  // const [cartItems, setCartItems] = useState(null);
  // const items = useSelector((state) => state.items);
  // console.log(items);
  // useEffect(() => {
  //   const getCartItems = async () => {
  //     const response = await fetch(`http://localhost:3001/cart/${_id}/get`, {
  //       method: "GET",

  //       headers: { Authorization: `Bearer ${token}` },
  //     });
  //     const data = await response.json();
  //     dispatch(setItems({ items: data }));
  //   };
  //   getCartItems();
  // }, []);

  // useEffect(() => {
  //   setCartItems(items);
  // }, [items]);

  //   const navigate = useNavigate();
  //   //const {_id} = useSelector((state) => state.user);
  //   const items = useSelector((state) => state.items);
  //   const token = useSelector((state) => state.token);
  //   const userId = "64dfbe55f99766255bd0d254";
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     if (!token) navigate("/");
  //   }, [token]);
  return (
    //     <Box width={"100vw"} height={"100vh"} bgcolor={"beige"}>
    //       <Navbar />
    //       <Box
    //         width={"80%"}
    //         marginX={"auto"}
    //         display={"flex"}
    //         flexDirection={"column"}>
    //         <Box display={"flex"}>
    //           <Typography
    //             borderBottom={"2px solid black"}
    //             textAlign={"left"}
    //             color={"darkgreen"}
    //             fontSize={"2rem"}
    //             padding={"1rem"}
    //             sx={{
    //               fontFamily: "Poppins",
    //               color: "darkgreen",
    //             }}>
    //             <h1>My Cart</h1>
    //           </Typography>
    //         </Box>
    //         <Box
    //           display={"flex"}
    //           flexDirection={"column"}
    //           width={"100%"}
    //           justifyContent={"center"}
    //           marginX={"auto"}>
    //           <Box
    //             display={"flex"}
    //             marginBottom={"3rem"}
    //             width={"100%"}
    //             textAlign={"center"}
    //             sx={{
    //               fontFamily: "Poppins",
    //               color: "#343434",
    //             }}>
    //             <Box flex={"2"}>
    //               <h3>Products</h3>
    //             </Box>
    //             <Box flex={"1"}>
    //               <h3>Price</h3>
    //             </Box>
    //             <Box flex={"1"}>
    //               <h3>Qty</h3>
    //             </Box>
    //             <Box flex={"1"}>
    //               <h3>Total</h3>
    //             </Box>
    //           </Box>
    //           <CartItemWidget />
    //         </Box>
    //       </Box>
    //     </Box>
  //   <div
  //     style={{
  //       position: "absolute",
  //       top: "10%",
  //       right: "10%",
  //       width: "30%",
  //     }}>
  //     <Box
  //       bgcolor={"beige"}
  //       padding={"1rem"}
  //       display={"flex"}
  //       flexDirection={"column"}
  //       justifyContent={"center"}>
  //       {cartItems?.map((item) => (
  //         <CartItemWidget data={item} />
  //       ))}
  //       <Box display={"flex"} justifyContent={"center"}>
  //         <Button sx={{ color: "darkgreen", fontFamily: "roboto" }}>
  //           Close
  //         </Button>
  //         <Button sx={{ color: "darkgreen", fontFamily: "roboto" }}>Pay</Button>
  //       </Box>
  //     </Box>
  //   </div>
  <></>
   );
};

export default Cart;
