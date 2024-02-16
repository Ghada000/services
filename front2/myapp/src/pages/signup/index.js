import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { authh } from "./firebaseConfig";

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleBirthdayChange = (e) => {
    setBirthday(e.target.value);
  };

  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(authh, provider);
      
      const user = result.user;
      console.log('Signed up with Google:', user);
    } catch (error) {
      console.error('Error signing up with Google:', error.message);
    }
  };

  const handleFacebookSignUp = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(authh, provider);
     
      const user = result.user;
      console.log('Signed up with Facebook:', user);
    } catch (error) {
      console.error('Error signing up with Facebook:', error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(authh, email, password);
      const user = userCredential.user;

     
      await updateProfile(user, {
        displayName: username
      });

      
      await setCustomClaims(user.uid, { birthday });

      console.log('User signed up:', user);
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
    setEmail('');
    setPassword('');
    setUsername('');
    setBirthday('');
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={handleSubmit} className="sign-in-form">
        <div className="input-group">
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="input-field"
            required
            placeholder="Email"
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="input-field"
            required
            placeholder="Password"
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            className="input-field"
            required
            placeholder="Username"
          />
        </div>
        <div className="input-group">
          <input
            type="date"
            id="birthday"
            value={birthday}
            onChange={handleBirthdayChange}
            className="input-field"
            required
            placeholder="Birthday"
          />
        </div>
        <button type="submit" className="submit-button">Sign up</button>
      </form>
      <button onClick={handleGoogleSignUp} className="google-sign-up-button">Sign up with Google</button>
      <button onClick={handleFacebookSignUp} className="facebook-sign-up-button">Sign up with Facebook</button>
    </div>
  );
}

export default SignIn;
