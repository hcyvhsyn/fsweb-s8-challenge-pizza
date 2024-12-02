import { Button } from 'reactstrap';
import "../styles/MainPage.css";
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const MainPage = () => {

    const history = useHistory(); 

    const handleButtonClick = () => {
      history.push('/order'); 
    };



  return (
    <div className='main-page'>
        <h1 className="brend-name">Teknolojik Yemekler</h1>
        <div className='h2'>
          <h2 className="slogane">KOD ACIKTIRIR PİZZA, DOYURUR</h2>
        </div>
        <div className='button'>
          <Button onClick={handleButtonClick} style={{ backgroundColor: "#FDC913" , border: "none", color: "black", fontSize: "1rem", padding: "1rem"}}> ACIKTIM </Button>
        </div>
    </div>
  )
}

export default MainPage
