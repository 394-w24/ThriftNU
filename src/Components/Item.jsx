const Item = (item) => {
    console.log(item);
    return (
        <div>
            <h3>{item.item['name']}</h3>
            <p>Price: ${item.item['price']}</p>
            <p>Condition: {item.item['condition']}</p>
        </div>
    );
}

export default Item;