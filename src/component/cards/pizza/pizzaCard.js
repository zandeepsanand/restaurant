import React, { useEffect, useState } from "react";

import axios from "../../Axios";
import AOS from "aos";
import "aos/dist/aos.css";

import Card from "react-bootstrap/Card";
const client = axios.create({
  baseURL: "http://qrorder.co.in/Jarjeer/public/api/alldata" 
});

export default function PizzaCard() {
  const [pizzas, setPizza] = useState([]);

  const fetchFoodItem = async () => {
    const data = await fetch(`http://qrorder.co.in/Jarjeer/public/api/alldata`);
    // console.log(data);

    const jsonData = await data.json();
    // setPizza(jsonData);

    setPizza(jsonData.data);
  };

  useEffect(() => {
    fetchFoodItem();
    AOS.init();
    AOS.refresh();
  }, []);

  //   useEffect(() => {

  //     axios.get(`http://qrorder.co.in/Jarjeer/public/api/alldata`).then(res=>{
  //       console.log(res.data);
  //       setPizza(res.data);

  //     }).catch(err=>{
  //       console.log(err)
  //     })

  // }, [])

  return (
    <>
      {pizzas
        ? pizzas.map((pizza, index) => {
            return (
              <div className="container1 pt-3 pb-3">
                <Card.Title className="p-3 heading-color">{pizza.cat_english}</Card.Title>
                <div>
                  <div class="row m-3 pt-4 pb-4" id="list-item-3">
                    <div
                      class="col-sm-6 p-1 "
                      data-aos="fade-up"
                      id="list-item-1"
                    >
                      
                      <div class="card curve shadow p-0 mb-0 bg-white rounded">
                        <div class="card-body ">
                          <div className="row">
                            <div className="col-3 ">
                              {pizza.subcategory.map((item) => {
                                return (
                                  <img
                                    className="card-image"
                                    src={item.pro_image}
                                    alt="sandeep"
                                  />
                                );
                              })}
                            </div>
                            <div className="col-9 ">
                              {pizza.subcategory.map((item) => {
                                return (
                                  <div className="prize-label button-colors  ">
                                    {item.pro_price}
                                    <div className="currency">S.R</div>
                                  </div>
                                );
                              })}

                              {pizza.subcategory.map((item) => {
                                return (
                                  <h5
                                    class="card-title font-size card-heading text-left pl-1"
                                    key={item.pro_id}
                                  >
                                    {item.pro_english}
                                  </h5>
                                );
                              })}

                              {/* <p class="card-details  p-0 m-0 text-left">
                                all white-meat chicken strips. which are breaded
                                and crispy-fried, then served with seasoned
                                fries a...
                              </p> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        : ""}
      {/* <Card.Title className="p-3 heading-color">PIZZA</Card.Title> */}
      {/* <div className="container1">
        <div class="row m-3" id="list-item-3">
          <div class="col-sm-6 p-1" id="list-item-1">
            <div class="card curve shadow p-0 mb-0 bg-white rounded">
              <div class="card-body ">
                <div className="row">
                  <div className="col-3 ">
                    <img
                      className="card-image"
                      src="public/images/1.jpg"
                      alt="sandeep"
                    />
                  </div>
                  <div className="col-9 ">
                    <div className="prize-label button-colors  ">
                      23 <div className="currency">S.R</div>
                    </div>

                    <h5 class="card-title font-size card-heading text-left">
                      Crispy chicken slice
                    </h5>
                    <p class="card-details  p-0 m-0 text-left">
                      all white-meat chicken strips. which are breaded and
                      crispy-fried, then served with seasoned fries a...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 p-1">
            <div class="card curve shadow p-0 mb-0 bg-white rounded">
              <div class="card-body ">
                <div className="row">
                  <div className="col-3 ">
                    <img className="card-image" src="images/1.jpg" alt="pic" />
                  </div>
                  <div className="col-9 ">
                    <div className="prize-label button-colors  ">
                      23 <div className="currency">S.R</div>
                    </div>

                    <h5 class="card-title font-size card-heading text-left">
                      Crispy chicken slice
                    </h5>
                    <p class="card-details  p-0 m-0 text-left">
                      all white-meat chicken strips. which are breaded and
                      crispy-fried, then served with seasoned fries a...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 p-1">
            <div class="card curve shadow p-0 mb-0 bg-white rounded">
              <div class="card-body ">
                <div className="row">
                  <div className="col-3 ">
                    <img className="card-image" src="images/1.jpg" alt="pic" />
                  </div>
                  <div className="col-9 ">
                    <div className="prize-label button-colors  ">
                      23 <div className="currency">S.R</div>
                    </div>

                    <h5 class="card-title font-size card-heading text-left">
                      Crispy chicken slice
                    </h5>
                    <p class="card-details  p-0 m-0 text-left">
                      all white-meat chicken strips. which are breaded and
                      crispy-fried, then served with seasoned fries a...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 p-1">
            <div class="card curve shadow p-0 mb-0 bg-white rounded">
              <div class="card-body ">
                <div className="row">
                  <div className="col-3 ">
                    <img className="card-image" src="images/1.jpg" alt="pic" />
                  </div>
                  <div className="col-9 ">
                    <div className="prize-label button-colors  ">
                      23 <div className="currency">S.R</div>
                    </div>

                    <h5 class="card-title font-size card-heading text-left">
                      Crispy chicken slice
                    </h5>
                    <p class="card-details  p-0 m-0 text-left">
                      all white-meat chicken strips. which are breaded and
                      crispy-fried, then served with seasoned fries a...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
