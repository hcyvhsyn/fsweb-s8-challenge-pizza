import React from "react";
import "../styles/OrderConfirm.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function OrderConfirm() {
  const location = useLocation();
  const { size, crust, toppings, total, toppingsTotal } = location.state || {};

  return (
    <div className="order-confirm">
      <header className="successHeader">
        <img
          style={{ width: "20rem" }}
          className="logo"
          src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-1-images/logo.svg"
          alt=""
        />
        <p
          style={{ fontFamily: "Satisfy", color: "#FDC913", fontSize: "2rem" }}
        >
          lezzetin yolda
        </p>
        <p
          style={{ fontFamily: "Barlow", fontSize: "5rem", fontWeight: "100" , color:"white"}}
        >
          SİPARİŞ ALINDI
        </p>
        <hr />
      </header>
      <main>
        <p className="pizza-ismi" style={{ color: "white" }}>
          Position Absolute Acı Pizza
        </p>
        <div>
          <p className="type">
            Boyut: <span className="result">{size}</span>
          </p>
          <p className="type">
            Hamur: <span className="result">{crust}</span>{" "}
          </p>
          <p className="type">
            Ek Malzemeler: <span className="result">{toppings.join(", ")}</span>
          </p>
        </div>
        <div className="final-price">
          <p style={{ fontSize: "1.4rem" }} className="result">
            Sipariş Toplamı{" "}
          </p>
          <p className="result">
            Seçimler <span style={{ paddingLeft: "1rem" }}>{toppingsTotal}</span>
          </p>
          <p className="result">
            Toplam <span style={{ paddingLeft: "1rem" }}>{total}</span>
          </p>
        </div>
      </main>
    </div>
  );
}

export default OrderConfirm;
