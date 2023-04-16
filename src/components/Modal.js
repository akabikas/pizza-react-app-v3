import React, { useState } from "react";

function OrderConfirmationModal(props) {
  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="title">
            <h1> Order Confirmation</h1>
          </div>
          <div className="body">
            <p>
              Your order confirmation email is sent. Thank you for your order
              and Enjoy your Pizza!
            </p>
          </div>
          <div className="footer">
            <button onClick={props.onClickOption}>Back to Order Page</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderConfirmationModal;
