import ItemList from "./ItemList";
import { useState } from "react";
import Modal from "./Modal";
import { Button } from "bootstrap";

const Homepage = ({ products }) => {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <div>
      <Modal open={open} close={closeModal}>
        {selected ?
          <div>
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={selected.imageURL} alt="product" style={{width: '18rem'}}/>
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
      <ItemList items={products} setSelectedItem={setSelected} openModal={openModal} />
    </div>
  );
};

export default Homepage;
