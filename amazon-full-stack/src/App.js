import { useEffect } from 'react';
import './App.css';
import Header from './Header/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { auth } from './firebase';
import { useStateValue } from './StateProvider'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import Home from './Home/Home'
import Checkout from './Checkout/Checkout'
import Login from './Login/Login'
import Payment from './Payment/Payment'

const promise = loadStripe(
  "pk_test_51ILY4bBz8rn4agnZFH9QFpJ5J4uzdX63U2Oxmdo69L5v4tbPJsa8LUgbomov6FYgjgg4mPhJUYJMsY229OSwQwZd00GqjHhJQZ"
)

function App() {
  const [{}, dispatch] = useStateValue() // useContext(StateContext)

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('O usuário é: ', authUser)

      if(authUser) {
        // o usuário fez log in / já estava logado
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // o usuário fez log out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
