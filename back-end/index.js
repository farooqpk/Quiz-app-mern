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


app.listen(3000, () => {
  mongoose.connect("mongodb://127.0.0.1:27017/QuizApp").then(() => {
    console.log(`server started @  http://localhost:3000/`);
  });
});
