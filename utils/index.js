const express=require('express')
require('dotenv').config()
const app=express();
const router=express.Router()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
const PORT=process.env.PORT

module.exports={app,PORT,router}

