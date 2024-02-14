import React from 'react';
import Link from 'next/link';

const NavbarHome = ({ user, signOut }) => {
  return (
    <nav>
      <div>
        <Link href="/home">
          <a>Home</a>
        </Link>
        <Link href="/services">
          <a>Services</a>
        </Link>
        <Link href="/goods">
          <a>Goods</a>
        </Link>
      </div>
      <div>
        <img src={user.profilePicture} alt="Profile Picture" />
        <span>{user.name}</span>
        <button onClick={signOut}>Sign Out</button>
      </div>
    </nav>
  );
};

export default NavbarHome;
