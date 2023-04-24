import './App.css';
import {BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Card from './components/card/Card';
import Services from './components/servicee/Services';
import Reviews from './components/reviews/Reviews';
import { Support } from './components/support/Support';
import Footer from './components/footer/Footer';
import  Slider  from './components/Firstpg/Slider';
import ScrollToTop from './Scrolltotop';
import ProductId from './components/ProductId/ProductId';
import Product from './Product';
import SlideBanner from './components/banner/SlideBanner';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop/>
        <Navbar/>
          <Routes>
            <Route path="/" exact element={<><Slider/><Card/><Services/><Reviews/><Support/></>}/>
            <Route path='/product'  element={<><Product/></> }/>
            <Route path='/productid'  element={<><SlideBanner/><ProductId/></> }/>
            <Route path='/cart'  element={<><Cart/></> }/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;