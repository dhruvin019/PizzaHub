import axios from "axios";
export const checkoutHandler = (subTotal) => async (dispatch, getState) => {
  try{

    const {data:{order}} =await axios.post("https://pizzahub-backend.onrender.com/api/payment/checkout",{subTotal});
   

    const {data:{key}} =await axios.get("https://pizzahub-backend.onrender.com/api/payment/getkey");
    // console.log({order});

    const options = {
      key, // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Mr_Virpara",
      description: "Test Transaction",
      // image: "https://example.com/your_logo",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the previous step
      callback_url:"https://pizzahub-backend.onrender.com/api/payment/paymentverification",
      

      prefill: {
          "name": "Gaurav Kumar",
          "email": "gaurav.kumar@example.com",
          "contact": "9999999999"
      },
      notes: {
          "address": "Razorpay Corporate Office"
      },
      theme: {
          "color": "#3399cc"
      }
  };

  const  razor = new window.Razorpay(options);
  razor.open();

  }
  catch(err){
    console.log(err);
  }

  };