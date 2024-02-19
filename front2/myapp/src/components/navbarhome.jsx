// NavbarHome.jsx
import React from 'react';
import Link from 'next/link';
import styles from './navhome.css'; 

const NavbarHome = () => {
 
  return (
    <nav className={styles.nav}>
      <div>
     
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
          <div class="left-text">
    <Link href="/">
      <span className={styles.homeLink}>signout</span>
    </Link>
  </div>
        </ul>
      </div>
    </nav>
  );
};
export default NavbarHome;
