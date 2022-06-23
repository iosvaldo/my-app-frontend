import React, {useState, useEffect} from 'react'
import AppointmentList from './AppointmentList'
import NewForm from './NewForm';

function Appointments({name}) {
  const [appointments,setAppointments]= useState([])

  useEffect(() => {
    fetch('http://localhost:9292/appointments')
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);

  function addAppointment(newData) {
    return setAppointments([...appointments, newData]);
}
  function handleDelete(id){
  const filteredList = appointments.filter((appointment) => appointment.id !== id)
    setAppointments(filteredList)
  }

  const appointmentList = appointments.map((appointment) => (
    <AppointmentList 
    id = {appointment.id}
    key = {appointment.id}
    name = {appointment.username}
    appointmentType = {appointment.service_id}
    date = {appointment.date}
    deleteItem={handleDelete}
    />
  ))
  console.log(appointmentList)

  return (
    <div>
      
      <br></br>
       <NewForm addAppointment = {addAppointment}/>
       {appointmentList}
    </div>
  )
}

export default Appointments