import React, { useState } from 'react';
import thriftNuLogo from './logo.png';
import { useNavigate } from 'react-router-dom';
import "./SignInPage.css"; 
function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Simulate a successful sign-in
    navigate('/home');
  };

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
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default SignInPage;
