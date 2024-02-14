import Link from 'next/link';
import styles from './NavServices.css'; 

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
        <li>
          <Link href="/AddService">
            Add 
          </Link>
        </li>
       
      </ul>
    </nav>
  );
};

export default NavbarServices;
