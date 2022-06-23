import React, {useEffect, useState} from 'react';
import '../App.css';
import Services from './Services';
import Home   from './Home'
import Navigate from './Navigate';
import Appointments from './Appointments'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NewForm from './NewForm';



function App() {
const [services, setServices] = useState([])

  // useEffect(() => {
  //   fetch('http://localhost:9292/services')
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

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
                <NewForm />
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
