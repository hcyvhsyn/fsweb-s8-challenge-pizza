import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import MainPage from './components/MainPage'
import OrderPage from './components/OrderPage'; 

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
      </Switch>
    </Router>

    </>
  )
}

export default App
