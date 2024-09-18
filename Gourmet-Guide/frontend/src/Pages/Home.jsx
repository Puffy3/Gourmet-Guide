import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Rec from '../Components/Rec'

function Home() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const u="http://localhost:5000/recipes"
        const response = await axios.get(u)
        setRecipes(response.data)
       
      } catch (error) {
        console.error(error)
      }
    }
    fetchRecipe()
  }, [])


  return (
    <div>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          
          <Rec 
          key={recipe._id}
          func={setRecipes}
            ied={recipe._id}
            url={recipe.imageUrl} 
            name={recipe.name} 
            ing={recipe.ingredients} 
            instructions={recipe.instructions} 
            time={recipe.cookingTime} 
            
          
          />
        ))
      ) : (
        <p>No recipes available</p>
      )}
    </div>
  )
}

export default Home
