import React, { useEffect, useState } from 'react';
import thriftNuLogo from './logo.png';
import { useNavigate } from 'react-router-dom';
import "./SignInPage.css"; 
import {useAuthState} from "react-firebase-hooks/auth";
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../firebase";



function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error]= useAuthState(auth);
  
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
  };
    useEffect(() =>{
      if (loading){
        return;
      }
      if (user)
      navigate('/home');
   }, [user, loading]);

  return (
    <div className="signin-container">
      <div className="logo-container">

        <img src={thriftNuLogo} alt="ThriftNu Logo" className="thrift-nu-logo" />
        <div className="thrift-nu-text">ThriftNu</div>
        <div className="tagline">A Cheaper Solution for Books</div>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input 
              name="email" 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input 
              name="password" 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit">Log In</button>
          onClick={() => signInWithEmailAndPassword(email, password)}
        </form>
      </div>
    </div>
  );
}

export default SignInPage;
