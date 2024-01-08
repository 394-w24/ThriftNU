import ItemList from "./ItemList";
import { useState } from "react";
import Modal from "./Modal";

const Homepage = ({ products }) => {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <div>
      <Modal open={open} close={closeModal}>
        <div><p>MODAL OPEN</p></div>
      </Modal>
      <ItemList items={products} setSelectedItem={setSelected} openModal={openModal} />
    </div>
  );
};

export default Homepage;
