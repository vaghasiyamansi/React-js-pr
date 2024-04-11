import React from "react";

function Heading(){
   let style ={
      color : "green"
   }
   return(
      <>
      <h1 style={style}>this is h1 tag...</h1>
      <h1 className="mt-6 text-center">this is h1 tag...</h1>
      </>
   ) 
}

export default Heading;