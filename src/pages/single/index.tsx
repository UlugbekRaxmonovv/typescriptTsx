import axios from "axios";
import { Product } from "../../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer";
import { VscChevronDown } from "react-icons/vsc";
import { VscChevronUp } from "react-icons/vsc";


const Single: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    useEffect(() => {
      axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then(res => {
          setProduct(res.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, [id]);
    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    return (
      <>
        <div className="container">
            <div className="flex py-[40px] items-start justify-between">
                <div className="w-[600px] h-[600px] object-contain shadow-lg  px-[20px] flex justify-center items-center"> 
                <img src={product?.image} alt="" className="w-[400px] h-[400px]" />
                </div>
                <div className="">
           <p className="w-[600px] text-2xl">{product?.description}</p>
                <h1 className="py-[20px] text-xl w-[400px]">{product?.title}</h1>
           <p className="font-bold text-xl">Price: ${product?.price}</p>
           <div className="flex items-center  justify-between px-[20px] my-[20px] border rounded w-[150px] h-[40px]">
           <div className="">
                        <button className="text-2xl scale-[1.05] cursor-pointer"  disabled={count <= 1} onClick={decrement}><VscChevronDown/></button>
                    </div>
                    <div className="">
                       <span>{count}</span>
                    </div>
                    <div className="">
                        <button className="text-xl scale-[1.05] cursor-pointer" onClick={ increment}><VscChevronUp/></button>
                    </div>
                </div>
                </div>

               
            </div>
          
           
        </div>
        <Footer/>
      </>
    );
}

export default Single;
