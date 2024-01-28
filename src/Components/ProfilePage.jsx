// ProfilePage.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getSoldBooks } from './api';

async function fetchUserData(userId) {
  const name = await getUserName(userId);
  const soldBooks = await getSoldBooks(userId); // New function to fetch sold books
  return { name, purchases, soldBooks };
}

function ProfilePage({ userId }) {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const userData = await fetchUserData(userId);
        setUserData(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    fetchData();
  }, [userId]);

  const { name, purchases, soldBooks } = userData;

  return (
    <div>
      <h2>Welcome back, {name}!</h2>

      <Link to="/">Homepage</Link>

      <Link to="/sell">Sell Textbook</Link>

      {/* Display purchases */}
      <div className="user-purchases">
        <h2>Your Purchases</h2>
        <ul>
          {purchases && purchases.map((purchase) => (
            <li key={purchase.id}>
              <div>{purchase.bookTitle}</div>
              <div>${purchase.price}</div>
              <div>{purchase.datePurchased}</div>
            </li>
          ))}
        </ul>
      </div>

      {/* Display sold books */}
      <div className="user-sold-books">
        <h2>Your Sold Books</h2>
        <ul>
          {soldBooks && soldBooks.map((soldBook) => (
            <li key={soldBook.id}>
              <div>{soldBook.bookTitle}</div>
              <div>${soldBook.price}</div>
              <div>{soldBook.dateSold}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProfilePage;
