import "./Item.css";

const Item = ({ item }) => {
  const { condition, name, price, imageURL, seller, email, description } = item;
  return (
    <div className="Item">
      <div className="Info">
        <h3>{name}</h3>
        <p>Price: ${price}</p>
        <p>Condition: {condition}</p>
        <p>Sold by: {seller}</p>
        <p>Seller Email: {email}</p>
        <p>Description: {description}</p>
      </div>
      <img className="Img" src={imageURL} alt="product" />
    </div>
  );
};
export default Item;
