import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';

const Home = () => {
  const [producList, setProducList] = useState([]);
  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data, length }) => {
        setProducList(data);
      });
  }, []);
  return (
    <div>
      <Navbar />
      <h1>Hola Cristian</h1>
      {producList.map((product) => (
        <div>{product.name}</div>
      ))}
    </div>
  );
};

export default Home;
