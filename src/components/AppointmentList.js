import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import NewForm from './NewForm'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function AppointmentList({appointmentType,id, name, deleteItem, date, appointments}) {

  

  const [editAppointment, setEditAppointment] = useState([]);
 
  const [likes, setLikes] = useState (0)

  //  function handleClick(e) {
  //   setLikes(likes => likes+1)
  // }


  function handleClick(e) {
    setLikes(likes => likes+1)
    fetch(`http://localhost:9292/appointments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
      }),
    })
      .then((updatedLikes) => console.log(updatedLikes));
  }

  function handleDeleteClick(){
    fetch(`http://localhost:9292/appointments/${id}`,{
      method: 'DELETE'
    })
    .then(deleteItem(id))
  }

  // const appointmentType = services.map(service => service.appointment_type)

  return (
    <div>
      <Card className="card-container" style={{ width: '18rem' }}>
        <Card.Body >
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
          <Card.Text>We are so excited to see you!</Card.Text> 
          <Button variant="danger" onClick={handleClick}>♡ {likes}</Button>  
          <Button class="button-2"  variant="warning" onClick={handleDeleteClick}>🗑️</Button> 
    
        </Card.Body>
      </Card>
      
      
    </div>
  )
}

export default AppointmentList