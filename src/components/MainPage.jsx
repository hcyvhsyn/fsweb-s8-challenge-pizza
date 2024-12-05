import "../styles/MainPage.css";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import Footer from "./Footer";

const MainPage = () => {
  const history = useHistory();

  const handleButtonClick = () => {
    history.push("/order");
  };

  return (
    <>
      <div className="main-page">
        <div className="logo-p-p-button">
          <img
            className="logo"
            src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-1-images/logo.svg"
            alt=""
          />
          <p className="slogane-1">fırsatı kaçırma</p>
          <p className="slogane-2">KOD ACIKTIRIR PİZZA DOYURUR</p>
          <Button className="aciktim" onClick={handleButtonClick}>
            ACIKTIM
          </Button>
        </div>
      </div>
      <div id="menu">
        <div className="menu-item">
          <img
            src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-2-images/icons/1.svg"
            alt=""
          />
          <p>YENI! Kore</p>
        </div>
        <div className="menu-item">
          <img
            src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-2-images/icons/2.svg"
            alt=""
          />
          <p>Pizza</p>
        </div>
        <div className="menu-item">
          <img
            src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-2-images/icons/3.svg"
            alt=""
          />
          <p>Burger</p>
        </div>
        <div className="menu-item">
          <img
            src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-2-images/icons/4.svg"
            alt=""
          />
          <p>Kızartmalar</p>
        </div>
        <div className="menu-item">
          <img
            src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-2-images/icons/5.svg"
            alt=""
          />
          <p>Fast Food</p>
        </div>
        <div className="menu-item">
          <img
            src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-2-images/icons/6.svg"
            alt=""
          />
          <p>Gazlı İçecekler</p>
        </div>
      </div>
      <main style={{ backgroundColor: "#FAF7F2", paddingBottom: "3rem" }}>
        <div className="adds-page">
          <div className="pizza-add">
            <h3>Özel Lezzetus</h3>
            <p>Position: Abolute Acı Burger</p>
            <button>SİPARİŞ VER</button>
          </div>
          <div className="row-add">
            <div className="burger-add">
              <h3>Hackathlon Burger Menü</h3>
              <button>SİPARİŞ VER</button>
            </div>
            <div className="delivery-add">
              <h3>
                <span>Çoooooook</span> hızlı npm gibi kurye
              </h3>
              <button>SİPARİŞ VER</button>
            </div>
          </div>
        </div>
        <div>
          <div className="slogane-part">
            <p className="page-slogane">en çok paketlenen menüler</p>
            <p className="page-slogane-2">
              Acıktıran Kodlara Doyuran Lezzetler
            </p>
          </div>
          <div className="third-part-manu">
            <div className="third-menu-item">
              <img
                src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-2-images/icons/1.svg"
                alt=""
              />
              <p>YENI! Kore</p>
            </div>
            <div className="third-menu-item">
              <img
                src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-2-images/icons/2.svg"
                alt=""
              />
              <p>Pizza</p>
            </div>
            <div className="third-menu-item">
              <img
                src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-2-images/icons/3.svg"
                alt=""
              />
              <p>Burger</p>
            </div>
            <div className="third-menu-item">
              <img
                src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-2-images/icons/4.svg"
                alt=""
              />
              <p>Kızartmalar</p>
            </div>
            <div className="third-menu-item">
              <img
                src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-2-images/icons/5.svg"
                alt=""
              />
              <p>Fast Food</p>
            </div>
            <div className="third-menu-item">
              <img
                src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-2-images/icons/6.svg"
                alt=""
              />
              <p>Gazlı İçecekler</p>
            </div>
          </div>
          <div className="third-part-list">
            <div className="third-main">
              <div className="third-terminal-pizza"></div>
              <p className="name-part">Terminal Pizza</p>
              <div className="price-part">
                <p>4.9</p>
                <p>(200)</p>
                <p>60TL</p>
              </div>
            </div>
            <div className="third-main">
              <div className="third-absolute-pizza"></div>
              <p className="name-part">Position Absolute Acı Pizza</p>
              <div className="price-part">
                <p>4.9</p>
                <p>(928)</p>
                <p>85TL</p>
              </div>
            </div>
            <div className="third-main">
              <div className="third-tavuk-burger"></div>
              <p className="name-part">useEffect Tavuklu Burger</p>
              <div className="price-part">
                <p>4.9</p>
                <p>(462)</p>
                <p>75TL</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
      
    </>
  );
};

export default MainPage;
