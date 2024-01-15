import Item from "./Item";

const ItemList = ({items, setSelectedItem, openModal}) => {
    const clickHandler = (item) => {
        setSelectedItem(item);
        console.log("clicked. item: " + item.name);
        openModal();
    }
    

    return (
        <div style={{'display': 'flex', 'justify-content': 'space-evenly', 'flex-wrap': 'wrap', 'align-items': 'bottom'}}>
            {Object.values(items).map((item, id) =>
                <Item key={id} item={item} click={() => clickHandler(item)} />)}
        </div>
    );
}

export default ItemList;