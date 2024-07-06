import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { userRouter } from './routes/users.js'
 const app=express()
 app.use(cors())
 app.use(express.jason())
 app.use('/auth',userRouter)
 mongoose.connect("mongodb://localhost:27017/")
 const port =5000
 app.get('/',(req,res)=>{
     res.send('hello world')
 })
 app.listen(port,()=>
{
    console.log('server is running')
})