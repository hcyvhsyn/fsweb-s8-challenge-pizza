import { Button, InputGroup, InputGroupText, Input, Card, CardBody, CardTitle, Container } from "reactstrap";
import "../styles/OrderPage.css";
import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const OrderPage = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1)); // 1'in altına düşmesini engeller
  };

  return (
    <div className="order-page">
      <header>
        <h1>Teknolojik Yemekler</h1>

        <nav>
          <Link to = "/main">Ana Sayfa-</Link>
          <Link to = "/">Seçenekler-</Link>
          <Link to = "/order">Sipariş Oluştur</Link>
        </nav>
      </header>
      <Container className="all">
        <p className="pizza-name">Position Absolute Acı Pizza</p>
        <div className="price">
          <p>85,50 TL</p>
          <p>4,90</p>
          <p>(200)</p>
        </div>
        <p className="about-pizza">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fugit
          maxime nostrum aliquid, numquam nemo deleniti ipsum, esse id tempora
          incidunt, molestiae laudantium saepe aspernatur nihil. Cum ullam
          nesciunt inventore.
        </p>
        <div className="selector">
          <div className="select-size">
            <p>Boyut Seç</p>

            <label>
              <input type="radio" name="pass" value="Küçük" /> Küçük
            </label>
            <label>
              <input type="radio" name="pass" value="Orta" /> Orta
            </label>
            <label>
              <input type="radio" name="pass" value="Büyük" /> Büyük
            </label>
          </div>
          <div className="select-type">
            <p>Hamur Seç</p>
            <select name="pizza" id="pizza">
              <option value="" disabled selected>
                Hamur Kalınlığı
              </option>
              <option value="ince">İnce</option>
              <option value="orta">Orta</option>
              <option value="kalin">Kalın</option>
            </select>
          </div>
        </div>

        <div className="extra">
          <p>Ek Malzemeler</p>
          <p>En Fazla 10 malzeme secebilirsiniz. 5TL</p>
          <div className="choice">
            <div className="column">
              <label>
                <input type="checkbox" /> Pepperoni
              </label>
              <label>
                <input type="checkbox" /> Sosis
              </label>
              <label>
                <input type="checkbox" /> Kanada Jambonu
              </label>
              <label>
                <input type="checkbox" /> Tavuk Izgara
              </label>
              <label>
                <input type="checkbox" /> Soğan
              </label>
              <label>
                <input type="checkbox" /> Domates
              </label>
            </div>
            <div class="column">
              <label>
                <input type="checkbox" /> Mısır
              </label>
              <label>
                <input type="checkbox" /> Sucuk
              </label>
              <label>
                <input type="checkbox" /> Jalapeno
              </label>
              <label>
                <input type="checkbox" /> Sarımsak
              </label>
              <label>
                <input type="checkbox" /> Biber
              </label>
              <label>
                <input type="checkbox" /> Kekik
              </label>
            </div>
            <div class="column">
              <label>
                <input type="checkbox" /> Ananas
              </label>
              <label>
                <input type="checkbox" /> Kabak
              </label>
            </div>
          </div>
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
              <span>25.00₺</span>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <span className="text-danger">Toplam</span>
              <span className="text-danger fw-bold">110.50₺</span>
            </div>
            <Button
              color="warning"
              className="w-100 fw-bold text-white"
              style={{ borderRadius: "0.25rem" }}
            >
              SİPARİŞ VER
            </Button>
          </CardBody>
        </Card>
        </div>
      </Container>
    </div>
  );
};

export default OrderPage;
