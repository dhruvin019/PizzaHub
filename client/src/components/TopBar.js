import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { MdLocalOffer } from "react-icons/md";
import { Link } from "react-router-dom"; // Import Link from react-router-dom


const TopBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <h6 className="text-light">
            <MdLocalOffer className="text-warning" /> &nbsp;&nbsp; Free Home
            Delivery on Order Above 500/- Rupees
          </h6>
          <Nav className="ms-auto">
            {/* Replace LinkContainer with Link */}
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About Us</Link>
            <Link to="/contact" className="nav-link">Contact Us</Link>
            <Link to="/policy" className="nav-link">Terms and Policy</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default TopBar;
