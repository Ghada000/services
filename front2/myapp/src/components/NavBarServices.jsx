import Link from 'next/link';
import styles from './NavServices.css'; // Adjust path based on your project structure

const NavbarServices = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li>
          <Link href="/HouseKeeping">
            Housekeeping
          </Link>
        </li>
        <li>
          <Link href="/Babysitting">
            Babysitting
          </Link>
        </li>
        <li>
          <Link href="/Senior">
            Senior Assistance
          </Link>
        </li>
       
      </ul>
    </nav>
  );
};

export default NavbarServices;
