import './Product.css';
import SlideBanner from './components/banner/SlideBanner';
import Filter from './components/filter/Filter';


function Product() {
    return (
      <div className="Product">
        <SlideBanner/>
        <Filter/>
      </div>
    );
  };
  
  export default Product;