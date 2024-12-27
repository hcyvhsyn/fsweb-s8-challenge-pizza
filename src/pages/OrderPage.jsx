import {
  Button,
  InputGroup,
  InputGroupText,
  Input,
  Card,
  CardBody,
  CardTitle,
  Container,
} from "reactstrap";

import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import Footer from "../components/Footer";
import "../styles/OrderPage.css"; 

const OrderPage = () => {
  const [malzemeSecimi, setMalzemeSecimi] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const pizzaPrice = 85.5;
  const extraPrice = 5;

  const calculateTotal = () => {
    const basePrice = pizzaPrice + malzemeSecimi.length * extraPrice;
    return basePrice * quantity;
  };

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      if (malzemeSecimi.length < 10) {
        setMalzemeSecimi([...malzemeSecimi, value]);
      } else {
        alert("En fazla 10 malzeme seçebilirsiniz.");
      }
    } else {
      setMalzemeSecimi(malzemeSecimi.filter((item) => item !== value));
    }
  };

  const history = useHistory();

  const handleButtonClick = () => {
    if (malzemeSecimi.length < 4) {
      alert("En az 4 malzeme seçmelisiniz.");
      return;
    }

    const selectedSize = document.querySelector('input[name="pass"]:checked');
    if (!selectedSize) {
      alert("Lütfen pizza boyutunu seçin.");
      return;
    }
    const pizzaSize = selectedSize.value;

    const pizzaCrust = document.getElementById("pizza").value;
    if (!pizzaCrust) {
      alert("Lütfen hamur kalınlığını seçin.");
      return;
    }

    history.push({
      pathname: "/success",
      state: {
        size: pizzaSize,
        crust: pizzaCrust,
        toppings: malzemeSecimi,
        total: calculateTotal().toFixed(2),
        toppingsTotal: (malzemeSecimi.length * extraPrice).toFixed(2),
      },
    });
  };

  return (
    <div className="flex flex-col items">
      <header className="order-header">
        <div className="logo">
          <img
            src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-1-images/logo.svg"
            alt=""
          />
        </div>

        <img
          className="header-banner"
          src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/pictures/form-banner.png?raw=true"
          alt=""
        />

        <nav>
          <Link to="/main">Ana Sayfa-</Link>
          <Link to="/">Seçenekler-</Link>
          <Link style={{color:"red"}} to="/order">Sipariş Oluştur</Link>
        </nav>
      </header>

      <div className="all">
        <p className="pizza-name">Position Absolute Acı Pizza</p>
        <div className="price">
          <p className="price-tl">85,50 ₺</p>
          <p>4,90</p>
          <p>(200)</p>
        </div>
        <p className="about-pizza">
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış; daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir. - Küçük bir pizzaya bazen pizzetta denir.
        </p>
        <div className="selector">
          <div className="select-size">
            <p>
              Boyut Seç <span style={{ color: "red" }}>*</span>
            </p>
            <div className="labellar">
              <label className="custom-radio">
                <input type="radio" name="pass" value="Küçük" />
                <span className="harf">K</span>
              </label>
              <label className="custom-radio">
                <input type="radio" name="pass" value="Orta" />
                <span className="harf">O</span>
              </label>
              <label className="custom-radio">
                <input type="radio" name="pass" value="Büyük" />
                <span className="harf">B</span>
              </label>
            </div>
          </div>
          <div className="select-type">
            <p>
              Hamur Seç<span style={{ color: "red" }}>*</span>
            </p>
            <select className="hamurSecimi" name="pizza" id="pizza">
              <option value="" disabled selected>
                Hamur Kalınlığı Seç
              </option>
              <option value="ince">İnce</option>
              <option value="orta">Orta</option>
              <option value="kalin">Kalın</option>
            </select>
          </div>
        </div>

        <div className="extra">
          <p>Ek Malzemeler</p>
          <p style={{fontWeight:"200"}}>En Fazla 10 malzeme seçebilirsin. 5TL</p>
          <div className="choice">
            <div className="column">
              <label>
                <input
                  type="checkbox"
                  value="Pepperoni"
                  onChange={handleChange}
                  checked={malzemeSecimi.includes("Pepperoni")}
                />{" "}
                Pepperoni
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Sosis"
                  onChange={handleChange}
                  checked={malzemeSecimi.includes("Sosis")}
                />{" "}
                Sosis
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Kanada Jambonu"
                  onChange={handleChange}
                  checked={malzemeSecimi.includes("Kanada Jambonu")}
                />{" "}
                Kanada Jambonu
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Tavuk Izgara"
                  onChange={handleChange}
                  checked={malzemeSecimi.includes("Tavuk Izgara")}
                />{" "}
                Tavuk Izgara
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Soğan"
                  onChange={handleChange}
                  checked={malzemeSecimi.includes("Soğan")}
                />{" "}
                Soğan
              </label>
              </div>
              <div class="column">
              <label>
                <input
                  type="checkbox"
                  value="Domates"
                  onChange={handleChange}
                  checked={malzemeSecimi.includes("Domates")}
                />{" "}
                Domates
              </label>
            
            
              <label>
                <input
                  type="checkbox"
                  value="Mısır"
                  onChange={handleChange}
                  checked={malzemeSecimi.includes("Mısır")}
                />{" "}
                Mısır
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Sucuk"
                  onChange={handleChange}
                  checked={malzemeSecimi.includes("Sucuk")}
                />{" "}
                Sucuk
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Jalapeno"
                  onChange={handleChange}
                  checked={malzemeSecimi.includes("Jalapeno")}
                />{" "}
                Jalapeno
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Sarımsak"
                  onChange={handleChange}
                  checked={malzemeSecimi.includes("Sarımsak")}
                />{" "}
                Sarımsak
              </label>
              </div>
              <div class="column">
              <label>
                <input
                  type="checkbox"
                  value="Biber"
                  onChange={handleChange}
                  checked={malzemeSecimi.includes("Biber")}
                />{" "}
                Biber
              </label>

              <label>
                <input
                  type="checkbox"
                  value="Kekik"
                  onChange={handleChange}
                  checked={malzemeSecimi.includes("Kekik")}
                />{" "}
                Kekik
              </label>
            
            
              <label>
                <input
                  type="checkbox"
                  value="Ananas"
                  onChange={handleChange}
                  checked={malzemeSecimi.includes("Ananas")}
                />{" "}
                Ananas
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Kabak"
                  onChange={handleChange}
                  checked={malzemeSecimi.includes("Kabak")}
                />{" "}
                Kabak
              </label>
            </div>
          </div>
        </div>

        <div>
          <input type="name" placeholder="Isminizi yaziniz" />
        </div>

        <div className="order-note">
          <p>Sipariş Notu</p>
          <textarea
            className="textarea"
            name="orderNote"
            id="orderNote"
            placeholder="Siparişine eklemek istediğin bır not var mı?"
          ></textarea>
        </div>

        <div className="last-part">
          <InputGroup className="w-25">
            <Button color="warning" onClick={decrement}>
              -
            </Button>
            <InputGroupText>{quantity}</InputGroupText>
            <Button color="warning" onClick={increment}>
              +
            </Button>
          </InputGroup>

          <Card
            className="shadow-sm"
            style={{ width: "18rem", margin: "1rem auto" }}
          >
            <CardBody>
              <CardTitle tag="h5" className="fw-bold">
                Sipariş Toplamı
              </CardTitle>
              <div className="d-flex justify-content-between mb-3">
                <span>Seçimler</span>
                <span>{(malzemeSecimi.length * extraPrice).toFixed(2)}₺</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span className="text-danger">Toplam</span>
                <span className="text-danger fw-bold">
                  {calculateTotal().toFixed(2)}₺
                </span>
              </div>
              <Button
                onClick={handleButtonClick}
                className=" custom-button w-100 fw-bold text-white"
              >
                SİPARİŞ VER
              </Button>
            </CardBody>
          </Card>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default OrderPage;
