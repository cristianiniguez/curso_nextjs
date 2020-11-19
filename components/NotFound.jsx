import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <section>
      <div className='container p-4 text-center'>
        <p className='h4'>Not Found 🥑❓</p>
        <Link href='/'>
          <a className='btn btn-success m-4'>Go Back</a>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
