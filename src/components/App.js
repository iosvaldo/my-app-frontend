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

  useEffect(() => {
    fetch('http://localhost:9292/services')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const serviceList = services.map((service) => 
  <Services 
  id={service.id}
  key={service.id}
  haircut={service.id[1]}
  manicure={service.id[2]}
  pedicure={service.id[3]}
  mensHaircut={service.id[4]}
  colorTreatment={service.id[5]}
  />  )



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
