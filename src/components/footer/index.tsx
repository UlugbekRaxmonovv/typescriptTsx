import logo from '../../assets/imgs/logo.png';
import { Link } from 'react-router-dom';
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='bg-gray-800 py-10 '>
            <div className="container mx-auto flex flex-wrap justify-between items-start px-4">
                <div className="mb-8">
                    <img src={logo} alt="Copper Pro" className='w-44 h-12 mb-4' />
                    <ul>
                        <li className='text-white text-sm mb-2'>
                            <Link to="#">© 2021 “Copper Pro”</Link>
                        </li>
                        <li className='text-white text-sm mb-2'>
                            <Link to="#">Все права защищенны</Link>
                        </li>
                        <li className='text-white text-sm'>
                            <Link to="#">Политика конфиденциальности</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-wrap gap-[80px]">
                    <div>
                        <h1 className='text-2xl text-white mb-4'>Навигация</h1>
                        <ul>
                            <li className='text-white  h-[20px] w-[60px]  text-sm mb-2 hover:border-b-2 border-white'>
                                <Link to="#">Каталог</Link>
                            </li>
                            <li className='text-white  h-[20px]  w-[60px] text-sm mb-2 hover:border-b-2 border-white'>
                                <Link to="#">Новости</Link>
                            </li>
                            <li className='text-white  h-[20px]  w-[60px] text-sm mb-2 hover:border-b-2 border-white'>
                                <Link to="#">Доставка</Link>
                            </li>
                            <li className='text-white  h-[20px]  w-[60px] text-sm mb-2 hover:border-b-2 border-white'>
                                <Link to="#">О нас</Link>
                            </li>
                            <li className='text-white  h-[20px]  w-[60px] text-sm mb-2 hover:border-b-2 border-white'>
                                <Link to="#">Контакты</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-2xl text-white mb-4'>Каталог</h1>
                        <ul>
                            <li className='text-white  h-[20px] text-sm mb-2 hover:border-b-2 border-white'>
                                <Link to="#">Для эфирных масел</Link>
                            </li>
                            <li className='text-white h-[20px] text-sm mb-2 hover:border-b-2 border-white'>
                                <Link to="#">Для гидролатов</Link>
                            </li>
                            <li className='text-white  h-[20px] text-sm mb-2 hover:border-b-2 border-white'>
                                <Link to="#">Медная посуда</Link>
                            </li>
                            <li className='text-white   h-[20px] text-sm mb-2 hover:border-b-2 border-white'>
                                <Link to="#">Аксессуары из меди</Link>
                            </li>
                            <li className='text-white  h-[20px] text-sm mb-2 hover:border-b-2 border-white'>
                                <Link to="#">Индивидуальный заказ</Link>
                            </li>
                            <li className='text-white  h-[20px] text-sm mb-2 hover:border-b-2 border-white'>
                                <Link to="#">Скидки и предложения</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-2xl text-white mb-4'>Контакты</h1>
                        <ul>
                            <li className='text-white  h-[20px] text-sm mb-2 hover:border-b-2 border-white'>
                                <Link to="#">Бажана 8-Б, Киев</Link>
                            </li>
                            <li className='text-white   h-[20px] text-sm mb-2 hover:border-b-2 border-white'>
                                <Link to="#">02132 Украина</Link>
                            </li>
                            <li className='text-white  h-[20px] text-sm mb-2 hover:border-b-2 border-white'>
                                <Link to="#">+38 (096) 990 67 56</Link>
                            </li>
                            <li className='text-white  h-[20px] text-sm mb-2 hover:border-b-2 border-white'>
                                <Link to="#">a.alambik@gmail.com</Link>
                            </li>
                            <li className='text-white  h-[20px] text-sm mb-2 hover:border-b-2 border-white'>
                                <Link to="#">Индивидуальный заказ</Link>
                            </li>
                            <li className='flex items-center gap-4 mt-4'>
                                <BsFacebook className="text-white text-2xl cursor-pointer" />
                                <FaInstagramSquare className="text-white text-2xl cursor-pointer" />
                                <FaTwitter className="text-white text-2xl cursor-pointer" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
