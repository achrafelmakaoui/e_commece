import './Product.css';
import SlideBanner from './components/banner/SlideBanner';
import Filter from './components/filter/Filter';
// import ProductList from './components/ProductList/ProductList';


function Product() {
    return (
      <div className="Product">
        <SlideBanner/>
        <Filter/>
        {/* <ProductList/> */}
      </div>
    );
  };
  
  export default Product;