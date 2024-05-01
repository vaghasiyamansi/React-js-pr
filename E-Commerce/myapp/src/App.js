import logo from './logo.svg';
import './App.css';
import Header from './Componant/Header/Header';
import Navbar from './Componant/Navbar/Navbar';
import Footer from './Componant/Footer/Footer';

import Error  from './Componant/Error/Error';
// import Catagories from './Componant/Catagories/Catagories';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';


function App() {
  return (
    <>
    <div className='App'>
      <BrowserRouter>
              <Header/>
              <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<Error/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
               <Footer/>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
