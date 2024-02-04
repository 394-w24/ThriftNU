import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import './ProfilePage.css'; // Import the CSS file

// Mock data to replace actual fetch calls
const mockSoldBooks = [
  { id: 1, bookTitle: 'Designa nd Analysis of Algorithims', price: 25, dateSold: '2022-01-01' },
  { id: 2, bookTitle: 'JavaScript Fundamentals', price: 20, dateSold: '2022-02-15' },
  { id: 3, bookTitle: 'Data Structures in Python', price: 30, dateSold: '2022-03-20' },
];

async function fetchUserData(userId) {
  // Replace with actual fetch calls
  const name = "User"; // Replace with getUserName(userId) - if firebase works
  const purchases = []; // Replace with getPurchases(userId)
  const soldBooks = mockSoldBooks; // Replace with getSoldBooks(userId)
  return { name, purchases, soldBooks };
}

function ProfilePage({ userId, products }) {
  const [userData, setUserData] = useState({});
  const [userEmail, setUserEmail] = useState('');
  // console.log(products);
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserEmail(user.email);
    }
  });

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
      <h2>Welcome back, {name}</h2>
      {/* Display sold books */}
      <div className="user-sold-books">
        <h2>Here are the books you sold</h2>
        <ul style={{ paddingRight: '2rem' }}>
          {soldBooks && soldBooks.map((soldBook) => (
            <li key={soldBook.id}>
              <div>{soldBook.bookTitle}</div>
              <div>${soldBook.price}</div>
              <div>{soldBook.dateSold}</div>
            </li>
          ))}
          {Object.values(products).filter((product) => product.email === userEmail).map((item, id) =>
            <li key={id}>
              <div style={{ display: 'flex', justifyContent: 'start' }}>
                <img className="card-img-top" src={item.imageURL} alt="product" style={{ paddingRight: '20px', maxWidth: '150px' }} />
                <li style={{border: "0px"}}>
                <div className='profile-text'><b>{item.name}</b></div>
                <div className='profile-text'>${item.price}</div>
                <div className='profile-text'>{item.condition}</div>
              </li>
              </div>
            </li>
          )}
          {/* </div> */}
        </ul>
      </div>

      {/* Button to navigate back to the homepage */}
      <Link to="/home">
        <button>Go Back to Homepage</button>
      </Link>
    </div>
  );
}

export default ProfilePage;
