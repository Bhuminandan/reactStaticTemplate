import './App.css';
import Navbar from './components/Navbar';
import Aboutme from './components/Aboutme';
import Portfolio from './components/Portfolio';
import Info from './components/Info';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className=' font-sans'>
      <Navbar />
      <Aboutme />
      <Portfolio />
      <Info />
      <Contact />
      <Footer />
    </div>

  );
}

export default App;
