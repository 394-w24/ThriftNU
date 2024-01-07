import Item from "./Item";

const ItemList = (items) => {
    console.log(items)
    console.log(items.items[0]);
    return (
        <div>
            {Object.entries(items.items[0].products).map(([id, item]) =>
            <Item key={id} item={item}/>)}
        
        </div>
    );
}

export default ItemList;