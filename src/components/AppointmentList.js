import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import NewForm from './NewForm'
import Button from 'react-bootstrap/Button';

function AppointmentList({appointmentType, name, deleteItem, date, appointmentList}) {

  // function handleDelete(id){
  //   fetch(`http://localhost:9292/appointments/${id}`, {
  //     method: "DELETE"
  //   })
  //   .then(deleteItem(id))
  // }

  return (
    <div>
  
      <Card style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Title>Appointment for: {name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{appointmentType}</Card.Subtitle>
      <Card.Text>
      We are so excited to see you! Please use the link below for directions to the salon.
        </Card.Text>
      <Card.Link href="#">Directions</Card.Link>
      <button class="button-2">Edit</button> 
      <button > 🗑️  </button>
      {/* onClick={handleDelete}> */}
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