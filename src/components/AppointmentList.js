import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'

function AppointmentList({appointmentType, name, date}) {



  return (
    <div>
      <h1>Testing</h1>
      <Card className="text-center">
      <Card.Header>Your Appointment</Card.Header>
        <Card.Body>
        <Card.Title>{name}</Card.Title>
          <Card.Text>{date}</Card.Text>
          <Card.Text></Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      <Card.Footer className="text-muted">{appointmentType}</Card.Footer>
    </Card>
    </div>
  )
}

export default AppointmentList