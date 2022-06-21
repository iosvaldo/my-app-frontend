import React, {useState, useEffect} from 'react'
import AppointmentList from './AppointmentList'
import NewForm from './NewForm';

function Appointments() {

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
    key = {appointment.id}
    name = {appointment.username}
    appointmentType = {appointment.appointment_type}
    date = {appointment.date}
    deleteItem={handleDelete}
    />
  ))

  return (
    <div>
      {appointmentList}
      {/* <AppointmentList appointmentList = {appointmentList} /> */}
    <NewForm addAppointment = {addAppointment}/>
    </div>
  )
}

export default Appointments