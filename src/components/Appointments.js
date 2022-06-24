import React, {useState, useEffect} from 'react'
import AppointmentList from './AppointmentList'
import NewForm from './NewForm';

function Appointments() {
  const [appointments,setAppointments]= useState([])
  const [likes, setLikes] = useState("100")

  useEffect(() => {
    fetch('http://localhost:9292/appointments')
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);

  // useEffect(() => {
  //   fetch('http://localhost:9292/services')
  //     .then((res) => res.json())
  //     .then((services) => setServices(services));
  // }, []);


  function addAppointment(newData) {
    return setAppointments([...appointments, newData]);
}
  function handleDelete(id){
  const filteredList = appointments.filter((appointment) => appointment.id !== id)
    setAppointments(filteredList)
  }

// function handleUpdateLikes(likes) {

// }

  // const serviceList = services.map((service) =>(
  //    <AppointmentList key={service.id} service={service.appointment_type} />))

  const appointmentList = appointments.map((appointment) => (
    <AppointmentList 
    id = {appointment.id}
    key = {appointment.id}
    name = {appointment.username}
    likes = {likes}
    setLikes = {setLikes}
    // handleUpdateLikes = {handleUpdateLikes}
    // appointmentType = {appointment.service.service}
    date = {appointment.date}
    deleteItem={handleDelete}
    />
  ))
 

  return (
    <div>
      
      <br></br>
       <NewForm addAppointment = {addAppointment} />
       {/* <NewForm addAppointment = {addAppointment} onUpdateLikes ={handleUpdateLikes}/> */}
       <div className='all-cards-again'> {appointmentList}</div>
       
    </div>
  )
}

export default Appointments