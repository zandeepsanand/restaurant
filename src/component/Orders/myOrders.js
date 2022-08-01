import React from "react";
import "../../styles/order.css";

export default function Myorders() {
  return (
    <>
      <div className="container2">
        <h5 class="font-color p-3">My Orders</h5>
        <div className="order1 col-12 col-sm-12 col-lg-12 col-md-12">
          <div class="card curve shadow p-0 mb-0 bg-white rounded ">
            <div class="card-body height">
              <div className="row">
                <div className="col-6 ">
                  <div className="order-font text-start ">sandeep</div>
                </div>
                <div className="col-6 ">
                  <div className="p-1 prize-label1 button-colors  ">
                    23 <div className="currency">S.R</div>
                  </div>
                 
                </div>
              
              </div>
            </div>
            <div class="card curve shadow p-0 mb-0 bg-white rounded ">
            <div className="d-flex justify-content-between p-3">
                    <div className="">hi</div>
                    <div className="">hi</div>
                    
                  </div>
                  </div>
          </div>
        </div>
      </div>
    </>
  );
}
