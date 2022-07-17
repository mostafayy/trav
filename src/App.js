  
import './App.css';
import Destinations from './components/Destinations';
import Download from './components/Download';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Offer from './components/Offer';
import ScrollToTop from './components/ScrollToTop';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Tours from './components/Tours';

function App() {
  return (
    <div className="App">
      <ScrollToTop/>
      <Navbar/>
      <Home/>
      <Services/>
      <Destinations/>
      <Offer/>
      <Tours/>
      <Testimonial/>
      <Download/>
      <Footer/>
    </div>
  );
}

export default App;
