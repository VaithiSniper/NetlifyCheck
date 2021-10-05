import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import SwipeableTemporaryDrawer from './Sidebar';
import { useMediaPredicate } from "react-media-hook";
//npm imports

function Header(){

  const smallerThan760 = useMediaPredicate("(max-width: 1000px)");//media-query hook  

  function navbarRetuner(){
    return(<div style={{paddingBottom:"8%"}}>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="transparent" variant="dark">
    <Container>
    <Navbar.Brand className="justify-content-start" href="/home"><img height="80px" width="60px" src="img/sdinavbar.png" alt="sdi-logo" style={{paddingRight:"10%"}}></img></Navbar.Brand>
    <Navbar.Brand className="justify-content-start"><a href="https://bit-bangalore.edu.in/" target="_blank" rel="noopener noreferrer"><img height="80px" width="60px" src="img/bitlogo.png" alt="bit-logo" style={{paddingLeft:"10%"}}></img></a></Navbar.Brand>
    <Nav className="ml-auto justify-content-end" activeKey="/home" style={{ width: "100%" }} >
          <Nav.Link className="navLinks" href="/">Home</Nav.Link>
          <Nav.Link className="navLinks" href="/about">About</Nav.Link>
          <Nav.Link className="navLinks" href="/team">Team</Nav.Link>
          <Nav.Link className="navLinks" href="/events">Events</Nav.Link>
          <Nav.Link className="navLinks" href="/contact">Contact Us</Nav.Link>
       </Nav>
    </Container>
  </Navbar>
    </div>);
  }
 //navbar on laptop
  function collapsedNavbarReturner(){
  return(
    <div> 
  <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
  <Container>
  <Navbar.Brand className="justify-content-start" href="/home"><img height="80px" width="60px" src="img/sdinavbar.png" alt="sdi-logo"></img></Navbar.Brand>
  <SwipeableTemporaryDrawer/>
  </Container>
  </Navbar>
 </div>
  )
 }
 //sidebar on mobile

 return(!smallerThan760?navbarRetuner():collapsedNavbarReturner())
   
}
//function

export default Header;
//exports

