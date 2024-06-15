import logo from './logo.svg';
import './App.css';
import Home from './Componant/Home/Home';
import Create from './Componant/Create/Create';
import Edit from './Componant/Edit/Edit';
import Login from './Componant/Login/Login';
import Register from './Componant/Register/Register';
import Navbar from './Componant/Navbar/Navbar';
import { BrowserRouter , Routes , Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
        <BrowserRouter>
      <Navbar/>
            <Routes>
              <Route path="/" element={<Register/>}/>
              <Route path="/create" element={<Create/>}/>
              <Route path="/edit/:id" element={<Edit/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/home" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
