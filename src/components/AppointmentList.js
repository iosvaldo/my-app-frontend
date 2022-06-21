import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'

function AppointmentList({appointmentType, name, date, addAppointment, appointmentList}) {

  


  return (
    <div>
      <h1>Hello</h1>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Title>Appointment for: {name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{appointmentType}</Card.Subtitle>
        {/* <Card.text >{date}</Card.text> */}
      <Card.Text>
      We are so excited to see you! Please use the link below for directions to the salon.
        </Card.Text>
      <Card.Link href="#">Directions</Card.Link>
      <Card.Link href="#">Another Link</Card.Link>
      
      </Card.Body>
      </Card>
     
      {/* <Card.Header></Card.Header>
        <Card.Body>
        <Card.Title>{appointmentType}</Card.Title>
          <Card.Text>{date}</Card.Text>
          <Card.Text>{name}</Card.Text> */}
        {/* <Button variant="primary">Go somewhere</Button> */}
        {/* </Card.Body>
      <Card.Footer className="text-muted"></Card.Footer>
    </Card> */} 

    </div>
  )
}

export default AppointmentList