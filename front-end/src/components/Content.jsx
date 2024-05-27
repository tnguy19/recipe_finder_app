import React from 'react';
import Container from './Container';

function Content(props){
    return (
        <>
        <div class="container mt-5 col-xxl-8 px-4">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {props.recipes.map((recipeItem, index) => {
              console.log(recipeItem.recipe.healthLabels.slice(0,3));
              return (
                <Container
                key={index}
                name={recipeItem.recipe.label}
                cuisineType={recipeItem.recipe.cuisineType}
                labels={recipeItem.recipe.healthLabels.slice(0,3)}
                dishType={recipeItem.recipe.dishType}
                image={recipeItem.recipe.image}
                calorie={recipeItem.recipe.calories} 
                totalTime={recipeItem.recipe.totalTime}
                recipeLink={recipeItem.recipe.url}
                />
                    )
            })}
          </div>
        </div>
        </>
    )
}

export default Content;