import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalCard from "../modal/modalCard";
import { Route, Link, Routes, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

function PizzaList(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const pizza = props.pizza;
  return (
    <div className="container1 pt-3 pb-3">
      <Card.Title className="p-3 heading-color" key={pizza.cat_id}>
        {pizza.cat_english}
      </Card.Title>
      {console.log(pizza.cat_english)}
      <div>
        <div class="row m-3 pt-4 pb-4" id="list-item-3">
          {pizza.subcategory.map((item) => {
            return (
              // <Link to={`/description/${item.pro_id}`}>
                <div class="col-sm-6 p-1 " data-aos="fade-up" id="list-item-1">
                  <div class="card curve shadow p-0 mb-0 bg-white rounded" onClick={handleShow}>
                    <div class="card-body ">
                      <div className="row">
                        <div className="col-3 " >
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
                              <div
                                className="prize-label button-colors  "
                                key={item.pro_id}
                              >
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
              // </Link>
            );
          })}
        </div>
      </div>
      <Modal className="card shadow" show={show} onHide={handleClose} >
        <Modal.Body >
          <ModalCard pizza={pizza}  />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default PizzaList;
