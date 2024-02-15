'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import SignUp from '../pages/signup'; // Import your signup component here
import SignIn from '../pages/signin'; 
import { MdPerson } from "react-icons/md";
import { BsBookmarkPlusFill } from "react-icons/bs";
import './nav.css'
export default function Navbar() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
    setShowSignIn(false); // Close signin form if it's open
  };

  const toggleSignIn = () => {
    setShowSignIn(!showSignIn);
    setShowSignUp(false); // Close signup form if it's open
  };

  return (
      <nav className='nav-cont'>
        <Link href="/" className="home-link">Home</Link>
        <div className="nav-buttons">
          <ul>
            <li>
              <BsBookmarkPlusFill onClick={toggleSignUp} size={35}/>
            </li>
            <li>
              <MdPerson onClick={toggleSignIn} size={32}/>
            </li>
          </ul>
        </div>
        {showSignUp && <SignUp />}
        {showSignIn && <SignIn />}
      </nav>
    );
  }