import Product from '../../components/products'
import CategoryListComponent from '../../components/category'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer';
const Home = () => {
    return (
        <div>
            <Navbar/>
            <CategoryListComponent/>
           <Product/>
            <Footer/>
        </div>
    );
}

export default Home;
