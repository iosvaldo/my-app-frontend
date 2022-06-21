import React, {useState} from 'react'
import Appointments from './Appointments'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function NewForm( {appointmentList, addAppointment} ) {
  const [formData, setFormData] = useState({
    username: "",
    date: "",
    appointment_type: "",
    time: "",
  })

  function handleOnChange(e){
    const { name, value } = e.target
    setFormData((formData) => ({ ...formData, [name]:value }))
  } 

  function handleSubmit(e){
    e.preventDefault()
    console.log(formData)
    fetch("http://localhost:9292/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newAppointment) => addAppointment(newAppointment)
      );
  };

  return (
    <div>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name:</Form.Label>
        <Form.Control onChange={handleOnChange} name="username" type="text"  placeholder="Enter your full name here" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Date</Form.Label>
        <Form.Control onChange={handleOnChange} name="date" as="textarea" rows={1} />
      </Form.Group>
      <Form.Select onChange={handleOnChange} name="appointment_type" aria-label="Default select example">
      <option>Services</option>
      <option value="Color Treatmemt">Color Treatment</option>
      <option value="Haircut">Haircut</option>
      <option value="Men's Haircut">Men's Haircut</option>
      <option value="Manicure">Manicure</option>
      <option value="Pedicure">Pedicure</option>
    </Form.Select>
    <br></br>
    <Form.Select onChange={handleOnChange} name="time" value={formData.time} id="time" aria-label="Default select example">
      <option>Appointment Time</option>
      <option value="12:30 pm">12:30 pm</option>
      <option value="1:00 pm">1:00 pm</option>
      <option value="1:30 pm">1:30 pm</option>
      <option value="2:00 pm">2:00 pm</option>
      <option value="2:30 pm">2:30 pm</option>
      <option value="3:00 pm">3:00 pm</option>
      <option value="3:30 pm">3:30 pm</option>
      <option value="4:00 pm">4:00 pm</option>
      <option value="4:30 pm">4:30 pm</option>
      <option value="5:00 pm">5:00 pm</option>
    </Form.Select>
    <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default NewForm