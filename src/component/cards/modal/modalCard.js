import Card from "react-bootstrap/Card";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function ModalCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
        <div className='container2'>
        <div className="card mt-4 shadow">
          <button className='back-button'>
          <i class="fa-solid fa-arrow-left-long"  ></i>
          <Modal.Header closeButton>
          
          </Modal.Header>
        
          </button>
            <img
              class="card-img-top modal-image img-fluid p-0"
              src="images/modal.jpg"
              alt="Card image cap"
            />
           
            <div class="card-body p-0 overflow-auto scroll">
              
              <h5 class="modal-header justify-content-center  text-center p-1 mt-5 mb-3">
                Card title
              </h5>
              <p class="card-text card-details1 text-left p-1 m-1">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <h5 class="modal-header1 justify-content-center  text-center p-1 mt-5 mb-3">
                Choose Amount
              </h5>
              <div className="d-flex justify-content-center">
              <i class="fa-solid fa-minus m-1"></i>
              <i class="fa-solid fa-1 m-1"></i>
              <i class="fa-solid fa-plus m-1"></i>
              </div>
             
              <h5 class="modal-header1 justify-content-center  text-center p-1 mt-5 mb-3">
                Addons
              </h5>
              <p class="card-text card-details1 justify-content-left p-1 m-1 ml-2">
                Extra Meat
              </p>
              <p class="card-text card-details1 justify-content-left p-1 m-1 ml-2">
                Extra Cheese
              </p>
              <h5 class="modal-header1 justify-content-center  text-center p-1 mt-5 mb-3">
                Custamization
              </h5>
              <p class="card-text card-details1 justify-content-left p-1 m-1">
                Without cheese
              </p>
              <p class="card-text card-details1 justify-content-left p-1 m-1">
                Without Tomato
              </p>
              <p class="card-text card-details1 justify-content-left p-1 m-1 mb-5">
                Without Sauce
              </p>

              <div className='button-block justify-content-center p-3'>
              <div className='modal-btn btn-color p-3 '>
                <div className="modal-v-button pr-3">Add </div>
              </div>
              </div>
             
             
            </div>
          </div>
        </div>
    </div>
  )
}
