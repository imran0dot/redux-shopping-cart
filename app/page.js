import NewProductForm from '@/components/base/NewProductForm';
import Products from '@/components/base/Products';
import React from 'react';

export const metadata = {
  title: 'Redux cart',
  description: 'created cart demo using redux ',
}

const Home = () => {
  return (
    <div className="productWrapper">
      <Products />
      <NewProductForm />
    </div>
  );
};

export default Home;