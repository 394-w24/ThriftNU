import Item from "./Item";

const ItemList = ({items, setSelectedItem, openModal}) => {
    const clickHandler = (item) => {
        console.log("test")
        setSelectedItem(item);
        openModal();
    }

    return (
        <div>
            {Object.values(items).map((item, id) =>
                <Item key={id} item={item} onClick={() => clickHandler(item)} />)}
        </div>
    );
}

export default ItemList;