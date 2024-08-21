import React, { useEffect, useState } from 'react';
import Cards from './Cards';

const Home = () => {
  const [recipe, setRecipe] = useState(null); // Store the recipe data

  const getData = async () => {
    try {
      const response = await fetch('https://api.spoonacular.com/recipes/716429/information?apiKey=4906f6e1350b494c8fb46610603ff6ab&includeNutrition=true.');
      const data = await response.json();
      console.log(data);
      setRecipe(data); // Store the fetched recipe data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {recipe ? (
        <Cards data={recipe} /> // Pass the recipe data to the Cards component
      ) : (
        <p>Loading...</p> // Show loading message until data is fetched
      )}
    </div>
  );
};

export default Home;
