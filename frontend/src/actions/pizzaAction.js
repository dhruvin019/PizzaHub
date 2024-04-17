import axios from "axios";

export const getAllPizzas = () => async (dispatch) => {
  
  try {
    const response = await axios.get("/api/pizzas/getAllPizzas");
    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: response.data });
    // console.log("success");

  } catch (err) {
    dispatch({ type: "GET_PIZZAS_FAIL", payload: err });
    console.log("failure");
  }
};

export const deletePizza = (pizzaId) => async (dispatch) => {
  try {
    await axios.delete(`/api/pizzas/deletepizza/${pizzaId}`);

    dispatch(getAllPizzas());
  } catch (error) {
    console.log(error);
  }
};


export const addPizza = (pizza) => async (dispatch) => {
  dispatch({ type: "ADD_PIZZAS_REQUEST" });
  try {
    await axios.post("/api/pizzas/addpizza", pizza);
    // Dispatch success action if the request is successful
    dispatch({ type: "ADD_PIZZA_SUCCESS" });
  } catch (error) {
    // Extract error message from Axios error
    const errorMessage = error.message;
    // Dispatch failure action with error message
    dispatch({ type: "ADD_PIZZA_FAIL", payload: errorMessage });
    console.log(error);
  }
};

