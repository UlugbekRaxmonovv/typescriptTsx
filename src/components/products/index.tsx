import React, { useEffect, useState } from 'react';
import { Product, getProducts } from '../../api';
import { Link } from 'react-router-dom';
import Loading from '../../loading'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { ProductsSchemaCart, addToCart } from '../../context/slice/heartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { IoCart, IoCartOutline } from 'react-icons/io5';
import { toggleHeart} from '../../context/slice/cartSlice';
const ProductList: React.FC = () => {
  const dispatch = useDispatch(); 
  const cart:ProductsSchemaCart[] = useSelector((s: any) => s.heart.value );
  const wishes= useSelector((s:any) => s.cart.value);
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const [loading, setLoading] = useState<boolean>(false); //
  const itemsPerPage = 8; 

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error)
      }
      setLoading(false);
      
    };

    fetchProducts();
  }, []);

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <div className='container py-[40px]'>
    {
        loading ?
         <Loading count={8} /> : 
         <></>
    }
      <div className='grid grid-cols-4 gap-[20px]'>
        {currentProducts.map(product => (
          <div key={product.id} className='shadow-md p-6 rounded-lg'>
            <img src={product.images[0]} className='w-full h-64 object-contain hover:scale-[1.05] cursor-pointer transition' />
         <Link to={`/single/${product.id}`}>   <p className='p1'>{product.description}</p></Link>
          <div className="flex items-center justify-between py-[20px]">
            <p className='font-bold'>Price: ${product.price}</p>
            <div className="flex gap-[20px] px-[10px]  justify-center items-center">
            <div className="text-lg cursor-pointer" >
              <span  onClick={() => dispatch(toggleHeart(product))}>
              {
            wishes?.some((item:any) => item.id === product.id) ? <FaHeart />
            : <FaRegHeart />
          }

              </span>
          
            </div>
            <div className="text-2xl cursor-pointer">
            {
                    cart?.some((cart) => cart.id === product.id) ? 
                    <IoCart  onClick={() => dispatch(addToCart(product))}/>
                    :
                    <IoCartOutline    onClick={() => dispatch(addToCart(product))}/>

                }
             
            </div>
            </div>
          </div>
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
