import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Images/world_class_logo2.jpg'


function Navigate() {


  // useEffect(() => {
  //   fetch('http://localhost:9292')
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  return (

    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/"><img src={logo} alt="Memes logo" style={{width:100, marginTop: -7}}/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/form">Book Appointment</Nav.Link>
            <Nav.Link href="/appointments">Appointment</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default Navigate