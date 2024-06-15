import React from 'react'
import Homepage from '../../Componant/Homepage/Homepage';
import Topcatagories from '../../Componant/Top-catagories/Topcatagories';
import Foldedpots from '../../Componant/Foldedpots/Foldedpots';
import Ninicoshop from '../../Componant/Ninicoshop/Ninicoshop';
import Product from '../../Componant/Populer-Product/Product';

function Home() {
  return (
    <div>
       {/* <Catagories/>  */}
    <Homepage/>
    <Topcatagories/>
     <Product/>
    <Foldedpots/>
     <Ninicoshop/>
    </div>
  )
}

export default Home
