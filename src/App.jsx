import { useState, useEffect } from "react";
import { database } from "./firebase";
import { ref as getDbRef, get, onValue } from "firebase/database";
import ItemList from "./Components/ItemList";

const App = () => {
  const [products, setProducts] = useState([]);

  // useEffect doesn't call getDbRef() every time the component renders
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dbRef = getDbRef(database);
        const snapshot = await get(dbRef);

        if (snapshot.exists()) {
          // snapshot.val()["products"] returns an object of objects
          setProducts(snapshot.val()["products"]);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  

  return (
    <div className="App">
      <ItemList items={products} />
    </div>
  );
};

export default App;
