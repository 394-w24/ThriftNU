import Item from "./Item";

const ItemList = ({items, setSelectedItem, openModal}) => {
    const clickHandler = (item) => {
        setSelectedItem(item);
        openModal();
    }

    return (
        <div>
            {Object.values(items).map((item, id) =>
                <Item key={id} item={item} onClick={(item) => clickHandler(item)} />)}
        </div>
    );
}

export default ItemList;