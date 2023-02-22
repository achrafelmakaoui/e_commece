
import './App.css';
import Navbar from './components/navbar/Navbar';
import Card from './components/card/Card';
import Services from './components/servicee/Services';
import Reviews from './components/reviews/Reviews';
import { Support } from './components/support/Support';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Card/>
      <Services/>
      <Reviews/>
      <Support/>
      <Footer/>
    </div>
  );
}

export default App;