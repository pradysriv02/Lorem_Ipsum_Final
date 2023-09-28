
import User from '../models/user.js';
import Item from '../models/item.js';

export const getCartItems = async(req,res) => {
    try {
        const { id } = req.params;
        
        const user = await User.findById(id);
        const items = await Promise.all(
            user.cart.map(async(item) => {
              const { _id, itemId, image, name, rating, price }=await Item.findById(item.itemId)
              return {
                _id,
                itemId,
                name,
                rating,
                price,
                image,
                qty:item.qty
              }
            })
        );
          res.status(200).json(items);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
};

export const addItem = async(req,res) => {
    try {
        const { id, itemId } = req.body;
        const user = await User.findById(id);
        console.log(user)
        const extractItem=user?.cart?.filter((item)=>item.itemId===itemId);
        if(extractItem.length===0){
          user?.cart?.push({
            itemId,
            qty:1
          })
        }else{
          const restCart=user?.cart?.filter((item)=>item.itemId!=itemId);
          const changeQty = {
            ...extractItem[0],
            qty:extractItem[0].qty+1
          }
          restCart.push(changeQty);
          user.cart=restCart
        }
        await user.save();
        res.status(200).json({message:"Item Added to Cart!"});
      } catch (err) {
        res.status(404).json({ message: err.message });
      }
};

export const removeItem = async(req,res) => {
    try {
        const { id, itemId } = req.body;
        const user = await User.findById(id);
        
        user.cart = user.cart.filter((item) => item.itemId!=itemId);

        await user.save();
        const items = await Promise.all(
            user.cart.map((id) => User.findById(id))
          );
          const formattedItems = items.map(
            ({ _id, name, image,category, price, rating,veg }) => {
              return { _id, name, image,category, price, rating,veg };
            }
          );
          res.status(200).json({message:"Item Removed from Cart"});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const deleteCart = async(req,res) =>{
    const { id } = req.params;
    const user = User.findById(id);

    user.cart.splice(0,user.cart.length);
    await User.save();
    res.status(200).json(user.cart);
};

export const decreaseQty = async(req,res) => {
  try {
    const { id, itemId } = req.body;
    const user = await User.findById(id);
    const extractItem=user.cart.filter((item)=>item.itemId===itemId);
    if(extractItem.length===0){
      res.json({message:"Item doesn't exist"});
      return;
    }else{
      const restCart=user.cart.filter((item)=>item.itemId!=itemId);
      if(extractItem[0].qty===1){
        user.cart=restCart;
      }
      else{
        const changeQty = {
          ...extractItem[0],
          qty:extractItem[0].qty-1
        }
        restCart.push(changeQty);
        user.cart=restCart
      }
      
    }
    await user.save();
    res.status(200).json({message:"Item Qty changed in Cart!"});
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};