const initialState = {};
export const checkoutReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_PAYMENT_REQUEST":
        return {
          ...state,
        
        };
      case "GET_PIZZAS_SUCCESS":
        // console.log(action.payload)
        return {
          ...state,
          
          
        };
      case "GET_PIZZAS_FAIL":
        return {
          error: action.payload,
          
        };
      default:
        return state;
    }
  };