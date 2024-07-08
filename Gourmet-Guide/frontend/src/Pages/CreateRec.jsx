import { useState } from "react";
import axios from "axios";
import UseGetUserID from "../hooks/UseGetUserID";
import { useNavigate } from 'react-router-dom';

const CreateRec = () => {
  const userID = UseGetUserID();
 
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: [],
    instructions: "",
    imageUrl: "",
    cookingTime: 0,
    userOwner: userID,
  });

 const navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleIngredientChange = (event, index) => {
    const { value } = event.target;
    const ingredients = [...recipe.ingredients];
    ingredients[index] = value;
    setRecipe({ ...recipe, ingredients });
  };

  const handleAddIngredient = () => {
    const ingredients = [...recipe.ingredients, ""];
    setRecipe({ ...recipe, ingredients });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/recipes",
        { ...recipe }
      
      );
      
      alert("Recipe Created");
      setRecipe({
        name: "",
    ingredients: [],
    instructions: "",
    imageUrl: "",
    cookingTime: 0,
    userOwner: userID,
      })
      navigate('/')
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#414141] p-4">
  <div className="bg-black p-8 rounded-lg shadow-lg w-full max-w-lg">
    <h2 className="text-2xl font-bold text-orange-500 text-center mb-6">Create Recipe</h2>
    <form onSubmit={handleSubmit}>
      <label className="block text-orange-500 text-sm font-bold mb-2" htmlFor="name">
        Name
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline mb-4"
        type="text"
        id="name"
        name="name"
        value={recipe.name}
        onChange={handleChange}
      />
     
      <label className="block text-orange-500 text-sm font-bold mb-2" htmlFor="ingredients">
        Ingredients
      </label>
      {recipe.ingredients.map((ingredient, index) => (
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline mb-2"
          key={index}
          type="text"
          name="ingredients"
          value={ingredient}
          onChange={(event) => handleIngredientChange(event, index)}
        />
      ))}
      <button
        type="button"
        onClick={handleAddIngredient}
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
      >
        Add Ingredient
      </button>
      <label className="block text-orange-500 text-sm font-bold mb-2" htmlFor="instructions">
        Instructions
      </label>
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline mb-4"
        id="instructions"
        name="instructions"
        value={recipe.instructions}
        onChange={handleChange}
      ></textarea>
      <label className="block text-orange-500 text-sm font-bold mb-2" htmlFor="imageUrl">
        Image URL
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline mb-4"
        type="text"
        id="imageUrl"
        name="imageUrl"
        value={recipe.imageUrl}
        onChange={handleChange}
      />
      <label className="block text-orange-500 text-sm font-bold mb-2" htmlFor="cookingTime">
        Cooking Time (minutes)
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline mb-6"
        type="number"
        id="cookingTime"
        name="cookingTime"
        value={recipe.cookingTime}
        onChange={handleChange}
      />
      <button
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Create Recipe
      </button>
    </form>
  </div>
</div>

  );
};
export default CreateRec