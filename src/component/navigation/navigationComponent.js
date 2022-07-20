import React from "react";
import "../../styles/navigation.css";
import { useState, useEffect } from "react";

export default function NavigationComponent() {
     // storing this to get the scroll direction
     const [lastScrollTop, setLastScrollTop] = useState(0);
     // the offset of the document.body
    const [bodyOffset, setBodyOffset] = useState(
      document.body.getBoundingClientRect()
    );
     // the vertical direction
    const [scrollY, setScrollY] = useState(bodyOffset.top);
     // the horizontal direction
    const [scrollX, setScrollX] = useState(bodyOffset.left);
     // scroll direction would be either up or down
    const [scrollDirection, setScrollDirection] = useState();
 
    const listener = e => {
      setBodyOffset(document.body.getBoundingClientRect());
      setScrollY(-bodyOffset.top);
      setScrollX(bodyOffset.left);
      setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
      setLastScrollTop(-bodyOffset.top);
    };
 
    useEffect(() => {
      window.addEventListener("scroll", listener);
      return () => {
        window.removeEventListener("scroll", listener);
      };
    });
  return (
    
    <div>
      scrollY,
    scrollX,
    scrollDirection
    
      <div className="container3 fixed-top  " id="navbar-example3">
        <div className="d-flex justify-content-center ">
        <div class="row flex-nowrap navigationflow  ">
        
     
        <div class="col-3 col-lg-3 col-sm-3 col-md-3">
          <a class="link" href="#list-item-1">
            Appetizers
          </a>
        </div>

        
        <div class="col-3 col-lg-3 col-sm-3 col-md-3">
          <a class="link " href="#list-item-2">
            Pizza
          </a>
        </div>
        <div class="col-3 col-lg-3 col-sm-3 col-md-3">
          <a class="link" href="#list-item-3">
            Pasta
          </a>
        </div>
        <div class="col-3 col-lg-3 col-sm-3 col-md-3">
          <a class="link" href="#list-item-4">
            Burgers
          </a>
        </div>
        <div class="col-3 col-lg-3 col-sm-3 col-md-3">
          <a class="link" href="#list-item-5">
            Beverages
          </a>
        </div>
        <div class="col-3 col-lg-3 col-sm-3 col-md-3">
          <a class="link" href="#list-item-6">
            Drinks
          </a>
        </div>
        
        

        
      </div>
        </div>
      
      </div>
      
      

    
    </div>
  );
}
