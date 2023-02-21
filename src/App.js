
import './App.css';
import Navbar from './components/navbar/Navbar';
import Slider from './components/slider/Slider';
import Card from './components/card/Card';
import Services from './components/servicee/Services';
import Vedio from './components/vedio/Vedio';
import Reviews from './components/reviews/Reviews';
import { Support } from './components/support/Support';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Card/>
      <Services/>
      <Reviews/>
      <Support/>
    </div>
  );
}

export default App;