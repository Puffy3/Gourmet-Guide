import React, { useState } from 'react';
import axios from 'axios';

const Search = () => { 

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [i,seti]=useState(false)
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`http://localhost:5000/recipes/savedRecipes/search/${query}`)
       
      // console.log(response.data.result[0])
         seti(true)
    setResults(response.data.result);

      // console.log(results) // Assuming API response has a 'results' array
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error state
     seti(false)
    }
  };
  React.useEffect(() => {
    console.log(results);
    console.log(i)
  }, [results]);
  return (
    <div>
      <div className='flex justify-center my-5 bg-black p-5 w-50 rounded-md'>

      
      <form onSubmit={handleSubmit} className='flex justify-center'>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search..."
          className='w-96 p-3 rounded-lg'
        />
        <button type="submit" className='text-orange-500 mx-5 hover:bg-orange-500 hover:text-black px-4 rounded-md'>Search</button>
      </form>
      </div>
      <ul>
       { i?results.map((recipe) =>(
      //  results.map((recipe) => (
          // <li key={recipe._id}>
          //   <div>
          //     <h2>{recipe.name}</h2>
          //   </div>
          //   <p>{recipe.description}</p>
          //   <img src={recipe.imageUrl} alt={recipe.name} />
          //   <p>Cooking Time: {recipe.cookingTime} minutes</p>
          // </li>

          <div
            key={recipe._id}
            className="bg-black shadow-md rounded-lg overflow-hidden flex max-w-full p-5 my-10 mx-5"
          >
            <div className="flex items-center">
              <img
                className="w-[800px] h-full "
                src={`${recipe.imageUrl}`}
                alt="this is an image"
              />
            </div>
            <div className=" bg-black w-full   p-10">
              <h1 className="text-2xl font-bold text-white">{recipe.name}</h1>
              <p className="text-orange-500 mt-4">Ingredients</p>
              <div className="mt-2 flex gap-3 ">
                {recipe.ingredients.map((ingredient, index) => (
                  <h3 key={index} className="text-lg text-white">
                    {ingredient}
                  </h3>
                ))}
              </div>
              <p className="text-orange-500 mt-4">Instruction</p>
              <p className="mt-4 text-gray-300">{recipe.instructions}</p>
              <p className="text-orange-500 mt-4">Cooking time</p>
              <p className="mt-2 text-gray-300">{recipe.cookingTime} minutes</p>
            </div>
          </div>
        )) :<div>No matching recipe</div>}
         
        
      </ul>
    </div>
  );
};

export default Search;
