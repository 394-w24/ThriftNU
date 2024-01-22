import React, { useState, useEffect } from 'react';
import { database, auth } from './firebase';
import { ref as getDbRef, get } from 'firebase/database';
import { onAuthStateChanged } from 'firebase/auth';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Switch } from 'react-router-dom';


import Login from './Components/Login';
import Homepage from './Components/Homepage';

const App = () => {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);

  // Fetch data from the database
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dbRef = getDbRef(database);
        const snapshot = await get(dbRef);

        if (snapshot.exists()) {
          // snapshot.val()["products"] returns an object of objects
          setProducts(snapshot.val()['products']);
        } else {
          console.log('No data available');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    // Listen for changes in authentication state
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <Homepage products={products} />
    </div>
  );
};

export default App;


