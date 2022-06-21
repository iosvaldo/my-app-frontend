import React, {useState, useEffect} from 'react'

function Appointments() {

  const [appointments,setAppointments]= useState([])

  useEffect(()=> {
    fetch('https://localhost:9292/appointments')
    .then(res => res.json())
    .then(data => console.log(data))
  }, [])

  return (
    <div>
      {/* <AppointmentList / > */}
      
    </div>
  )
}

export default Appointments