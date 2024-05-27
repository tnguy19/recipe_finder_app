import React, {useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Hero from './Hero';
import Content from './Content';
import axios from 'axios';

function App() {
  const [recipes, setRecipe] = useState([]);

  async function handleSearch(recipeName){
    try {
      const response = await axios.post("http://localhost:5000/", {
        recipe: recipeName
      });
      setRecipe(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error sending POST request:", error);
    }
  }
    
  return (
    <>
     <Header/>
     <Hero onSubmit={handleSearch} recipes={recipes}/>
     <Content recipes={recipes}/>
    </>
  )
}

export default App
