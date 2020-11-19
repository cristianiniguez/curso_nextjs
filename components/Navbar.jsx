import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand navbar-dark bg-primary'>
      <div className='container'>
        <Link href='/'>
          <a className='navbar-brand'>Platzi Avo</a>
        </Link>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <Link href='/about'>
              <a className='nav-link'>About</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
