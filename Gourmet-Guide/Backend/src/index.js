import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { userRouter } from './routes/users.js'
import { recipesRouter } from './routes/recipes.js'
import dotenv from 'dotenv'
dotenv.config()
const url=process.env.URL
const app=express()
app.use(cors())
app.use(express.json())


 app.use('/auth',userRouter)
 app.use('/recipes',recipesRouter)
 mongoose.connect(url).then(()=>{
    console.log(`db connected`);
 })
 const port =process.env.PORT
//  app.get('/',(req,res)=>{
//      res.send('hello world')
//  })
const db = mongoose.connection;



db.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

db.on('disconnected', () => {
  console.log('Mongoose disconnected from DB');
});
 app.listen(port,()=>
{
    console.log('server is running')
})