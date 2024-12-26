import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RestauranMenu from "../components/RestauranMenu";
import PopularMeals from "../components/PopularMeals";
import BestPriceMeals from "../components/BestPriceMeals";

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
