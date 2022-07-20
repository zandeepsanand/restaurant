import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HorizontCards from "../cards/horizontal/horizontCards";
import AppetizerCard from "../cards/appetizers card/appetizerCard";
import NavigationComponent from "../navigation/navigationComponent";

export default function CategoriesRestaurant() {
  return (
    <div className="container1">
    <div className="d-flex justify-content-center ">
      <div className="shadow p-0 mb-5 bg-white rounded">
        <Card className="text-center">
          <Card.Header>
            <div className="d-flex justify-content-between">
              
            <i class="fa-regular fa-clock fa-2x p-2 font-color"></i>
            <div>
            <i class="fa-brands fa-snapchat-square fa-2x p-2"></i>
            <i class="fa-brands fa-instagram-square fa-2x p-2 "></i>
            <i class="fa-brands fa-twitter-square fa-2x p-2"></i>
            </div>
            <i class="fa-brands fa-facebook-f fa-2x p-2"></i>
            
            </div>
          </Card.Header>
        
          <Card.Body>
            <Card.Title className=" heading-color">Categories</Card.Title>
            <div class="container-fluid">
           <HorizontCards/>
           </div>
          
           <AppetizerCard/>
            
          </Card.Body>
         
        </Card>
      </div>
    </div>
    </div>
  );
}
