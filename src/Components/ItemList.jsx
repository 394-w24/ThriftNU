import Item from "./Item";

const ItemList = ({items}) => {
    return (
        <div>
            {Object.values(items).map((item, id) =>
                <Item key={id} item={item}/>)}
        </div>
    );
}

export default ItemList;