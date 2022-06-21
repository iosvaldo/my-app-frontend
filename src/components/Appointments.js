import React, {useState, useEffect} from 'react'
import AppointmentList from './AppointmentList'
import Form from './Form';

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

  const appointmentList = appointments.map((appointment) => (
    <AppointmentList 
    key = {appointment.id}
    name = {appointment.username}
    appointmentType = {appointment.appointment_type}
    date = {appointment.date}
    addAppointment = {addAppointment}
    />
  ))

  return (
    <div>
      {appointmentList}
      {/* <AppointmentList appointmentList = {appointmentList} /> */}
    <Form appointmentList = {appointmentList}/>
    </div>
  )
}

export default Appointments