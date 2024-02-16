// NavbarHome.jsx
import React from 'react';
import Link from 'next/link';
import { getAuth, signOut } from 'firebase/auth'; 
import styles from './nav.css'; 

const NavbarHome = ({ user }) => {
  const handleSignOut = async () => {
    const auth = getAuth(); 
    try {
      await signOut(auth); 
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <nav className={styles.nav}>
      <div>
        <Link href="/home">
          <span className={styles.homeLink}>Home</span> 
        </Link>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/services">
              <span>Services</span>
            </Link>
          </li>
          <li>
            <Link href="/GoodsPage">
              <span>Goods</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.navButtons}>
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
