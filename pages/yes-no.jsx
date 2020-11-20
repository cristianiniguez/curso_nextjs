import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const YesNo = () => {
  const [state, setState] = useState({
    click: 0,
    answer: '...',
  });
  useEffect(() => {
    setState({ ...state, answer: '...' });
    const answer = Math.random() > 0.5 ? 'Yes 🥑' : 'No ❌';
    setTimeout(() => {
      setState({ ...state, answer });
    }, 1500);
  }, [state.click]);
  const handleClick = () => {
    setState({ ...state, click: (state.click + 1) % 2 });
  };
  return (
    <main>
      <section>
        <div className='container p-4 text-center'>
          <h2 className='answer m-4'>{state.answer}</h2>
          <button className='btn btn-success' onClick={handleClick}>
            Try Again
          </button>
          <p className='m-4'>
            <Link href='/'>
              <a className='btn btn-info'>Go to Home</a>
            </Link>
          </p>
        </div>
      </section>
      <style>
        {`
          .answer {
            font-size: 4em;
          }
        `}
      </style>
    </main>
  );
};

export default YesNo;
