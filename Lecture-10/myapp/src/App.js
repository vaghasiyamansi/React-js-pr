import logo from './logo.svg';
import './App.css';

function App() {
  const[count, setCount] = useState(1)

  const myFun1 = () => {
        console.log("click");
        setCount(count + 1)
  }
  const myFun2 = () => {
   console.log("click");
   setCount(count - 1)
 }
  return (

       <div className="App">
        <div style={{background: "radial-gradient( circle 311px at 8.6% 27.9%,  rgba(62,147,252,0.57) 12.9%, rgba(239,183,192,0.44) 91.2%" , height:"500px" , width:"900px" , position:"absolute" , left:"20%"}} className="items-center flex justify-center mt-24 border-4 border-black">
         <button onClick={myFun1}>Increment</button>

         <h1 style={{fontSize:"100px" , color:"brown", marginLeft:"50px" , marginRight:"50px" , fontWeight:"bolder"}}>{count}</h1>

         <button onClick={myFun2}>Decrement</button>
         </div>

         <Table/>
       </div>
   );
}

export default App;
