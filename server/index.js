import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import { error } from "console";
import authRoutes from "./routes/auth.js";
import cartRoutes from "./routes/cart.js";
import { register } from "./controllers/auth.js";

const __filename = fileURLToPath(import.meta.url);

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.post("/auth/register",register);
//Routes:
app.use("/auth",authRoutes);
app.use("/cart",cartRoutes);

// Mongoose Setup:
const PORT = process.env.PORT||6001;
mongoose
 .connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
 })
    .then(() => {
        app.listen(PORT,() => console.log(`Server Port:${PORT}`));
    })
    .catch((error) => console.log(`${error} did not connect`));