import cookieParser from "cookie-parser";
import express from "express";
import mongoose from "mongoose";
mongoose.set("strictQuery", false);
import Route from './routes/Route.js'
import cors from 'cors'
import dotenv from "dotenv";
dotenv.config()

const app = express();

app.use(cors({
  origin:true,
  credentials:true
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',Route)
app.use(cookieParser())

app.listen(process.env.PORT, () => {
  mongoose.connect(process.env.DB_URL).then(() => {
    console.log(`server started`);
  });
});
