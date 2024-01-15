import ItemList from "./ItemList";
import { useState } from "react";
import Modal from "./Modal";
import Dropdown from 'react-bootstrap/Dropdown';
// import { Button } from "bootstrap";

const Homepage = ({ products }) => {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <div>
      {console.log(open)};
      <Modal open={open} close={closeModal}>
        {selected ?
          <div>
            <div className="card" style={{maxWidth: '60vw', boxShadow: 'none'}}>
                <img className="card-img-top" src={selected.imageURL} alt="product" style={{width: '80%', height: 'auto', position: 'relative'}}/>
                <div className="card-body">
                    <h2 className="card-title">{selected.name}</h2>
                    <p className="card-text">{selected.description}</p>
                    <p className="card-text">Price: ${selected.price}</p>
                    <p className="card-text">Condition: {selected.condition}</p>
                    <p className="card-text">Seller: {selected.seller}</p>
                    <p className="card-text">Seller's Email: <a href={`mailto:${selected.email}`}>{selected.email}</a></p>
                </div>
            </div>
          </div>
          : 
          <div></div>
        }
      </Modal>
      <div><h1>ThriftNU</h1></div>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      
      <ItemList items={products} setSelectedItem={setSelected} openModal={openModal} />
    </div>
  );
};

export default Homepage;
