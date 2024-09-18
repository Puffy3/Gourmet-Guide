import axios from "axios";
import { useState } from "react";
import UseGetUserID from "../hooks/UseGetUserID";
import { useEffect } from "react";
 const SavedRec = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const userID = UseGetUserID();

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/recipes/savedRecipes/${userID}`
        );
        
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSavedRecipes();
  }, []);
  return (
    <div>
      <h1 className="text-3xl text-white m-5 font-bold">Saved Recipes</h1>
      <ul>
        {savedRecipes.map((recipe) => (
          // <li key={recipe._id}>
          //   <div>
          //     <h2>{recipe.name}</h2>
          //   </div>
          //   <p>{recipe.description}</p>
          //   <img src={recipe.imageUrl} alt={recipe.name} />
          //   <p>Cooking Time: {recipe.cookingTime} minutes</p>
          // </li>


          <div key={recipe._id} className="bg-black shadow-md rounded-lg overflow-hidden flex max-w-full p-5 my-10 mx-5">
      <div className='flex items-center'>
        <img className="w-[800px] h-full "  src={`${recipe.imageUrl}`} alt="this is an image" />
      </div>
      <div className=" bg-black w-full   p-10">
        <h1 className="text-2xl font-bold text-white">{recipe.name}</h1>
        <p className='text-orange-500 mt-4'>Ingredients</p>
        <div className="mt-2 flex gap-3 ">
          {recipe.ingredients.map((ingredient, index) => (
            <h3 key={index} className="text-lg text-white">{ingredient}</h3>
          ))}
        </div>
        <p className='text-orange-500 mt-4'>Instruction</p>
        <p className="mt-4 text-gray-300">{recipe.instructions}</p>
        <p className='text-orange-500 mt-4'>Cooking time</p>
        <p className="mt-2 text-gray-300">{recipe.cookingTime} minutes</p>
      </div>
      
    </div>
        ))}
      </ul>
    </div>
  );
};

export default SavedRec