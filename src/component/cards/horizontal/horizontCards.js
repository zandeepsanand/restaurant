import React, { useEffect, useState } from "react";

import axios from "../../Axios";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../../styles/horizontal.css";
import "../../../styles/navigation.css";

export default function HorizontCards() {
  const [cards, setCard] = useState("");

  const fetchCardItem = async () => {
    const data = await fetch(`http://qrorder.co.in/Jarjeer/public/api/alldata`);
    // console.log(data);

    const jsonData = await data.json();
    // setPizza(jsonData);

    setCard(jsonData.data);
  };

  useEffect(() => {
    fetchCardItem();
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div class="row flex-nowrap overflow d-flex justify-content-center mb-5">
        {cards
          ? cards.map((card, index) => {
              return (
                <>
                  <div class="col-4 col-lg-2 col-sm-2 col-md-2">
                    <p class="card-text p-1" key={card.cat_id}>{card.cat_english}</p>
                    <a class="link" href="#list-item-1">
                    {/* {card.subcategory.map((item) => {
                                return (
                                  <img
                                    className="card-img-top"
                                    src={item.pro_image}
                                    alt="Card image cap"
                                  />
                                );
                              })} */}
                              <img
                                    className="card-img-top"
                                    src="images/4.jpg"
                                    alt="Card image cap"
                                  />
                    
                    </a>
                  </div>
                  {/* <div class="col-4 col-lg-2 col-sm-2 col-md-2">
                    <p class="card-text">Burger</p>
                    <a class="link" href="#list-item-2">
                      <img
                        class="card-img-top"
                        src="images/3.jpg"
                        alt="Card image cap"
                      />
                    </a>
                  </div>
                  <div class="col-4 col-lg-2 col-sm-2 col-md-2">
                    <p class="card-text">Drinks</p>
                    <a class="link" href="#list-item-3">
                      <img
                        class="card-img-top"
                        src="images/4.jpg"
                        alt="Card image cap"
                      />
                    </a>
                  </div>
                  <div class="col-4 col-lg-2 col-sm-2 col-md-2">
                    <p class="card-text">pizza</p>
                    <a class="link" href="#list-item-4">
                      <img
                        class="card-img-top"
                        src="images/5.jpg"
                        alt="Card image cap"
                      />
                    </a>
                  </div>
                  <div class="col-4 col-lg-2 col-sm-2 col-md-2">
                    <p class="card-text">Drinks</p>
                    <a class="link" href="#list-item-5">
                      <img
                        class="card-img-top"
                        src="images/6.jpg"
                        alt="Card image cap"
                      />
                    </a>
                  </div>
                  <div class="col-4 col-lg-2 col-sm-2 col-md-2">
                    <p class="card-text">pizza</p>
                    <a class="link" href="#list-item-6">
                      <img
                        class="card-img-top"
                        src="images/3.jpg"
                        alt="Card image cap"
                      />
                    </a>
                  </div>
                  <div class="col-4 col-lg-2 col-sm-2 col-md-2">
                    <p class="card-text">pizza</p>
                    <a class="link" href="#list-item-4">
                      <img
                        class="card-img-top"
                        src="images/4.jpg"
                        alt="Card image cap"
                      />
                    </a>
                  </div> */}
                </>
              );
            })
          : ""}
      </div>
    </>
  );
}
