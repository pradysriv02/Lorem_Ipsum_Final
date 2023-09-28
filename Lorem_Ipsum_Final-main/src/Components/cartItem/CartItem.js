import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import "./CartItem.css";
import { setItems } from "../../state";
import DeleteIcon from '@mui/icons-material/Delete';

function CartItem({ cart }) {
  const dispatch = useDispatch();
  const {_id} = useSelector((state) => state.user);
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
        body: JSON.stringify({ id: _id, itemId: cart._id }),
      }).then(() => getCartItems());
    };
    addItems();
  };
  return (
    <div className="CartItem">
      <div className="item-img">
        <img src={cart.image} alt="" />
      </div>
      <div className="item-info-wrapper">
        <div className="item-info">
          <p className="title">{cart.name}</p>
          <p className="price">₹ {cart.price}</p>
          <div className="quantity-selector">
            <span
              className="btn decrement"
              onClick={()=>handleClick(`remove/${cart._id}`)}>
              -
            </span>
            <span className="quantity">{cart.qty}</span>
            <span className="btn increment" onClick={()=>handleClick("add")}>
              +
            </span>
          </div>
          <p className="total-price" style={{fontSize:"1rem"}}>Subtotal: ₹ {cart.qty * cart.price}</p>
        </div>
        <div className="item-remove" onClick={() => handleClick("remove")}>
          <DeleteIcon/>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
