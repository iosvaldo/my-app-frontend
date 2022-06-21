import React, {useState, useEffect} from 'react'

function Appointments() {

  const [appointments,setAppointments]= useState([])

  useEffect(()=> {
    fetch('https://localhost:3000/appointments')
    .then(res => res.json())
    .then(appointments => setAppointments(appointments))
  }, [])

  return (
    <div>

    </div>
  )
}

export default Appointments