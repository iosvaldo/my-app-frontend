import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import NewForm from './NewForm'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AppointmentList({id, name, deleteItem, date}) {
  const [likes, setLikes] = useState (0)

  function handleLike(liked) {
    const updatedLikes = likes.map((like) => {
      if (like.id == liked.id ) {
        return liked; } 
        else {
          return like;
        }
    });
    setLikes(updatedLikes)
  }

  function handleClick(e) {
    e.preventDefault()
    setLikes(updatedLikes => updatedLikes+1)
    fetch(`http://localhost:9292/appointments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: likes+1,
      }),
    })
      .then((r) => r.json())
      .then((updatedLikes) => handleLike(updatedLikes));
  }


  function handleDeleteClick(){
    fetch(`http://localhost:9292/appointments/${id}`,{
      method: 'DELETE'
    })
    .then(deleteItem(id))
  }

  return (
    <div className="all-cards">
      <Card className="card-container" style={{ width: '18rem' }}>
        <Card.Body >
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">Appointment: {date}</Card.Subtitle>
          <Card.Text>We are excited to see you!</Card.Text> 
          <Button variant="danger" onClick={handleClick}>♡ {likes}</Button>  
          <Button className="button-2"  variant="warning" onClick={handleDeleteClick}>🗑️</Button> 
        </Card.Body>
      </Card>
    </div>
  )
}

export default AppointmentList