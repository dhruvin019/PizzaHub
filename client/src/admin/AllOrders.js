import React, { useState, useEffect } from 'react';
import { Table } from "react-bootstrap";
import axios from 'axios';

const AllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('https://pizzahub-backend.onrender.com/api/payment/allorders');
        setAllOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  const renderCartItems = (cartItems) => {
    return cartItems.map((item, index) => (
      <div key={index}>
        <p>{item.name} - {item.price}</p>
      </div>
    ));
  };

  return (
    <div>
      <h1>All Orders</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Payment_Id</th>
            <th>Order_Id</th>
            <th>Email</th>
            <th>CartItems</th> 
          </tr>
        </thead>
        <tbody>
          {allOrders.map((order) => (
            <tr key={order._id}>
              <td>{order.payment_id}</td>
              <td>{order.order_id}</td>
              <td>{order.useremail}</td>
              <td>{renderCartItems(order.cartItemsdetail)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AllOrders;
