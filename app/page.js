import NewProductForm from '@/components/base/NewProductForm';
import Products from '@/components/base/Products';
import React from 'react';

const Home = () => {
  return (
    <div className="productWrapper">
      <Products />
      <NewProductForm />
    </div>
  );
};

export default Home;