import React from "react";
import {Navbar,Nav,NavDropdown,Container,Image} from "react-bootstrap";

const Header = () => {

    return(
        <header>
        <Navbar className="navbar-style" expand="lg">    
        {/* <Container> */}
        <Navbar.Brand href="#">
        <Image  src="images/vtu-logo.jpg" alt="VTU" className="logo-img-style" roundedCircle />
        <h6 className="logo-txt-style"> Visvesvaraya Technological University, Belagavi</h6>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="nav-align-style">
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">About us</Nav.Link>
        <NavDropdown title="Academic" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Admission</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Circular & Notification</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Certificate Issued</NavDropdown.Item>
          </ NavDropdown>

          <NavDropdown title="Examination" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Examination Guidlines</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Examination Application </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Results</NavDropdown.Item>
          </ NavDropdown>

          <NavDropdown title="VTU Departments" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Civil Engineering </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Computer Science and Engineering </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Electronics and communication Engineering</NavDropdown.Item>
          </ NavDropdown>

          <NavDropdown title="Staff Login" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Login as Admin </NavDropdown.Item>
          </ NavDropdown>
          
      </Nav>
         <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        {/* </Container> */}
        </Navbar>
        </header>
    )
} 
export default Header
