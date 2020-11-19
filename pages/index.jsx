import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

const Home = () => {
  const [producList, setProducList] = useState([]);
  useEffect(() => {
    axios.get('/api/avo').then(({ data }) => {
      setProducList(data);
    });
  }, []);
  return (
    <main>
      <section>
        <div className='container p-4'>
          <h1 className='text-center'>Platzi Avo 🥑</h1>
          <div className='grid m-4'>
            {producList.map((product) => (
              <div key={product.id}>
                <Link href={`/product/${product.id}`}>
                  <a className='card text-body text-decoration-none'>
                    <div className='card-body'>
                      <img src={product.image} alt={product.name} className='w-100' />
                      <h3>{product.name}</h3>
                      <p>{product.price}</p>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style>
        {`
          .grid {
            display: grid;
            gap: 2em;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          }
        `}
      </style>
    </main>
  );
};

export default Home;
