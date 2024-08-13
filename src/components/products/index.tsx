import React, { useEffect, useState } from 'react';
import { getProducts, Product } from '../../api';
import { Link } from 'react-router-dom';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 8; 

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

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className='container py-[40px]'>
      <div className='grid grid-cols-4 gap-[20px]'>
        {currentProducts.map(product => (
          <div key={product.id} className='shadow-md p-6 rounded-lg'>
            <img src={product.images[0]} className='w-full h-64 object-contain hover:scale-[1.05] cursor-pointer transition' />
         <Link to={`/single/${product.id}`}>   <p className='p1'>{product.description}</p></Link>
            <p className='font-bold'>Price: ${product.price}</p>
          </div>
        ))}
      </div>
      
      <div className='flex justify-center mt-8'>
        {Array.from({ length: Math.ceil(products.length / itemsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 mx-1 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
