// import React, { useState,useEffect } from 'react'
// import { Form, Row, Col, Button } from "react-bootstrap";
// import { useNavigate,useParams } from 'react-router';
// import { useDispatch, useSelector } from "react-redux";
// import axios from 'axios';



// const UpdatePizza = () => {

//     const[pizza,setPizza] = useState();
//     const navigate = useNavigate();
//     const { pizzaid } = useParams();

//     const [name, setName] = useState("");
//     const [smallPrice, setSmallPrice] = useState("");
//     const [mediumPrice, setMediumPrice] = useState("");
//     const [largePrice, setLargePrice] = useState("");
//     const [image, setImage] = useState("");
//     const [description, setDescription] = useState("");
//     const [category, setCategory] = useState("");

//     const getpizza = async () => {
//         try {
//           const { data } = await axios.get(`/api/pizzas/getPizzabyId/${pizzaid}`);
//           console.log(data)
//           if (data?.success) {
//             setPizza(data?.pizza);
//             setSmallPrice(pizza.smallPrice);
//             setMediumPrice(pizza.mediumPrice);
//             setLargePrice(pizza.largePrice);
//             setImage(pizza.image);
//             setDescription(pizza.description);
//             setCategory(pizza.category);
//           }
//         } catch (error) {
//           console.log(error);
//         }
//       };

//       useEffect(() => {
//         getpizza();
//       }, []);

//       const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//           const { data } = await axios.put(`/api/pizzas/updatePizza/${pizzaid}`, {
//             name:pizza.name,
//             varients:pizza.varients,
//             image:pizza.image,
//             price:pizza.price,
//             category:pizza.category,
//             description:pizza.description,
//           });
//           if (data?.success) {
//             navigate("/admin/allpizza");
//           }
//         } catch (error) {
//           console.log(error);
//         }
//       };





//   return (
//     <div>
//       <Form onSubmit={handleSubmit} className="bg-light p-4">
//         <Row className="mb-3">
//           <Form.Group as={Col} controlId="formGridEmail">
//             <Form.Label>Name</Form.Label>
//             <Form.Control
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Enter Name"
//             />
//           </Form.Group>
//           <Row className="mb-3 mt-3">
//             <Form.Group as={Col} controlId="formGridCity">
//               <Form.Label>Small Price</Form.Label>
//               <Form.Control
//                 type="number"
//                 value={smallPrice}
//                 onChange={(e) => setSmallPrice(e.target.value)}
//                 placeholder="Enter Small Price"
//               />
//             </Form.Group>

//             <Form.Group as={Col} controlId="formGridState">
//               <Form.Label>Medium Price</Form.Label>
//               <Form.Control
//                 type="number"
//                 value={mediumPrice}
//                 onChange={(e) => setMediumPrice(e.target.value)}
//                 placeholder="Enter Medium Price"
//               />
//             </Form.Group>

//             <Form.Group as={Col} controlId="formGridZip">
//               <Form.Label>Large Price</Form.Label>
//               <Form.Control
//                 type="number"
//                 value={largePrice}
//                 onChange={(e) => setLargePrice(e.target.value)}
//                 placeholder="Enter Large Price"
//               />
//             </Form.Group>
//           </Row>
//           <Form.Group as={Col} controlId="formGridPassword">
//             <Form.Label>Image</Form.Label>
//             <Form.Control
//               type="text"
//               value={image}
//               onChange={(e) => setImage(e.target.value)}
//               placeholder="Add Image URL"
//             />
//           </Form.Group>
//         </Row>

//         <Form.Group className="mb-3" controlId="formGridAddress1">
//           <Form.Label>Description</Form.Label>
//           <Form.Control
//             type="text"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             placeholder="Enter Description"
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formGridAddress2">
//           <Form.Label>Category</Form.Label>
//           <Form.Control
//             type="text"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             placeholder="Enter Category"
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Add New
//         </Button>
//       </Form>
//     </div>
//   )
// }

// export default UpdatePizza






import React, { useState, useEffect } from 'react'
import { Form, Row, Col, Button } from "react-bootstrap";
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';



const UpdatePizza = () => {

  const [pizza, setPizza] = useState();
  const navigate = useNavigate();
  const pizzaid = useParams().id;

  const [name, setName] = useState("Hrsr");
  const [smallPrice, setSmallPrice] = useState("");
  const [mediumPrice, setMediumPrice] = useState("");
  const [largePrice, setLargePrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");




  useEffect(() => {
    const getpizza = async () => {
        try {
            const { data } = await axios.get(`https://pizzahub-backend.onrender.com/api/pizzas/getPizzabyId/${pizzaid}`);
            console.log(data);
          
            setName(data.name);
            setSmallPrice(data.price[0].small); 
            setMediumPrice(data.price[0].medium);
            setLargePrice(data.price[0].large); 
            setImage(data.image);
            setDescription(data.description);
            setCategory(data.category);
        } catch (error) {
            console.log(error);
        }
    };
    getpizza();
}, [pizzaid]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("name", name);
      formData.append("varients", JSON.stringify(["small", "medium", "large"]));
      formData.append("price", JSON.stringify({
        small: parseInt(smallPrice),
        medium: parseInt(mediumPrice),
        large: parseInt(largePrice),
      }));
      formData.append("category", category);
      formData.append("description", description);
      
      const { data } = await axios.put(`https://pizzahub-backend.onrender.com/api/pizzas/updatePizza/${pizzaid}`, formData);
      if (data) {
        navigate("/admin/allpizza");
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>

      <Form onSubmit={handleSubmit} className="bg-light p-4">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
            />
          </Form.Group>
          <Row className="mb-3 mt-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Small Price</Form.Label>
              <Form.Control
                type="number"
                value={smallPrice}
                onChange={(e) => setSmallPrice(e.target.value)}
                placeholder="Enter Small Price"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Medium Price</Form.Label>
              <Form.Control
                type="number"
                value={mediumPrice}
                onChange={(e) => setMediumPrice(e.target.value)}
                placeholder="Enter Medium Price"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Large Price</Form.Label>
              <Form.Control
                type="number"
                value={largePrice}
                onChange={(e) => setLargePrice(e.target.value)}
                placeholder="Enter Large Price"
              />
            </Form.Group>
          </Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Add Image URL"
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter Description"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter Category"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update 
        </Button>
      </Form>
    </div>
  )
}

export default UpdatePizza




