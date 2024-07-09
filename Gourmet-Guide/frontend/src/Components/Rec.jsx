import React, { useEffect, useState } from 'react';
import UseGetUserID from '../hooks/UseGetUserID.jsx';
import axios from 'axios';
function Rec(props) {
  const [savedRecipe,setSavedRecipe]=useState([])
  const userID=UseGetUserID()

    const saveRecipe=async(recipeID)=>{
        try {
          const response = await axios.put("http://localhost:5000/recipes",{recipeID,userID})
          console.log(response)
          setSavedRecipe(response.data.savedRecipes);
        } catch (error) {
          console.error(error)
        }
      }
      useEffect(()=>{
        const fetchSavedRecipes = async () => {
          try {
            const response = await axios.get(
              `http://localhost:5000/recipes/savedRecipes/ids/${userID}`
            );
            setSavedRecipe(response.data.savedRecipes);
          } catch (err) {
            console.log(err);
          }
        };
        fetchSavedRecipes();
      },[])
      const isRecipeSaved = (id) => savedRecipe.includes(id);
  return (
    <div className="bg-black shadow-md rounded-lg overflow-hidden flex max-w-full p-5 my-10 mx-5">
      <div className='flex items-center'>
        <img className="w-[800px] h-full " src={`${props.url}`} alt="this is an image" />
      </div>
      <div className=" bg-black w-full   p-10">
        <h1 className="text-2xl font-bold text-white">{props.name}</h1>
        <p className='text-orange-500 mt-4'>Ingredients</p>
        <div className="mt-2 flex gap-3 ">
          {props.ing.map((ingredient, index) => (
            <h3 key={index} className="text-lg text-white">{ingredient}</h3>
          ))}
        </div>
        <p className='text-orange-500 mt-4'>Instruction</p>
        <p className="mt-4 text-gray-300">{props.instructions}</p>
        <p className='text-orange-500 mt-4'>Cooking time</p>
        <p className="mt-2 text-gray-300">{props.time} minutes</p>
      </div>
      <button className='hover:cursor-pointer hover:bg-orange-500 hover:text-black p-2 rounded-lg text-orange-500 h-10' onClick={()=>saveRecipe(props.ied)}  disabled={isRecipeSaved(props.ied)}> {isRecipeSaved(props.ied) ? "Saved" : "Save"}</button>
    </div>
  );
}

export default Rec;
