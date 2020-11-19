import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import Loading from '@components/Loading';
import Error from '@components/Error';
import NotFound from '@components/NotFound';

const ProductItem = () => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    product: {},
  });
  const {
    query: { productId },
  } = useRouter();
  useEffect(() => {
    setState({ ...state, loading: true, product: {} });
    axios
      .get(`/api/avo/${productId}`)
      .then(({ data }) => {
        setState({ ...state, loading: false, product: data });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, []);
  const { loading, error, product } = state;
  return (
    <main>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : Object.keys(product).length > 0 ? (
        <>
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
        </>
      ) : (
        <NotFound />
      )}
    </main>
  );
};

export default ProductItem;
