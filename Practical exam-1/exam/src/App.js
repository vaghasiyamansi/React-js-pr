import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Componant/Navbar';
import Home from './Componant/Home';
import About from './Componant/About';
import Contact from './Componant/Contact';
import Login from './Componant/Login';
import Img from './Componant/Img';
import Img_1 from './Aseet/Image-1.jpg';
import Img_2 from './Aseet/Image-2.jpg';
import Img_3 from './Aseet/Image-3.jpg';
import style from '../src/Componant/Style.css'



function App() {
  return (
    <>
    
    <BrowserRouter>
       <Navbar/>
          <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/about' element={<About/>}/>
             <Route path='/contact' element={<Contact/>}/>
             <Route path='/login' element={<Login/>}/>
             <Route path='/img' element={<Img/>}/>
          </Routes>
     </BrowserRouter>

<div className="sec-1"> 
 <Home name = "Tiger Sroff" course = "fullstack" img={Img_1} discri ="lorem ipsum dolor amet is ffosfc" button="View More"/>
<Home name = "Akshay kumar" course = "flutter" img={Img_2} discri ="lorem ipsum dolor amet is ffosfc"button="View More"/>
<Home name = "Dipika padukon" course = "python" img={Img_3} discri ="lorem ipsum dolor amet is ffosfc" button="View More"/>
</div>
    </>
);
}

export default App;
