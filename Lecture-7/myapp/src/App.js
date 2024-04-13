import logo from './logo.svg';
import './App.css';

function App() {
  return (
     <div className="App">
      <div style={{display:"flex" , flexWrap:"wrap" , justifyContent:"center"}}>
        {Data.map((cvalue,ind,arr )=>{
             return <Cardprops key={ind} name={cvalue.name} course={cvalue.course} discri={cvalue.discri} img={cvalue.img}/>
        })}
      </div>
    </div> 

  );
}

export default App;
