import React from "react";
import "../../../styles/horizontal.css";
import "../../../styles/navigation.css";


export default function HorizontCards() {
  return (
    <div class="row flex-nowrap overflow d-flex justify-content-center mb-5">
      
      <div class="col-4 col-lg-2 col-sm-2 col-md-2">
        <p class="card-text">pizza</p>
        <a class="link" href="#list-item-1">
           
          
        <img class="card-img-top" src="images/2.jpg" alt="Card image cap" /></a>
      </div>
      <div class="col-4 col-lg-2 col-sm-2 col-md-2">
        <p class="card-text">Burger</p>
        <a class="link" href="#list-item-2">
        <img class="card-img-top" src="images/3.jpg" alt="Card image cap" /></a>
      </div>
      
      <div class="col-4 col-lg-2 col-sm-2 col-md-2">
        <p class="card-text">Drinks</p>
        <a class="link" href="#list-item-3">
        <img class="card-img-top" src="images/4.jpg" alt="Card image cap" /></a>
      </div>
      <div class="col-4 col-lg-2 col-sm-2 col-md-2">
        <p class="card-text">pizza</p>
        <a class="link" href="#list-item-4">
        <img class="card-img-top" src="images/5.jpg" alt="Card image cap" /></a>
      </div>
      <div class="col-4 col-lg-2 col-sm-2 col-md-2">
        <p class="card-text">Drinks</p>
        <a class="link" href="#list-item-5">
        <img class="card-img-top" src="images/6.jpg" alt="Card image cap" /></a>
      </div>
      <div class="col-4 col-lg-2 col-sm-2 col-md-2">
        <p class="card-text">pizza</p>
        <a class="link" href="#list-item-6">
        <img class="card-img-top" src="images/3.jpg" alt="Card image cap" /></a>
      </div>
      <div class="col-4 col-lg-2 col-sm-2 col-md-2">
        <p class="card-text">pizza</p>
        <a class="link" href="#list-item-4">
        <img class="card-img-top" src="images/4.jpg" alt="Card image cap" /></a>
      </div>
      
    </div>
  );
}
