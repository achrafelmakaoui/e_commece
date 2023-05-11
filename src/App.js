import './App.css';
import {BrowserRouter,Routes,Route, Navigate } from "react-router-dom";
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
import Login from './components/Login/Login';
import { useSelector } from 'react-redux';
import Register from './components/Register/Register';
import SettingIcon from './components/SettingIcon/SettingIcon';
import Setting from './components/Seting/Setting';
import Alert from './components/Alert/Alert'

function App() {

  const user = useSelector((state) => state.user.currentUser);

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop/>
          {user && <Navbar/>}
          <Routes>
            {user ? (
              <>
                  <Route path="/" exact element={<><Slider/><Card/><Services/><Reviews/><Support/><SettingIcon/></>}/>
                  <Route path='/product'  element={<><Product/></> }/>
                  <Route path='/success'  element={<><Alert/></> }/>
                  <Route path='/product/:id'  element={<><SlideBanner/><ProductId/></> }/>
                  <Route path='/cart'  element={<><Cart/></> }/>
                  <Route path='/setting'  element={<><Setting/></> }/>
              </>
            ):(
            <>
            <Route path='/login'  element={<><Login/></> }/>
            <Route path='/register'  element={<><Register/></> }/>
            </>
            )}
            <Route path='/login' element={user ? <Navigate to='/'/> : <Navigate to="/login" />} />
            <Route path='*' element={user ? <Navigate to='/'/> : <Navigate to="/login" />} />

          </Routes>
        {user && <Footer/>}
      </BrowserRouter>
    </div>
  );
}

export default App;

