import cookieParser from "cookie-parser";
import express from "express";
import mongoose from "mongoose";
mongoose.set("strictQuery", false);
import Route from './routes/Route.js'
import cors from 'cors'
import helmet from "helmet";
import dotenv from "dotenv";
dotenv.config()

const app = express();

app.use(cors({
  origin:process.env.CLIENT_URL,
  credentials:true,
  allowedHeaders:['Content-Type','Authorization','x-csrf-token'],
  exposedHeaders:['*','Authorization']
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',Route)
app.use(cookieParser())
//helmet protect out app by setting various htttp headers
app.use(helmet({
  crossOriginEmbedderPolicy:false
})) 

app.get("/test",(req,res)=>{
  res.json("server is working")
})


mongoose.connect(process.env.DB_URL).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`server started`);
  });
});



