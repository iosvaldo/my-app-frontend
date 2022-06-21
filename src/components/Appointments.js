import React, {useState, useEffect} from 'react'
import AppointmentList from './AppointmentList'

function Appointments({name}) {

  const [appointments,setAppointments]= useState([])

  useEffect(() => {
    fetch('http://localhost:9292/appointments')
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);

  const appointmentList = appointments.map((appointment) => (
    <AppointmentList 
    key = {appointment.id}
    name = {appointment.username}
    appointmentType = {appointment.appointment_type}
    date = {appointment.date}
    />
  ))

  return (
    <div>
      <h1>home</h1>
      <AppointmentList name={name}/>
      {/* <AppointmentList appointmentList = {appointmentList} /> */}
    
    </div>
  )
}

export default Appointments