import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import MainPage from './components/MainPage'
import OrderPage from './components/OrderPage'; 
import OrderConfirm from './components/OrderConfirm';

function App() {

  return (
    <>

    <Router>
      <Switch>
        <Route  exact path="/main">
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
  )
}

export default App
