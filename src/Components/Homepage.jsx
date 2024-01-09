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
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal open={open} close={closeModal}>
        <div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, et dolore adipisci cumque nulla recusandae. Incidunt suscipit voluptate doloribus excepturi minima neque sit architecto, culpa ipsum consequatur? Nisi, tenetur incidunt?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi blanditiis dolorem praesentium velit corporis quaerat eos laboriosam corrupti dolor, pariatur officia adipisci, eius cumque ipsam consectetur doloribus perferendis quae magni!</p></div>
      </Modal>
      <ItemList items={products} setSelectedItem={setSelected} openModal={openModal} />
    </div>
  );
};

export default Homepage;
