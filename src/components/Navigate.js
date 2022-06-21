import React, {useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// import ‘bootstrap/dist/css/bootstrap.min.css’;


function Navigate() {
  const {salons, setSalons} = useState("")

  useEffect(() => {
    fetch('http://localhost:9292/appointments')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  // const name = console.log({salon.name})
// const salon = salons.map((salon) => (
//   name = {salon.name}
  // return ())

    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/appointments">Appointment</Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>

    </div>
  
}

export default Navigate