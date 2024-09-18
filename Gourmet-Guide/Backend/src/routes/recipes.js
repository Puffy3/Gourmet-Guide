import express from 'express'
import mongoose from 'mongoose'
import RecipeModel from '../models/Recipes.js'
import UserModel from '../models/Users.js';
 
const router=express.Router();
router.get("/",async (req,res)=>{
    try {
        const response =await RecipeModel.find({})
        res.json(response)
    } catch (err) {
        res.json(err)
    }
})


router.post("/",async (req,res)=>{
    const recipe = new RecipeModel(req.body)
   
    try {
        
        const response =await recipe.save()
        res.json(response)
    } catch (err) {
        res.json(err)
    }
})

router.put("/",async (req,res)=>{
 
    try {
        const recipe =await RecipeModel.findById(req.body.recipeID) 
        const user =await UserModel.findById(req.body.userID) 
       user.savedRecipes.push(recipe)
       await user.save()
       
        res.json({savedRecipes:user.savedRecipes})
    } catch (err) {
        res.json(err)
    }
})

router.get("/savedRecipes/search/:query", async (req, res) => {
  try {
    const query = req.params.query;
    const regex = new RegExp(query, 'i'); // 'i' makes it case-insensitive
    const result = await RecipeModel.find({ name: { $regex: regex } });

    res.json({ result });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});


router.get("/savedRecipes/ids/:userId", async (req, res) => {
  const { userId } = req.params;

 
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ error: "Invalid user ID format" });
  }

  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ savedRecipes: user.savedRecipes });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("savedRecipes",async(req,res)=>
{
    try {
        const user =await UserModel.findById(req.body.userID)
        const savedRecipes=await RecipeModel.find({
            _id:{$in:user.savedRecipes}
        })
        res.json({savedRecipes})
    } catch (err) {
        console.error(err)
    }
})
router.get("/savedRecipes/:userId", async (req, res) => {
    try {
      const user = await UserModel.findById(req.params.userId);
      const savedRecipes = await RecipeModel.find({
        _id: { $in: user.savedRecipes },
      });
  
     
      res.status(201).json({ savedRecipes });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

export {router as recipesRouter};