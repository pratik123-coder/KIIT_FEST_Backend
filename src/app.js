import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

config({path:"/.env"});

const app = express()
app.use(cors({
  origin: process.env.CORS_ORIGIN
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

app.use("/api", routes);

app.get("/api/getkey", (req,res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);

export {app}