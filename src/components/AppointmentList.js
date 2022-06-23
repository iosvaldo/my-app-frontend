import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import NewForm from './NewForm'
import Button from 'react-bootstrap/Button';

function AppointmentList({appointmentType,id, name, deleteItem, date, appointmentList}) {


  function handleDeleteClick(){
    fetch(`http://localhost:9292/appointments/${id}`,{
      method: 'DELETE'
    })
    .then(deleteItem(id))
  }

  

  return (
    <div>
  
      <Card style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Title>Appointment for: {name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{appointmentType}</Card.Subtitle>
      <Card.Text>
      We are so excited to see you! Please use the link below for directions to the salon.
        </Card.Text>
      <Button class="button-2"  variant="primary">Edit</Button>
        <Button class="button-2"  variant="danger" onClick={handleDeleteClick}>🗑️</Button>
  
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