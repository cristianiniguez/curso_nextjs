import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios';

export const getStaticProps = async () => {
  const { data: productList } = await axios.get('https://curso-nextjs-chi.vercel.app/api/avo');
  return {
    props: {
      productList,
    },
  };
};

const Home = ({ productList }) => {
  return (
    <>
      <Head>
        <title>Platzi Avo 🥑</title>
      </Head>
      <main>
        <section>
          <div className='container p-4 text-center'>
            <h1>Platzi Avo 🥑</h1>
            <p>
              <Link href='/yes-no'>
                <a>Should I eat and Avo today?</a>
              </Link>
            </p>
            <div className='grid m-4'>
              {productList.map((product) => (
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
    </>
  );
};

export default Home;
