
import rasm from '../../assets/imgs/Empty.png';
import rasm1 from '../../assets/imgs/Empty1.png';
import { Link } from 'react-router-dom';

const Empty = () => {
    return (
        <div className='container mx-auto px-4'>
            <div className="flex flex-col justify-center items-center py-16 gap-4 md:gap-8">
                <div className="relative">
                    <img src={rasm} alt="Main Image" className='w-56 md:w-72 h-auto' />
                    <div className="absolute top-24 left-1/2 transform -translate-x-1/2">
                        <img src={rasm1} alt="Overlay Image" className='w-52 md:w-64 h-auto' />
                    </div>
                </div>
                <h1 className='text-3xl md:text-5xl font-bold'>Спасибо за заказ</h1>
                <p className='w-80 md:w-96 text-lg md:text-2xl text-center'>Мы свяжемся с вами в ближайшее время</p>

                <div className="w-[300px] md:w-112 h-12 bg-orange-800 flex justify-center items-center rounded mt-4">
                    <Link to={'/'}>
                        <button className='text-white text-xl md:text-2xl'>Главная</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Empty;
