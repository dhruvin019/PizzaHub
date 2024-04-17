export const getAllPizzaReducer = (state = { pizzas: [] }, action) => {
  switch (action.type) {
    case "GET_PIZZAS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_PIZZAS_SUCCESS":
      // console.log(action.payload)
      return {
        ...state,
        pizzas: action.payload,
        loading: false,
      };
    case "GET_PIZZAS_FAIL":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const addPizzaReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_PIZZAS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "ADD_PIZZAS_SUCCESS":
      return {
        success: true,
        loading: false,
      };
    case "ADD_PIZZAS_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};



