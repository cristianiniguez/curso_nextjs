import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <main>
      <section>
        <div className='container p-4 text-center'>
          <h1>Welcome to Platzi Avo 🥑</h1>
          <p>In this place you will find a variety of Avocados, each one you can meet in details</p>
          <p>
            Start{' '}
            <Link href='/'>
              <a>here</a>
            </Link>{' '}
            and make a clic on any avocado to see more about it
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
