import Product from '../../components/products'
import CategoryListComponent from '../../components/category'
import Footer from '../../components/footer';
const Home = () => {
    return (
        <div>
            <CategoryListComponent/>
           <Product/>
           <Footer/>
        </div>
    );
}

export default Home;
