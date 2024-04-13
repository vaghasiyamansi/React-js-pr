// import logo from './logo.svg';
import './App.css';
import Com1 from "./Use-context/Com-1";
import {createContext} from 'react';

const Context1 = createContext();

function App() {
  return (
        <div className="App">
          <Context1.Provider value="abc">
            <Com1/>
          </Context1.Provider>
        </div>
  );
}

export {Context1}
export default App;
