import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt"
import UserModel from "../models/Users.js"
import mongoose from 'mongoose'

const router =express.Router();
router.post("/register", async (req,res)=>
{
    const {username,password}=req.body
    const user =await UserModel.findOne({username: username})
 if(user){
    return res.json({message:"user already exists!"})
 }
 const hashedPassword =await bcrypt.hash(password,10)
const newUser=new UserModel({username ,password :hashedPassword});
await newUser.save()
res.send("new user added")
})
router.post("/login", async (req,res)=>{
    const {username,password}=req.body
    const user =await UserModel.findOne({username: username})
    if(!user){
        return res.json({message:"user ddoes not exists"})
    }
    const isPasswordValid= await bcrypt.compare(password,user.password)
    if(!isPasswordValid){
      return  res.json({message:"username or password not valid"})
    }
    const token=jwt.sign({id:user._id},"secret")
    res.json({
        token,userID:user._id
    })
})
export {router as userRouter};