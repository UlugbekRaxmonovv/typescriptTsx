import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/footer";
import { Link } from "react-router-dom";
import { ProductsSchemaCart, addToCart } from "../../context/slice/heartSlice";
import { toggleHeart } from "../../context/slice/cartSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoCart, IoCartOutline } from "react-icons/io5";
import Empty from "../../components/empty";
const Wishlist = () => {
    const cart:ProductsSchemaCart[] = useSelector((s: any) => s.heart.value );
    const wishes= useSelector((s:any) => s.cart.value);
    console.log(wishes);
    const dispatch = useDispatch(); 
    ""
    return (
       <>
       <div className="container  py-[50px]">
       {
                wishes?.length ? 

                <div className=' phone:grid phone:grid-cols-2 phone:gap-[5px] phone:px-[10px]  desktop:grid desktop:grid-cols-4 desktop:gap-[20px]'>
                {wishes.map((product:any) => (
                  <div key={product.id} className='shadow-md p-6 rounded-lg phone:w-[160px] phone:h-[250px]'>
                    <img
                      src={product.images[0]}
                      className='desktop:w-full desktop:h-64 phone:h-[100px]  object-contain hover:scale-[1.05] cursor-pointer transition'
                    />
                    <Link to={`/single/${product.id}`}>
                      <p className='p1'>{product.description}</p>
                    </Link>
                    <div className="flex items-center justify-between py-[20px]">
                      <p className='font-bold'>Price: ${product.price}</p>
                      <div className="flex gap-[20px] px-[10px] justify-center items-center">
                        <div className="text-lg cursor-pointer">
                          <span onClick={() => dispatch(toggleHeart(product))}>
                            {wishes.some((item: any) => item.id === product.id) ? <FaHeart /> : <FaRegHeart />}
                          </span>
                        </div>
                        <div className="text-2xl cursor-pointer">
                          {cart.some((cartItem) => cartItem.id === product.id)
                            ? <IoCart onClick={() => dispatch(addToCart(product))} />
                            : <IoCartOutline onClick={() => dispatch(addToCart(product))} />}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              :
              <Empty/>

            }
       </div>
        
       <Footer/>
       </>
    );
}

export default Wishlist;
