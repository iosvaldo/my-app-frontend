import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import NewForm from './NewForm'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AppointmentList({ id, key, name, deleteItem, service, date, serviceList, appointmentType }) {
  // const [services, setServices] = useState([])

  // useEffect(() => {
  //   fetch('http://localhost:9292/services')
  //     .then((res) => res.json())
  //     .then((services) => setServices(services));
  // }, []);

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
          <Button class="button-2"  variant="danger" onClick={handleDeleteClick}>🗑️</Button> 
        </Card.Body>
      </Card>    
    </div>
  )
}

export default AppointmentList