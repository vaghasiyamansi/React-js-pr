import logo from './logo.svg';
import './App.css';
import Navbar from './Componant/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './Componant/Home';
import Help from './Componant/Help';
import Product from './Componant/Product';
import Setting from './Componant/Setting';
import Blog from './Componant/Blog';

function App() {
  return (
         <BrowserRouter>
        <Navbar/>
             <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/blog' element={<Blog/>}/>
              <Route path='/help' element={<Help/>}/>
              <Route path='/product' element={<Product/>}/>
              <Route path='/setting' element={<Setting/>}/>
             </Routes>
         </BrowserRouter>
  );
}

export default App;
