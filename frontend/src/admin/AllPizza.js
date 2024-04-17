import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Table } from "react-bootstrap";
import { deletePizza, getAllPizzas } from "../actions/pizzaAction";

import { Link } from "react-router-dom";

const AllPizza = () => {
  const dispatch = useDispatch();
  const pizzastate = useSelector((state) => state.getAllPizzaReducer);
  const { pizzas } = pizzastate;
  console.log(pizzas)
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  return (
    <>
    {(
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Image</th>
              <th>Pizza Name</th>
              <th>Prices</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pizzas &&
              pizzas.map((pizza) => (
                <tr key={pizza._id}>
                  <td>
                    <img
                      src={pizza.image}
                      alt="logo"
                      width="100px"
                      height="100px"
                    />
                  </td>
                  <td>{pizza.name}</td>
                  <td>
                    Small : {pizza.price[0]["small"]}
                    <br />
                    Medium : {pizza.price[0]["medium"]}
                    <br />
                    Large : {pizza.price[0]["large"]}
                  </td>
                  <td>{pizza.category}</td>
                  <td>
                    <Link to={`/admin/updatepizza/${pizza._id}`}>
                      <AiFillEdit style={{ cursor: "pointer" }} />
                    </Link>
                    &nbsp;
                    <AiFillDelete
                      style={{ color: "red", cursor: "pointer" }}
                      onClick={() => {
                        dispatch(deletePizza(pizza._id));
                      }}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    )}
  </>
  )
}

export default AllPizza
