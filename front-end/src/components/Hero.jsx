import React from "react";

function Hero(){
    return (
        <>
        <div className="container col-xxl-8 px-4 " >
    <div className="row flex-lg-row-reverse align-items-center g-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="images/food.jpg" className="d-block mx-lg-auto img-fluid" alt="Food Bowl Photo" width="400" height="400" />
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold lh-1 mb-3">Discover your next favorite recipe!</h1>
        <p className="lead">Home-made meals made easy.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        </div>
      </div>
    </div>
  </div>
  </>
    );
}

export default Hero;