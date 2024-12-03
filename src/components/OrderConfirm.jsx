import React from "react";
import "../styles/OrderConfirm.css";

function OrderConfirm() {
  return (
    <div className="order-confirm">
      <header>
        <img
          className="logo"
          src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-1-images/logo.svg"
          alt=""
        />
      </header>
      <div className="h2">
        <p className="message">TEBRIKLER! SİPARİŞİNİZ ALINDI</p>
      </div>
    </div>
  );
}

export default OrderConfirm;
