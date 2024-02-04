import React, { useEffect, useState } from 'react';
import thriftNuLogo from './logo.png';
import { useNavigate } from 'react-router-dom';
import "./SignInPage.css"; 
function SignInPage() {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error]= useAuthState(auth);
  
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log('Registered user:', userCredential.user);
      // You can automatically sign the user in, or show a success message, etc.
    } catch (err) {
      console.error('Registration error:', err);
      setError(err.message); // Set error message to display to the user
    }
  };
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
          <button type="submit">Log In</button>
          onClick={() => signInWithEmailAndPassword(email, password)}
        </form>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label>Register Email:</label>
            <input 
              type="email" 
              placeholder="Enter email for registration"
              value={registerEmail} 
              onChange={(e) => setRegisterEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Register Password:</label>
            <input 
              type="password" 
              placeholder="Enter password for registration"
              value={registerPassword} 
              onChange={(e) => setRegisterPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default SignInPage;
