// NavbarHome.jsx
import React from 'react';
import Link from 'next/link';
import { getAuth, signOut } from 'firebase/auth'; 
import styles from './navhome.css'; 

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
    <nav className={styles.nav} >
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
            <Link href="/goods">
              <span>Goods</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.navButtons} style={{"backgroundColor":"red"}}>
        {user1 && (
          <>
            <img src={user1.Identifier} alt="Profile Picture" />
            <span>{user1.name}</span>
            <button onClick={handleSignOut}>Sign Out</button>
          </>
        )}
      </div>
    </nav>
  );
};
export default NavbarHome;
