import React from "react";

function Hero(){
    return (
        <>
        <div className="container col-xxl-8 px-4 " >
    <div className="row flex-lg-row-reverse align-items-center g-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="images/food.jpg" className="d-block mx-lg-auto img-fluid" alt="Food Bowl Photo" width="400" height="400" />
      </div>
      <div className="col-lg-6 d-flex flex-column">
        <h1 className="w-100 display-5 fw-bold lh-1 mb-3">Discover your next favorite recipe!</h1>
        <p className="lead">Home-made meals made easy.</p>
       <form class="w-100 ">
          <div class="form-floating mb-3">
            <input name="recipeName" type="text" class="form-control" id="floatingInput" placeholder="A"/>
            <label for="floatingInput">Recipe Name</label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
  </>
    );
}

export default Hero;