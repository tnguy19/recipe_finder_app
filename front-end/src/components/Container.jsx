import React from "react";

function Container(props){
    return (
        <div className="col">
    <div className="card" style={{width: "18rem"}}>
  <img src={props.image} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><strong>{props.name}</strong></h5>
    <h6 className="card-title">{props.dishType}</h6>
    <p className="card-text">{props.labels[0]}, {props.labels[1]}, {props.labels[2]}</p>
  </div>
  <ul className="list-group list-group-flush">
  <li className="list-group-item"><b>Cuisine: </b>{props.cuisineType}</li>
    <li className="list-group-item"><b>Calories: </b>{Math.floor(props.calorie)}</li>
    <li className="list-group-item"><b>Time to prep: </b>{props.totalTime === 0 ? 60 : props.totalTime} minutes</li> {/*If API indicate time taken to be zero, assume error and put 60 minutes*/}
  </ul>
  <div className="card-body">
    <a href={props.recipeLink} className="card-link">Recipe Link</a>
  </div>
</div>
  </div>
    );
}

export default Container;