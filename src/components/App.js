
import '../App.css';
import Navigate from './Navigate';
import Appointments from './Appointments'
import Services from './Services'
import NewForm from './NewForm'
import AppointmentList from './AppointmentList';
// import ‘bootstrap/dist/css/bootstrap.min.css’;


function App() {
  return (
    <div className="App">
      <Navigate />
      <Appointments />
      <Services />
  
    </div>
  );
}

export default App;
