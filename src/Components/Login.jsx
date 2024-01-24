// Login.js
import React, { useState } from 'react';
import { auth, googleAuthProvider } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Login failed', error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
    } catch (error) {
      console.error('Google Sign In failed', error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="logo-container">
      <img className="logo" src={process.env.PUBLIC_URL + '/ThriftNU_logo.png'} alt="ThriftNU Logo" />
        <h2>ThriftNU</h2>
      </div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="login-button" onClick={handleLogin}>Log In</button>
      <button className="login-button" onClick={handleGoogleSignIn}>Sign In with Google</button>
      <div className="thriftnu-info">
        {/* Additional ThriftNU will go here, not currently working though*/}
        <p>Amazing thrift finds at <Link to="/homepage">ThriftNU</Link></p>
      </div>
    </div>
  );
};

export default Login;
