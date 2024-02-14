import React from 'react';
import Link from 'next/link';

const NavbarHome = ({ user, signOut }) => {
  return (
    <nav>
      <div>
        <Link href="/home">
          {/* Instead of using <a>, style the link using CSS */}
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
        {/* Check if user exists before accessing its properties */}
        {user && (
          <>
            <img src={user.profilePicture} alt="Profile Picture" />
            <span>{user.name}</span>
            <button onClick={signOut}>Sign Out</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavbarHome;
