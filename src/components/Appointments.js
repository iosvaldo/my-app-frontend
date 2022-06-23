import React, {useState, useEffect} from 'react'
import AppointmentList from './AppointmentList'
import NewForm from './NewForm';

function Appointments({name}) {
  const [appointments,setAppointments]= useState([])
  const [services, setServices] = useState([])

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

  // const serviceList = services.map((service) =>(
  //    <AppointmentList key={service.id} service={service.appointment_type} />))

  const appointmentList = appointments.map((appointment) => (
    <AppointmentList 
    id = {appointment.id}
    key = {appointment.id}
    name = {appointment.username}
    // appointmentType = {appointment.service.service}
    date = {appointment.date}
    deleteItem={handleDelete}
    />
  ))
 

  return (
    <div>
      
      <br></br>
       <NewForm addAppointment = {addAppointment}/>
       {appointmentList}
    </div>
  )
}

export default Appointments