import { useState } from 'react';
import { signInWithEmailAndPassword  } from "firebase/auth";
import { authh } from "./firebaseConfig.js";
import { useRouter } from 'next/navigation';
import './style.css'
function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const userCredential = await signInWithEmailAndPassword(authh, email, password);
        const user = userCredential.user;
        console.log('User signed in:', user);
        router.push('/home');

        // You can redirect the user to another page or perform any other actions upon successful sign-in
      } catch (error) {
        console.error('Error signing in:', error.message);
      }
      // Clear the email and password fields after sign-in attempt
      setEmail('');
      setPassword('');
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
                placeholder="Your email address"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="input-field"
                placeholder="Your password"
                required
              />
            </div>
            <button type="submit" className="submit-button">Sign In</button>
          </form>
        </div>
    );
}

export default SignIn;