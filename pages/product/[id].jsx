import React from 'react';
import Head from 'next/head';
import axios from 'axios';

export const getStaticPaths = async () => {
  const { data: productList } = await axios.get('https://curso-nextjs-chi.vercel.app/api/avo');
  const paths = productList.map(({ id }) => ({ params: { id } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const id = params?.id;
  const { data: product } = await axios.get(`https://curso-nextjs-chi.vercel.app/api/avo/${id}`);
  return {
    props: {
      product,
    },
  };
};

const ProductItem = ({ product }) => {
  return (
    <>
      <Head>
        <title>{product.name} 🥑</title>
      </Head>
      <main>
        <section>
          <div className='container p-4'>
            <div className='row'>
              <div className='col-md-8 offset-md-2 d-flex align-items-center'>
                <img src={product.image} alt={product.name} />
                <div>
                  <h2>{product.name}</h2>
                  <p>{product.price}</p>
                  <p className='badge badge-success p-2'>SKU: {product.sku}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='container p-4'>
            <div className='row'>
              <div className='col-md-8 offset-md-2'>
                <h3>About this avocado</h3>
                <p>{product.attributes.description}</p>
                <hr />
                <table className='table'>
                  <thead>
                    <tr>
                      <th colSpan={2}>Attributes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Shape</th>
                      <td>{product.attributes.shape}</td>
                    </tr>
                    <tr>
                      <th>Hardiness</th>
                      <td>{product.attributes.hardiness}</td>
                    </tr>
                    <tr>
                      <th>Taste</th>
                      <td>{product.attributes.taste}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductItem;
