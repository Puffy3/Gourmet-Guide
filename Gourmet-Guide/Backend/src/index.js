import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { userRouter } from './routes/users.js'
import { recipesRouter } from './routes/recipes.js'
 const app=express()
 app.use(cors())
 app.use(express.json())


 app.use('/auth',userRouter)
 app.use('/recipes',recipesRouter)
 mongoose.connect("mongodb://localhost:27017/recipe").then(()=>{
    console.log(`db connected`);
 })
 const port =5000
//  app.get('/',(req,res)=>{
//      res.send('hello world')
//  })
const db = mongoose.connection;

db.on('connected', () => {
  console.log('Mongoose connected to DB');
});

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