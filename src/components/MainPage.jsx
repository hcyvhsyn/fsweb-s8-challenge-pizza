import { Button } from "reactstrap";
import "../styles/MainPage.css";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const MainPage = () => {
  const history = useHistory();

  const handleButtonClick = () => {
    history.push("/order");
  };

  return (
    <div className="main-page">
      <img
        className="brend-name"
        src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-1-images/logo.svg"
        alt=""
      />
      <div className="div-slogane">
        <h2 className="slogane">KOD ACIKTIRIR PİZZA, DOYURUR</h2>
      </div>
      <div className="button">
        <Button
          onClick={handleButtonClick}
          style={{
            backgroundColor: "#FDC913",
            border: "none",
            color: "black",
            fontSize: "1rem",
            padding: "1rem",
          }}
        >
          {" "}
          ACIKTIM{" "}
        </Button>
      </div>
    </div>
  );
};

export default MainPage;
