const Item = ({item}) => {
    const { condition, name, price, seller } = item;
    return (
        <div>
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <p>Condition: {condition}</p>
        </div>
    );
}

export default Item;