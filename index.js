import express from 'express'
import {connectDB } from './Models/db.js'
import dotenv from 'dotenv'
import cros from 'cors'
import bodyParser from 'body-parser'
import AuthRouter from './Router/AuthRouter.js'
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cros({
    origin:'https://auth-front-gold.vercel.app',
    credentials:true
}));
app.use('/auth',AuthRouter)
const PORT = process.env.PORT || 8080;
connectDB();

app.get('/',(req,res)=>{
    res.send("")
})

app.listen(PORT)