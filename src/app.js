import express from "express";
//user ke browser me cookies pr crude operations krne ke lye
import cookieParser from "cookie-parser";
import cors from "cors"

const app=express()

app.use(cors({
    origin: process.env.COORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
// % vgera kyu hote hai url me
app.use(express.urlencoded({extended:true,limit : "16kb"}))
// public assets ko access krne ke lye koi bhi kr skta hai
app.use(express.static("public"))
app.use(cookieParser())



export {app}