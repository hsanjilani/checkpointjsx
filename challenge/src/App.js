//import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Aboutus from './component/Aboutus';
import Projet from './component/Projet.js';
import Contact from './component/Contact';
import Footer from './component/Footer';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Aboutus/>
      <Projet/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
