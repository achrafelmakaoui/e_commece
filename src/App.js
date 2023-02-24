
import './App.css';
import {BrowserRouter, Routes,Route} from "react-router-dom";

import Navbar from './components/navbar/Navbar';
import Card from './components/card/Card';
import Services from './components/servicee/Services';
import Reviews from './components/reviews/Reviews';
import { Support } from './components/support/Support';
import Footer from './components/footer/Footer';
import  Slider  from './components/Firstpg/Slider';
import ScrollToTop from './Scrolltotop';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<><Slider/><Card/><Services/><Reviews/><Support/></>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;