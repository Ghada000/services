import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authh } from "./firebaseConfig";

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(authh, email, password);
      const user = userCredential.user;
      console.log('User signed up:', user);
      // You can redirect the user to another page or perform any other actions upon successful sign-up
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default SignIn;
