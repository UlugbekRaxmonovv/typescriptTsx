import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { ProductsSchemaCart } from "../../context/slice/heartSlice";
const Index = () => {
    const cart:ProductsSchemaCart[] = useSelector((s: any) => s.heart.value);
    const wishes= useSelector((s:any) => s.cart.value);
    let {pathname} = useLocation();
    if(pathname.includes('/login') || pathname.includes('/admin')){
        return <></>;
    }
    return (
       <header className="  static top-[0px] left-[0px] z-50 py-[20px]   bg-slate-400  " >
        <nav className="container flex  items-center justify-between">
          <Link to={'/'}>  <h1 className="text-white text-[30px]">Logo</h1></Link>
            <ul className="flex  gap-[20px]">
            <li>
                    <Link to="/" className="text-white text-[20px]">Home</Link>
                </li>
                <li className="relative">
                    <Link to="/about" className="text-white text-[20px]">Korzinka</Link>
                   <div className="absolute  top-[-10px] left-[75px]">
                   <span className="px-[2px] py-[1px] bg-red-500 rounded-lg text-white">{ cart.length }</span>
                   </div>
                </li>
                <li className="relative">
                    <Link to="/wishlist" className="text-white text-[20px]">Wishlist</Link>
                    <div className="absolute  top-[-10px] left-[70px]">
                   <span className="px-[2px] py-[1px] bg-red-500 rounded-lg text-white">{ wishes.length }</span>
                   </div>
                </li>
                <li>
                    <Link to="/login" className="text-white text-[20px]">Login</Link>
                </li>
            </ul>

        </nav>
       </header>
    );
}

export default Index;
