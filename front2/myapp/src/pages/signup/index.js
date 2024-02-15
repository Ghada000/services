import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authh } from "./firebaseConfig";
// import { useRouter } from 'next/navigation';
import "./style.css"
function SignIn() {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [username, setUsername] = useState('');
const [birthday, setBirthday] = useState(''); // New state for birthday

const handleEmailChange = (e) => {
  setEmail(e.target.value);
};

const handlePasswordChange = (e) => {
  setPassword(e.target.value);
};

const handleUsernameChange = (e) => {
  setUsername(e.target.value);
};

const handleBirthdayChange = (e) => { // Handler for birthday change
  setBirthday(e.target.value);
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const userCredential = await createUserWithEmailAndPassword(authh, email, password);
    const user = userCredential.user;

    // Example of adding additional fields to user profile
    await updateProfile(user, {
      displayName: username
    });

    // Example of updating the user's custom claims with birthday
    // You might want to store this information in a user profile collection in Firestore instead
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
      <div className="input-group"> {/* New input field for birthday */}
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
  </div>
);
}
  export default SignIn