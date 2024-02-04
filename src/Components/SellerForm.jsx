import React, { useState, useRef } from "react";
import { Button, Form, Col } from "react-bootstrap";
import "./SellerForm.css";
import { push, getDatabase, ref } from "firebase/database";
import { useNavigate } from 'react-router-dom';
import uploadImage from "../util/uploadImage";

const SellerForm = () => {
  const navigate = useNavigate();
  const [productDetails, setProductDetails] = useState({
    name: "",
    price: "",
    condition: "",
    subject: "",
    description: ""
  });
  const [imageFile, setImageFile] = useState(null);
  const [imageURL, setImageURL] = useState('');
  const imageInputRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(e.target)
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    // const { name, value } = e.target;
    // console.log(imageInputRef.current.files[0])

    setImageFile(imageInputRef.current.files[0]);
    // setProductDetails((prevDetails) => ({
    //   ...prevDetails,
    //   ['file']: imageInputRef.current.files[0],
    // }));
    // console.log('productDetails.file='+productDetails.file);
  };

  const writeProductData = async (productData, imageFile) => {
    console.log(imageFile);
    setImageURL(await uploadImage(imageFile));
    console.log('imageURL=' + imageURL);

    if (imageURL) {
      console.log("If this runs, I think the problem is solved.")
      // const db = getDatabase();
      // const profilesRef = ref(db, 'products/');
      // push(profilesRef, {
      //   name: productData.name,
      //   price: productData.price,
      //   condition: productData.condition,
      //   subject: productData.subject,
      //   description: productData.description,
      //   imageURL: imageURL,
      //   seller: productData.seller,
      //   email: productData.email,
      // });
    };

    // Navigate to homepage after successful submission
    //  navigate('/home');
  }

  return (
    <div>
      <p className="scroll-instructions">Scroll down to see more options</p>
      <Form className="seller-form" onSubmit={() => writeProductData(productDetails)}>
        <h1>Sell a Textbook!</h1>
        {/* <Form.Row> */}
        <Form.Group as={Col} className="form-group">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="seller"
            value={productDetails.seller}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group as={Col} className="form-group">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your email"
            name="email"
            value={productDetails.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group as={Col} className="form-group">
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

        <Form.Group as={Col} className="form-group">
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
        <Form.Group className="form-group">
          <Form.Label>Condition</Form.Label>
          <Form.Control
            as="select"
            name="condition"
            value={productDetails.condition}
            onChange={handleChange}
            required
          >
            <option value="">Choose...</option>
            <option value="New">New</option>
            <option value="Almost New">Almost New</option>
            <option value="Used">Used</option>
            <option value="Fair">Fair</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="form-group">
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

        <Form.Group className="form-group">
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
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Textbook Image</Form.Label>
          <Form.Control
            type="file"
            name="file"
            onChange={handleFileChange}
            ref={imageInputRef}
            required
          />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <div onClick={() => writeProductData(productDetails, imageFile)}>CLICK ME FOR DEBUG SUBMIT</div>
    </div>
  );
};

export default SellerForm;

