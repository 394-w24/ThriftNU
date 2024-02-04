import React, { useEffect, useState } from 'react';
import thriftNuLogo from './logo.png';
import { useNavigate, Link } from 'react-router-dom';
import "./SignInPage.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase";



function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [user, loading, error]= useAuthState(auth);
  const [error, setError] = useState("")

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // set signInWithEmailAndPassword(email, password)
    // to be handled in the onsubmit
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user
      console.log(user);
      if (user) {
        navigate('/home');
      }
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log()
      setError(error.message)
    });



    // set use navigate in the handleSubmit()
    // user navigates after handling signInWithEmailAndPassword
    // 
  };
  // removed not needed useEffect
  //   useEffect(() =>{
  //     if (loading){
  //       return;
  //     }
  //     if (user)
  //     navigate('/home');
  //  }, [user, loading]);

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
          {/* removed incorrect on click */}
          {/* onClick={() => signInWithEmailAndPassword(email, password)} */}
        </form>
        <><Link to="/register">Register</Link></>
        {error}
      </div>
    </div>
  );
}

export default SignIn;
