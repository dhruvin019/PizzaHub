import React from 'react';
import { Navbar, Nav, Container, Image,NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { logoutUser } from '../actions/userAction';
import logo from "../images/img1.jpg";
import cartimg from "../images/img2.jpg";

function NavBar() {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  // const currentUser = localStorage.getItem("currentUser")
  // ? JSON.parse(localStorage.getItem("currentUser"))



    return (
      <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand >
          <Image
                src={logo}
                style={{
                  height: "80px",
                  width: "351px",
                  marginLeft: "-89px"
                }}
            /> 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {currentUser ? (
                <LinkContainer to="/">
                  <NavDropdown title={currentUser.name} id="basic-nav-dropdown">
                  <LinkContainer to="/orders">
                      <NavDropdown.Item>orders</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item
                      onClick={() => {
                        dispatch(logoutUser());
                      }}
                    >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </LinkContainer>
              ) : (
                <>
                  {" "}
                  <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/register">
                    <Nav.Link>Register</Nav.Link>
                  </LinkContainer>{" "}
                </>
              )}

                <LinkContainer to="/cart">
                  <Nav.Link><Image
                    src={cartimg}
                    style={{
                      height: "39px",
                      width: "44px",
                      borderRadius: "50%"
                    }}
                    />
                    <span style={{
                      fontSize: "21px",
                      color: "blue",
                      position: "relative",
                      bottom: "10px"
                    }}>{cartState.cartItems.length}</span>
                  </Nav.Link>
                </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
    );
  }
  
  export default NavBar;