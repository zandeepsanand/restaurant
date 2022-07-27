import React from "react";
import Card from "react-bootstrap/Card";

export default function DrinksCard() {
  return (
    <div>
      <Card.Title className="p-3 heading-color">HOT DRINKS</Card.Title>
      <div className="container1">
        <div class="row  m-3 d-flex " id="list-item-7">
          <div className="col-12 col-sm-6 col-lg-6">
            <div className="card mt-4 shadow">
              <img
                class="card-img-top pokkam p-0"
                src="/images/drinks1.jpg"
                alt="Card image cap"
              />
              
              <div class="card-body p-0">
              
                <div className="beverage-button button-colors1  ">
                  23 <div className="currency">S.R</div>
                </div>
                <h5 class="card-title card-heading text-left p-1 ml-1">
                  Card title
                </h5>
                <p class="card-text card-details text-left">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className=" d-flex justify-content-start p-2">
                  <div className="p-1 ">
                    <i class="fa-brands fa-firefox p-2"></i>23
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-3 col-lg-3">
            <div class="card mt-4 curve shadow p-0 mb-0 bg-white rounded">
              <img
                class="card-img-top pokkam1 p-0"
                src="images/beverage1.jpg"
                alt="Card image cap"
              />
              <div class="card-body p-0">
                <div className="beverage-button button-colors1  ">
                  23 <div className="currency">S.R</div>
                </div>
              </div>
              <h5 class="card-title card-heading text-left p-1 m-2">
                Card title
              </h5>
            </div>
          </div>
          <div className="col-6 col-sm-3 col-lg-3">
            <div class="card mt-4 curve shadow p-0 mb-0 bg-white rounded">
              <img
                class="card-img-top pokkam1 p-0"
                src="images/beverage1.jpg"
                alt="Card image cap"
              />
              <div class="card-body p-0">
                <div className="beverage-button button-colors1  ">
                  23 <div className="currency">S.R</div>
                </div>
              </div>
              <h5 class="card-title card-heading text-left p-1 m-2">
                Card title
              </h5>
            </div>
          </div>
          <div className="col-6 col-sm-3 col-lg-3 d-flex ">
            <div class="card mt-4 curve shadow p-0 mb-0 bg-white rounded">
              <img
                class="card-img-top pokkam1 p-0"
                src="images/beverage1.jpg"
                alt="Card image cap"
              />
              <div class="card-body p-0">
                <div className="beverage-button button-colors1  ">
                  23 <div className="currency">S.R</div>
                </div>
              </div>
              <h5 class="card-title card-heading text-left p-1 m-2">
                Card title
              </h5>
            </div>
          </div>
          <div className="col-6 col-sm-3 col-lg-3 d-flex ">
            <div
              class="card mt-4 curve shadow p-0 mb-0 bg-white rounded"
              data-toggle="modal"
              data-target="#exampleModalLong"
            >
              <img
                class="card-img-top pokkam1 p-0"
                src="images/beverage1.jpg"
                alt="Card image cap"
              />
              <div class="card-body p-0">
                <div className="beverage-button button-colors1  ">
                  23 <div className="currency">S.R</div>
                </div>
              </div>
              <h5 class="card-title card-heading text-left p-1 m-2">
                Card title
              </h5>
              <div className="p-1 d-flex justify-content-start">
                <i class="fa-brands fa-firefox p-2"></i>23
                </div>
                
                
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
