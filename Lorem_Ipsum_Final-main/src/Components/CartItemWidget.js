import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";
import RemoveCircleOutlineTwoToneIcon from "@mui/icons-material/RemoveCircleOutlineTwoTone";
import { useDispatch, useSelector } from "react-redux";
import state, { setItems } from "../state";

const CartItemWidget = ({ data }) => {
  const dispatch = useDispatch();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const getCartItems = async () => {
    const response = await fetch(`http://localhost:3001/cart/${_id}/get`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const ans = await response.json();
    dispatch(setItems({ items: ans }));
  };
  const handleClick = (action) => {
    const addItems = async () => {
      const response = await fetch(`http://localhost:3001/cart/${action}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: _id, itemId: data._id }),
      }).then(() => getCartItems());
    };
    addItems();
  };

  return (
    <Box
      display={"flex"}
      gap={"10%"}
      borderBottom={"1px solid black"}
      marginBottom={"1.5rem"}>
      <Box flex={1}>
        <div style={{ width: "100%", borderRadius: "50%", overflow: "hidden" }}>
          <img
            src="http://picz.in/data/media/8/Fast-food.jpg"
            alt="image"
            width={"100%"}
          />
        </div>
      </Box>
      <Box flex={2}>
        <Typography color={"darkgreen"} fontFamily={"roboto"}>
          <h5>{data.name}</h5>
        </Typography>
      </Box>
      <Box flex={1}>
        <Typography color={"darkgreen"} fontFamily={"roboto"}>
          <h5>{data.price}</h5>
        </Typography>
      </Box>
      <Box flex={1} display={"flex"} gap={"0.2rem"}>
        <Box onClick={() => handleClick("add")}>
          <AddCircleOutlineTwoToneIcon sx={{ fontSize: "0.95rem" }} />
        </Box>
        <Typography color={"darkgreen"} fontFamily={"roboto"}>
          <h5>{data.qty}</h5>
        </Typography>
        <Box onClick={() => handleClick(`remove/${data._id}`)}>
          <RemoveCircleOutlineTwoToneIcon sx={{ fontSize: "0.95rem" }} />
        </Box>
      </Box>
      <Box flex={1}>
        <Typography color={"darkgreen"} fontFamily={"roboto"}>
          <h5>{data.qty * data.price}</h5>
        </Typography>
      </Box>
    </Box>
  );
};

export default CartItemWidget;
