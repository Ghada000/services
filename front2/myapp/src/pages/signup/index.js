import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authh } from "./firebaseConfig";
// import { useRouter } from 'next/navigation';
import "./style.css"
function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const router = useRouter();
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
        // router.push('/home');
        console.log('User signed up:', user);
        // You can redirect the user to another page or perform any other actions upon successful sign-up
      } catch (error) {
        console.error('Error signing up:', error.message);
      }
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
              required
            />
          </div>
          <button type="submit" className="submit-button">Sign up</button>
        </form>
      </div>
    );
  }
  export default SignIn