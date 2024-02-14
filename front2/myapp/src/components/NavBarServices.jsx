import Link from 'next/link';
import styles from './Navbar.module.css'; // Import CSS module for styling

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li>
          <Link href="/housekeepingPage">
            <a>Housekeeping</a>
          </Link>
        </li>
        <li>
          <Link href="/babysitting">
            <a>Babysitting</a>
          </Link>
        </li>
        <li>
          <Link href="/senior-assistance">
            <a>Senior Assistance</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
