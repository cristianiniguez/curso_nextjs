import React from 'react';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

const Layout = ({ children }) => {
  return (
    <div id='layout'>
      <Navbar />
      {children}
      <Footer />
      <style>
        {`
          #layout {
            display: flex;
            flex-direction: column;
            min-height: 100vh
          }
          #layout main {
            flex-grow: 1
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
