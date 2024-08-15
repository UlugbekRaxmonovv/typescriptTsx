import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { ProductsSchemaCart } from "../../context/slice/heartSlice";
import { useState, useEffect } from "react";
import { TbMenuDeep } from "react-icons/tb";
import { VscChromeClose } from "react-icons/vsc";

const Index = () => {
    const cart: ProductsSchemaCart[] = useSelector((state: any) => state.heart.value);
    const wishes = useSelector((state: any) => state.cart.value);
    const { pathname } = useLocation();
    
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    if (pathname.includes('/login') || pathname.includes('/admin')) {
        return null;
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="static top-0 left-0 z-50 py-5 bg-slate-400">
            <nav className="container flex items-center justify-between">
                <Link to={'/'}>
                    <h1 className="text-white text-3xl">Logo</h1>
                </Link>
                <ul className={`desktop:flex desktop:gap-5 ${isMenuOpen ? 'flex flex-col  gap-[40px] py-[150px] absolute top-0 h-full bg-accent w-full items-center text-center z-50 bg-slate-400' : 'hidden'}`}>
                    <li>
                        <Link to="/" className="text-white text-xl">Home</Link>
                    </li>
                    <li className="relative">
                        <Link to="/about" className="text-white text-xl">Korzinka</Link>
                        <div className="absolute -top-2 left-18 w-4 h-4 bg-gray-500 rounded-full text-white grid place-items-center">
                            <span className="text-xs">{cart.length}</span>
                        </div>
                    </li>
                    <li className="relative">
                        <Link to="/wishlist" className="text-white text-xl">Wishlist</Link>
                        <div className="absolute -top-2 left-18 w-4 h-4 bg-gray-500 rounded-full text-white grid place-items-center">
                            <span className="text-xs">{wishes.length}</span>
                        </div>
                    </li>
                    <li>
                        <Link to="/login" className="text-white text-xl">Login</Link>
                    </li>
                </ul>
                {
                        isMenuOpen ? 
                        <VscChromeClose onClick={toggleMenu} className="text-white cursor-pointer text-4xl z-50 desktop:hidden" />
                        :
                        <TbMenuDeep onClick={toggleMenu} className="text-white cursor-pointer text-4xl z-50 desktop:hidden" />

                       }
            </nav>
        </header>
    );
}

export default Index;
