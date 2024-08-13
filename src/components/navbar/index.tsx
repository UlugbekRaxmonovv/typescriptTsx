import { Link } from "react-router-dom";

const Index = () => {
    return (
       <header className="  static top-[0px] left-[0px] z-50 py-[20px]   bg-slate-400  " >
        <nav className="container flex  items-center justify-between">
            <h1 className="text-white text-[30px]">Logo</h1>
            <ul className="flex  gap-[20px]">
            <li>
                    <Link to="/" className="text-white text-[20px]">Home</Link>
                </li>
                <li>
                    <Link to="/" className="text-white text-[20px]">About</Link>
                </li>
                <li>
                    <Link to="/" className="text-white text-[20px]">Katalog</Link>
                </li>
                <li>
                    <Link to="/" className="text-white text-[20px]">Login</Link>
                </li>
            </ul>

        </nav>
       </header>
    );
}

export default Index;
