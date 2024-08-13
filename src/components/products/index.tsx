import React, { useEffect, useState } from 'react';
import { getProducts, Product } from '../../api';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
         setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className='container grid grid-cols-4 gap-[20px]'>
      {products.map(product => (
        <div key={product.id} className='shadow-md p-6 rounded-lg'>
          <img src={product.images[0]}  className='w-full h-64 object-contain  hover:scale-[1.05] cursor-pointer transition' />
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
