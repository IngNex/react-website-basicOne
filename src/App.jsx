import React from 'react';
import GlobalStyle from './globalStyles';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Pages
import Home from './pages/Home';
import SignUp from './pages/SignupPage';
import Pricing from './pages/PricingPage';



function App() {
  return (
    <Router>
      <h1>React Website using Styled Components</h1>
      <GlobalStyle/>

      <Switch>
        <Route path='/' exact component={Home}>Home</Route>
        <Route path='/signup' exact component={SignUp}>SignUp</Route>
        <Route path='/pricing' exact component={Pricing}>Princing</Route>
      </Switch>
    </Router>
  )
}

export default App
