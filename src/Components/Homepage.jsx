import ItemList from "./ItemList";
import { useState } from "react";
import Modal from "./Modal";
import Dropdown from "react-bootstrap/Dropdown";
import SellerForm from "./SellerForm";
import "./Homepage.css";
import SearchBar from "./SearchBar";

const Homepage = ({ products }) => {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);
  const [dropValue, setDropValue] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  const toggleFormVisibility = () => {
    setShowForm(!showForm); // Toggle the visibility
  };

  // search bar logic
  const [searchTextbooks, setSearchTextbooks] = useState("");
  function onSearch(searchTerm) {
    if (searchTerm === "") {
      setSearchTextbooks(products);
      return;
    }
    const productNames = Object.values(products); // { {product1}, {product2}, ... } --> [{product1}, {product2}, ...]
    const filteredProducts = productNames.filter((productName) => {
      return (
        productName.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        productName.subject.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setSearchTextbooks(filteredProducts);
  }
  

  for (let i = 0; i < products.length; i++) {
    console.log(products[i].category);
    if (products[i].category !== dropValue) {
    }
  }

  return (
    <div className="homepage-container">
      {/* Adjusted div structure and class names for styling */}
      <div className="text-center header">
        <h1>ThriftNU</h1>
      </div>
      <div className="text-center">
        <button
          onClick={toggleFormVisibility}
          className="btn btn-primary sell-button my-3"
        >
          {showForm ? "Hide Form" : "Click here to sell an Item"}
        </button>
      </div>

      <Modal open={open} close={closeModal}>
        {selected ? (
          <div>
            <div
              className="card"
              style={{ maxWidth: "60vw", boxShadow: "none" }}
            >
              <img
                className="card-img-top"
                src={selected.imageURL}
                alt="product"
                style={{ width: "80%", height: "auto", position: "relative" }}
              />
              <div className="card-body">
                <h2 className="card-title">{selected.name}</h2>
                <p className="card-text">{selected.description}</p>
                <p className="card-text">Price: ${selected.price}</p>
                <p className="card-text">Condition: {selected.condition}</p>
                <p className="card-text">Seller: {selected.seller}</p>
                <p className="card-text">
                  Seller's Email:{" "}
                  <a href={`mailto:${selected.email}`}>{selected.email}</a>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </Modal>

      <Modal
        className="form-modal"
        open={showForm}
        close={toggleFormVisibility}
      >
        <SellerForm />
      </Modal>
      
      <div className="searchbar">
        <SearchBar onSearch={onSearch} />
      </div>
      
      <Dropdown>
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
          className="custom-dropdown"
        >
          {dropValue ? dropValue : "Select a subject"}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => {
              setDropValue(null);
            }}
          >
            All
          </Dropdown.Item>
          {[
            ...new Set(Object.values(products).map((item) => item.subject)),
          ].map((subject, id) => (
            <Dropdown.Item
              key={id}
              onClick={() => {
                setDropValue(subject);
              }}
            >
              {subject}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <ItemList
        items={searchTextbooks} // changed from products to searchTextbooks
        setSelectedItem={setSelected}
        openModal={openModal}
        dropValue={dropValue}
      />

      {/* {showForm && <SellerForm />} */}
    </div>
  );
};

export default Homepage;
