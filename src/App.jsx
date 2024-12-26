import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import OrderPage from "./pages/OrderPage";
import OrderConfirm from "./pages/OrderConfirm";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>

          <Route exact path="/order">
            <OrderPage />
          </Route>

          <Route exact path="/success">
            <OrderConfirm />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
