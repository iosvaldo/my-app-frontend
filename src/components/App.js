import React, {useEffect, useState} from 'react';
import '../App.css';
import Services from './Services';
import Home   from './Home'
import Navigate from './Navigate';
import Appointments from './Appointments'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NewForm from './NewForm';



function App() {


  return (
    <Router>
      <div className="header">
        <Navigate className="App-header"/>
        <header >
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/appointments">
                <Appointments />
              </Route>
              <Route exact path="/services">
                <Services />
              </Route>
              <Route exact path="/form">
                <NewForm />
              </Route>
            </Switch>
        </header>
      </div>
    </Router>
     
  );
}

export default App;
