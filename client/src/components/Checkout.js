import React from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { placeOrder } from '../actions/orderAction';

const Checkout = ({subTotal}) => {
    const dispatch = useDispatch()
    const tokenHandler = async (token) => {
      dispatch(placeOrder(token,subTotal));
      console.log(token);
    }
  return (
    <StripeCheckout
    amount={subTotal*100}
    shippingAddress
    tokn={tokenHandler}
    stripeKey="pk_test_51Os6QdSHpRvTkll2JnmS7i9E5WxENKQZX3bGCP7kNmEZQbyM3AIU5X3kFi5pJwyUQJMfA1sKORdZJOi3Je7pLg2800likV9Dfh"
    currency="INR"
    >
        <Button>PayNow</Button>
    </StripeCheckout>
  )
}

export default Checkout
