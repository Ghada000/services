 // NavbarHome.jsx
import React from 'react';
import Link from 'next/link';
import { getAuth, signOut } from 'firebase/auth'; // Import signOut function from Firebase auth module

const NavbarHome = ({ user }) => {
  const handleSignOut = async () => {
    const auth = getAuth(); // Get the auth instance
    try {
      await signOut(auth); // Sign out the user
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <nav>
      <div>
        <Link href="/home">
          <span className="nav-link">Home</span>
        </Link>
        <Link href="/services">
          <span className="nav-link">Services</span>
        </Link>
        <Link href="/goods">
          <span className="nav-link">Goods</span>
        </Link>
      </div>
      <div>
        {user && (
          <>
            <img src={user.Identifier} alt="Profile Picture" />
            <span>{user.name}</span>
            <button onClick={handleSignOut}>Sign Out</button> 
          </>
        )}
      </div>
    </nav>
  );
};

export default NavbarHome;
