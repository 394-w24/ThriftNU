const Item = ({ item }) => {
  const { condition, name, price, imageURL, seller } = item;
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p>Condition: {condition}</p>
      <p>Sold by: {seller}</p>
      <img src={imageURL} alt="product" />
    </div>
  );
};

export default Item;
