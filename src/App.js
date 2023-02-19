
import './App.css';
import Navbar from './components/navbar/Navbar';
import Slider from './components/slider/Slider';
import Card from './components/card/Card';
import Services from './components/servicee/Services';
import Vedio from './components/vedio/Vedio';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Card/>
      <Services/>
    </div>
  );
}

export default App;