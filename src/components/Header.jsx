import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Service JC</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">list barang</Nav.Link>
            <Button variant="outline-success position-relative" style={{left:'850px'}}>Masuk</Button>
          </Nav>
        </Container>
      </Navbar>
      </>
  );
}

export default Header;