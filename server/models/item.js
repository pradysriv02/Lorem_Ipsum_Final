import mongoose, { Mongoose } from "mongoose";

const itemSchema = new mongoose.Schema(
    {
        itemName:{
            type:String,
            required:true,
        },
        itemId:{
            type:String,
            required:true,
            unique:true
        },
        price:{
            type:Number,
            required:true
        },
        rating:{
            type:Number,
            required:true
        }
    },
    {timeStamps:true}
);

const Item = mongoose.model("Item",itemSchema);
export default Item;