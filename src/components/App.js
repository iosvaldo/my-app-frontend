import React from 'react';
import '../App.css';
import Services from './Services';
import Home   from './Home'
import Navigate from './Navigate';
import Appointments from './Appointments'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Navigate className="App-header"/>
        <header >
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/appointments">
                <Appointments />
              </Route>
              <Route exact path="/form">
                <Appointments />
              </Route>
              <Route exact path="/services">
                <Services />
              </Route>
            </Switch>
        </header>
      </div>
    </Router>
     
  );
}

export default App;
