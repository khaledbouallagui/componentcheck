import React from 'react';
import { Button, from, fromControl, Nav, Navbar, NavDropdown } from 'bootstrap'

const Navigation = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">Navbar Scroll</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll"/>
      <Navbar.Collapse id ="NavbarScroll">
      <
      className="mr-auto my-2 my-lg-0"
      style={{maxHeight:'100px'}}
      NavbarScroll
      >

      <Nav.Link href="#" disabled>
      Link
    </Nav.Link> 
    </Nav>
      <from className="d-flex">
      <formControl
      type="search"
      placeholder="search"
      className="mr-2"
      aria-label="search"
      />
      <Button variant="outline-success">Search</Button>
      </<form>
          
      </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation;
 