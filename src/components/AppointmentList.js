import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import NewForm from './NewForm'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AppointmentList({appointmentType,id, name, deleteItem, date, appointments}) {

  

  const [editAppointment, setEditAppointment] = useState([]);
 
  const [likes, setLikes] = useState (0)

   function handleClick(e) {
    setLikes(likes => likes+1)
  }


  function updateUser(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/appointments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({

      }),
    })
      .then((userName) => console.log(id));
  }

  function handleDeleteClick(){
    fetch(`http://localhost:9292/appointments/${id}`,{
      method: 'DELETE'
    })
    .then(deleteItem(id))
  }

  return (
    <div>
      <Card style={{ width: '18rem' }}>

        <Card.Body className="card-container">
          <Card.Title>Appointment for: {name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{appointmentType}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
          <Card.Text>We are so excited to see you!.</Card.Text> 
          <Button variant="danger" onClick={handleClick}>♡ {likes}</Button>  
          <Button class="button-2"  variant="warning" onClick={handleDeleteClick}>🗑️</Button> 
          <Button class="button-2"  variant="primary" onClick={updateUser}>Edit</Button> 
        </Card.Body>
      </Card>
      
      
    </div>

  )
}

export default AppointmentList