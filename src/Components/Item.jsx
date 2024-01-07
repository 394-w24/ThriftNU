const Item = (item) => {
    console.log(item);
    return (
        <div>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <p>{item.condition}</p>
            <p>item #</p>
        </div>
    );
}

export default Item;