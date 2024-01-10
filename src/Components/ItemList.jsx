import Item from "./Item";

const ItemList = ({items, setSelectedItem, openModal}) => {
    const clickHandler = (item) => {
        console.log("test");
        setSelectedItem(item);
        openModal();
    }
    

    return (
        <div style={{'display': 'flex', 'justify-content': 'space-evenly', 'flex-wrap': 'wrap'}}>
            {Object.values(items).map((item, id) =>
                <Item key={id} item={item} click={() => clickHandler(item)} />)}
        </div>
    );
}

export default ItemList;