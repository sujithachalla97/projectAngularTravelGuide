import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
const app = express();

dotenv.config();
app.use(cookieParser);

app.listen(5000,()=>{
    console.log("Listening on port 5000");
})