import mongoose, { Mongoose } from "mongoose";

const itemSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        itemId:{
            type:Number,
        },
        image:{
            type:String,
            default:""
        },
        category:{
            type:String,
            required:true,
        },
        rating:{
            type:Number,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        veg:{
            type:Boolean,
            default:true,
            required:true
        }
    },
    {timeStamps:true}
);

const Item = mongoose.model("Item",itemSchema);
export default Item;