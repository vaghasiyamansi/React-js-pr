import logo from './logo.svg';
import './App.css';
import Emojitask from './Emoji task/Emoji';

function App() {
  return (
    <div className="items-center flex justify-center border border-black rounded-2xl bg-blue-200 w-[870px] h-[400px] mt-36 ms-auto me-auto pb-8 pt-3 ps-1" >
    <div className=" p-10 text-[50px] font-bold border-solid border-4 border-black mt-4 w-[800px] text-center text-red-500
    bg-black rounded-2xl">
         <Emojitask E1="😊" E2="😊" E3="🤣"/>
    </div>
    </div>
  );
}

export default App;
