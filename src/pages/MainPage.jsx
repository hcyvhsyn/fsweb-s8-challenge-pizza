import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import Header from "../components/MainPage/Header";
import RestauranMenu from "../components/MainPage/RestauranMenu";
import PopularMeals from "../components/mainpage/PopularMeals";
import BestPriceMeals from "../components/mainpage/BestPriceMeals";

const MainPage = () => {
  return (
    <>
      <Header />
      <RestauranMenu />
      <main style={{ backgroundColor: "#FAF7F2", paddingBottom: "3rem" }}>
        <PopularMeals />
        <BestPriceMeals />
      </main>
      <Footer></Footer>
    </>
  );
};

export default MainPage;
