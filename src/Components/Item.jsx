import './Item.css';

const Item = ({ item }) => {
    const { condition, name, price, imageURL, seller } = item;
    return (
        <div className="Item">
            <img className="Image" src={imageURL} alt="product" />
            <div className="Info">
                <h3>{name}</h3>
                <p>Price: ${price}</p>
                <p>Condition: {condition}</p>
                <p>Sold by: {seller}</p>
            </div>
        </div>
    );
}

export default Item;