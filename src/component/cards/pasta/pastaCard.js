import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalCard from "../modal/modalCard";

export default function PastaCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Card.Title className="p-3 heading-color">PASTA</Card.Title>
      <div className="container1">
        <div class="row m-3" id="list-item-4">
          <div class="col-sm-6 p-1" id="list-item-1" onClick={handleShow}>
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
          <div class="col-sm-6 p-1 " onClick={handleShow}>
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
          <div class="col-sm-6 p-1" onClick={handleShow}>
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
      </div>
      <Modal className="card shadow" show={show} onHide={handleClose}>
        <Modal.Body>
          <ModalCard />
        </Modal.Body>
      </Modal>
    </div>
  );
}
