import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { ref as getDbRef, get } from 'firebase/database';
import SignInPage from './Components/SignInPage';
import Homepage from './Components/Homepage';
import ProfilePage from './Components/ProfilePage';
import { auth, database } from './firebase';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const checkAuthentication = () => {
      // You can add your authentication check logic here
      // For now, let's set it to true unconditionally
      setIsAuthenticated(true);
    };

    const fetchData = async () => {
      try {
        const dbRef = getDbRef(database);
        const snapshot = await get(dbRef);

        if (snapshot.exists()) {
          setProducts(snapshot.val()['products']);
        } else {
          console.log('No data available');
        }
      } catch (error) {
        console.error(error);
      }
    };

    checkAuthentication();
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Show SignIn Page first */}
        <Route
          path="/"
          element={<SignInPage isAuthenticated={isAuthenticated} />}
        />

        {/* Home Page rendered after login */}
        <Route
          path="/home"
          element={
            isAuthenticated ? (
              <Homepage products={products} />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* Private Route */}
        <Route path="/profile" element={<ProfilePage />} />

        {/* Profile Route */}
        <Route path="/*" element={<div className="App">Will retrieve the list of books from db, or record each time the SellerForm is filled</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
