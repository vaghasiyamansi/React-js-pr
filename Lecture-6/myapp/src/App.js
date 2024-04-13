import logo from './logo.svg';
import './App.css';
import card from './Card-demo/Card';
import Img_1 from './Card-demo/Aseet/image-1.jpg';
import Img_2 from './Card-demo/Aseet/image-2.jpg';
import Img_3 from './Card-demo/Aseet/image-3.jpg';
import Img_4 from './Card-demo/Aseet/image-4.jpg';
import Img_5 from './Card-demo/Aseet/image-5.jpg';
import Img_6 from './Card-demo/Aseet/image-6.jpg';

function App() {
  return (
    <>
     <div className="sec-1"> 
      <Table/>
       <Cardprops name = "Tiger Sroff" course = "fullstack"  discri = "The lorem text the section contain contains header having open andclose functionality." img={Img_1} button="View More"/>
      <Cardprops name = "Alia bhatt" course = "flutter" discri = "The lorem text the section contain contains header having open andclose functionality." img={Img_4} button="View More"/>
      <Cardprops name = "Dipika padukon" course = "python"  discri = "The lorem text the section contain contains header having open andclose functionality." img={Img_3} button="View More"/>
      </div>

      <div className="sec-2">
      <Cardprops name = "Kriti sanon" course = "web designer" discri = "The lorem text the section contain contains header having open andclose functionality." img={Img_6} button="View More"/>
      <Cardprops name = "Shahrukh khan" course = "game developer" discri = "The lorem text the section contain contains header having open andclose functionality." img={Img_2} button="View More"/>
      <Cardprops name = "Akshay kumar" course = "ui-ux designer"  discri = "The lorem text the section contain contains header having open andclose functionality." img={Img_5} button="View More"/>
    </div> 
   </>

  );
}

export default App;
