import React from 'react'
import Homepage from '../../Componant/Homepage/Homepage';
import Topcatagories from '../../Componant/Top-catagories/Topcatagories';
import Foldedpots from '../../Componant/Foldedpots/Foldedpots';
import Ninicoshop from '../../Componant/Ninicoshop/Ninicoshop';

function Home() {
  return (
    <div>
       {/* <Catagories/>  */}
    <Homepage/>
    <Topcatagories/>
    <Foldedpots/>
     <Ninicoshop/>
    </div>
  )
}

export default Home
