import ItemList from "./ItemList";
import { useState } from "react";
import Modal from "./Modal";
import Dropdown from "react-bootstrap/Dropdown";
import SellerForm from "./SellerForm";
import "./Homepage.css";
import Profile from "./profile";


const user = {
  name: 'Mercy Omwoyo',
  classYear: '2024',
  textbooksToBuy: [
    { id: 1, title: 'Book A', author: 'Author A' },
    // Add other textbooks to buy
    //Still figuring out Firebase stuff will come to this later
  ],
  textbooksToSell: [
    { id: 2, title: 'Book B', author: 'Author B' },
    // Add other textbooks to sell
    //Still figuring out Firebase stuff will come to this later
  ],
};


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


 for (let i = 0; i < products.length; i++) {
   console.log(products[i].category);
   if (products[i].category !== dropValue) {
   }
 }


 return (
   <div className="homepage-container">
     <div className="header">
       <h1>ThriftNU</h1>
       <button onClick={toggleFormVisibility} className="sell-button">
       {/* Debugging that user is defined */}
       {user && <Profile user={user} textbookPosts={user.textbookPosts} />}
       {/* <Profile user={user} /> */}
         {showForm ? "Hide Form" : "Sell an Item"}
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


     <Modal className="form-modal" open={showForm} close={toggleFormVisibility}>
       <SellerForm />
     </Modal>


     <Dropdown>
       <Dropdown.Toggle variant="success" id="dropdown-basic">
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
       items={products}
       setSelectedItem={setSelected}
       openModal={openModal}
       dropValue={dropValue}
     />


     {/* {showForm && <SellerForm />} */}
   </div>
 );
 
};


export default Homepage;



