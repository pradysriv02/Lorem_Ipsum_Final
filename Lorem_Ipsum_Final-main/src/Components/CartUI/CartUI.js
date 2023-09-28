import React, { useEffect, useState } from "react";
import "./Cart.css";
import { AiOutlineClose } from "react-icons/ai";
import { BsCartX } from "react-icons/bs";
import CartItem from "../cartItem/CartItem";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Cart({ onClose }) {
  const [cart, setcart] = useState(null);
  const items = useSelector((state) => state.items);
  const navigate = useNavigate();

  useEffect(() => {
    setcart(items);
  }, [items]);
  
  let totalAmount = 0;
  cart?.forEach((item) => (totalAmount += item.qty * item.price));
  const isCartEmpty = cart?.length === 0;
  return (
    <div className="Cart">
      <div className="overlay" onClick={onClose}></div>
      <div className="cart-content">
        <div className="header">
          <h3>Shopping Cart ({items.length})</h3>
          <div className="close-btn" onClick={onClose}>
            <AiOutlineClose />
          </div>
        </div>
        <div className="cart-items">
          {cart?.map((item) => (
            <CartItem key={item.itemId} cart={item} />
          ))}
        </div>
        {isCartEmpty && (
          <div className="empty-cart-info">
            <div className="icon">
              <BsCartX />
            </div>
            <h4>Cart is Empty</h4>
          </div>
        )}
        {!isCartEmpty && (
          <div className="checkout-info">
            <div className="total-amount">
              <h3 className="total-message">Total:</h3>
              <h3 className="total-value">₹ {totalAmount}</h3>
            </div>
            <div className="checkout btn-primary">
              <Button
                sx={{ color: "white", border: "1px solid white", bgcolor:"#097969" }}
                onClick={() => navigate("/pay")}>
                Pay
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
