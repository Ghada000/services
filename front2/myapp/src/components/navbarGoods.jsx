// components/NavbarGoods.js
import React from 'react';
import Link from 'next/link';
import './nav.css'
const NavbarGoods = () => {
  return (
    <nav>
      <ul>
       
        <li>
          <Link href="/exchange">
            Exchange
          </Link>
        </li>
        <li>
          <Link href="/borrow">
            Borrow
          </Link>
        </li>
        <li>
          <Link href="/home">
            Home
          </Link>
        </li>
        <li>
          <Link href="/addProduct">
            add product 
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarGoods;
