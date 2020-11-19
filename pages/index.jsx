import React, { useState, useEffect } from 'react';

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
    <main>
      <h1>Hola Cristian</h1>
      {producList.map((product) => (
        <div>{product.name}</div>
      ))}
    </main>
  );
};

export default Home;
