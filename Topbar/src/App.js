import './App.css';
import Carasoul from './Carasoul';
import Accesories from './components/Accesories';
import Footer from './components/Footer';
import Pictures from './components/Pictures';
import Shoes from './components/Shoes';
import Sneakers from './components/Sneakers';
import Navbar from './Navbar';

function App() {
  return (
    <div >
     
      <Navbar/>
      <Carasoul/>
      <Sneakers/>
      
      <Shoes/> 
      <Accesories/>
      <Pictures/>
      <Footer/>
      
    </div>
  );
}

export default App;
