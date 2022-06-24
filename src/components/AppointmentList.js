import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import NewForm from './NewForm'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function AppointmentList({appointmentType,id, name, deleteItem, date, appointments,likes,setLikes, handleUpdateLikes}) {


  // useEffect(()=>{
  //   fetch(`http://localhost:9292/appointments/${id}`) 
  //     .then((r)=>r.json())
  //     .then(setLikeArray)
  // }, [])


  // function handleUpdateLikes(updateLikes){
  //   const updateLikes = likeArray.map((appointmentLikes)=>
  //   appointmentLikes.id === updateLikes.id ? updateLikes : appointmentLikes
  //   );
  //   setLikesArray(updateLikes);
  // }

  // function handleClick() {
  //    setLikes(likes => likes+1)
  
  //   fetch(`http://localhost:9292/appointments/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({

  //     }),
  //   })
  //     .then((likes) => setLikes(likes));
  // }


function handleLikes() {
  const updateLikes = {
     likes:likes.id + 1,
     };

  function handleClick(e) {
    setLikes(likes => likes+1)
    fetch(`http://localhost:9292/appointments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: 100
      } ),

      })
      .then((r)=> r.json())
      .then(data => setLikes(data));
      }),


  function handleDeleteClick(){
    fetch(`http://localhost:9292/appointments/${id}`,{
      method: 'DELETE'
    })
    .then(deleteItem(id))
  }

  // const appointmentType = services.map(service => service.appointment_type)

  return (
    <div className="all-cards">
      <Card className="card-container" style={{ width: '18rem' }}>
        <Card.Body >
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
          <Card.Text>We are so excited to see you!</Card.Text> 
          {/* <Button variant="danger" >♡ {likes}</Button>   */}
          <Button variant="danger" onClick={handleLikes}>♡ {likes}</Button>
          <Button class="button-2"  variant="warning" onClick={handleDeleteClick}>🗑️</Button> 
    
        </Card.Body>
      </Card>
      
      
    </div>
  )
}

export default AppointmentList