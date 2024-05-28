import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import axios from 'axios';

const OrderScreen = () => {
  const [allOrders, setAllOrders] = useState([]);

  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  let useremail = currentUser.email;
  console.log(useremail);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('https://pizzahub-backend.onrender.com/api/payment/orders', { params: { useremail } });
        setAllOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  const renderCartItems = (cartItems) => {
    return cartItems.map((item, index) => (
      <div key={index} style={{ marginBottom: '5px', fontFamily: 'Arial', fontSize: '14px' }}>
        <p style={{ margin: '0', padding: '0' }}>{item.name} - {item.price}</p>
      </div>
    ));
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '20px', fontFamily: 'Arial' }}>All Orders</h1>
      <Table bordered style={{ width: '80%', margin: '0 auto', borderCollapse: 'collapse' }}>
        <thead style={{ backgroundColor: '#f2f2f2' }}>
          <tr>
            <th style={{ padding: '10px', textAlign: 'left' }}>Payment_Id</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Order_Id</th>
            
            <th style={{ padding: '10px', textAlign: 'left' }}>CartItems</th> 
          </tr>
        </thead>
        <tbody>
          {allOrders.map((order) => (
            <tr key={order._id}>
              <td style={{ padding: '10px' }}>{order.payment_id}</td>
              <td style={{ padding: '10px' }}>{order.order_id}</td>
              
              <td style={{ padding: '10px' }}>{renderCartItems(order.cartItemsdetail)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default OrderScreen;
