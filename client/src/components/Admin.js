import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Row, Col, Container, ButtonGroup, Button } from 'react-bootstrap';
import { Outlet } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';


const Admin = () => {
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  useEffect(() => {
    if (localStorage.getItem("currentUser") === null || !currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, [currentUser]);
  return (
    <Container>
      <Row>
        <h1 className="text-center bg-dark text-light p-2">Admin Panel</h1>
        <Col md={4}>
          <ButtonGroup vertical style={{ minHeight: '400px' }}>
            <LinkContainer to="/admin">
              <Button>All Users</Button>
            </LinkContainer>
            <LinkContainer to="/admin/allpizza">
              <Button>All Pizzas</Button>
            </LinkContainer>
            <LinkContainer to="/admin/addpizza">
              <Button>Add New Pizza</Button>
            </LinkContainer>
            <LinkContainer to="/admin/allorders">
              <Button>All Orders</Button>
            </LinkContainer>
          </ButtonGroup>
        </Col>

        <Col md={8}>
          <Outlet/>
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;
