import Item from "./Item";

const ItemList = (items) => {
    console.log(items)
    console.log(items.items);
    return (
        <div>
            {Object.entries(items.items).map(([id, item]) =>
            <Item key={id} item={item}/>)}
        
        </div>
    );
}

export default ItemList;