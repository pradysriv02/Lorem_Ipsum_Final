import express from "express";
import {verifyToken} from "../middleware/auth.js";
import { getCartItems, addItem, removeItem, deleteCart,decreaseQty} from "../controllers/cart.js";

const router = express.Router();

router.get("/get",verifyToken,getCartItems);
router.post("/add",verifyToken,addItem);
router.post("/remove/:id",verifyToken,decreaseQty);
router.post("/remove",verifyToken,removeItem);
router.post("/deleteCart",verifyToken,deleteCart);

export default router;