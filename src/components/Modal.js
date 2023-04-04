import React from "react";


function OrderConfirmationModal() {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button> X </button>
        </div>
        <div className="title">
          <h1> Order Confirmation</h1>
        </div>
        <div className="body">
          <p>Order Confirmed. Enjoy your Pizza!</p>
        </div>
        <div className="footer">
          <button>Back to Order Page</button>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmationModal;
