import React, { useState } from "react";
import { Button, Form, Col } from "react-bootstrap";
import "./SellerForm.css";
import { push, getDatabase, ref} from "firebase/database";

const SellerForm = () => {
  const [productDetails, setProductDetails] = useState({
    name: "",
    price: "",
    condition: "",
    subject: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const writeProductData = async (productData) => {
    const db = getDatabase();
    const profilesRef = ref(db, 'products/');
    push(profilesRef,  {
      name: productData.name,
      price: productData.price,
      condition: productData.condition,
      subject: productData.subject,
      description: productData.description,
    });
  }

  return (
    <Form className="seller-form" onSubmit={() => writeProductData(productDetails)}>
      {/* <Form.Row> */}
        <Form.Group as={Col}>
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product name"
            name="name"
            value={productDetails.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter price"
            name="price"
            value={productDetails.price}
            onChange={handleChange}
            required
          />
        </Form.Group>
      {/* </Form.Row> */}
      <Form.Group>
        <Form.Label>Condition</Form.Label>
        <Form.Control
          as="select"
          name="condition"
          value={productDetails.condition}
          onChange={handleChange}
          required
        >
          <option value="">Choose...</option>
          <option value="new">New</option>
          <option value="almost new">Almost New</option>
          <option value="used">Used</option>
          <option value="fair">Fair</option>
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Subject</Form.Label>
        <Form.Control
          as="select"
          name="subject"
          value={productDetails.subject}
          onChange={handleChange}
          required
        >
          <option value="">Choose...</option>
          <option value="Chemistry">Chemistry</option>
          <option value="Biology">Biology</option>
          <option value="Economics">Economics</option>
          <option value="Computer Science">Computer Science</option>
          <option value="English">English</option>
          {/* Add other subjects as needed */}
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter description (optional)"
          name="description"
          value={productDetails.description}
          onChange={handleChange}
        />
      </Form.Group>
      <br />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default SellerForm;
