import logo from './logo.svg';
import './App.css';
import Header from './Componant/Header/Header';
import Navbar from './Componant/Navbar/Navbar';
import Footer from './Componant/Footer/Footer';

import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Error  from './Componant/Error/Error';
// import Catagories from './Componant/Catagories/Catagories';
import Home from './Pages/Home/Home';
import Product from './Componant/Populer-Product/Product';
import Contact from './Pages/Contact/Contact';
import Login from '././Pages/Pages/Login';
import Sign from '././Pages/Pages/Sign';
import Wishlist from './Componant/Wishlist/Wishlist'
import Signin from '././Pages/Pages/Login';
import About from '././Pages/Pages/About';
import Cart from './Componant/Cart/Cart'


// redux
import {Provider} from "react-redux";
import store from "./Store";
import Detail from './Componant/Populer-Product/Detail';

function App() {
  return (
    <>
    <div className='App'>

      <Provider store = {store}>


      <BrowserRouter>
              <Header/>
              <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<Error/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/sign" element={<Sign/>}/>
            <Route path="/wishlist" element={<Wishlist/>}/>
            <Route path="/product/:id" element={<Product/>}/> 
            <Route path="/details/:id" element={<Detail/>}/> 

            <Route path="/about" element={<About/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
               <Footer/>
      </BrowserRouter>
      </Provider>
    </div>
    </>
  );
}

export default App;
