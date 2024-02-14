import Link from 'next/link';


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
          <Link href="/babysittingPage">
            <a>Babysitting</a>
          </Link>
        </li>
        <li>
          <Link href="/seniorPage">
            <a>Senior Assistance</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
