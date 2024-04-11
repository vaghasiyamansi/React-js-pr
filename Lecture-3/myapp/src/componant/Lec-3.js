import React from "react";
import "../componant/Lec2.css";
import Lec2 from "../componant/Lec2.module.css";


const MyFun = () =>{
    const name = "abc"

    return(
             <>
             <h1 style={{color:"red",backgroundColor:"gray", border:"2px solid black", borderRadius:"5px"}}>This is h1 tag</h1>
             <h1>This is h1 tag</h1>
             <h1>This is h1 tag</h1>
             <h1>This is h1 tag</h1>
             <h1 className={Lec2.para}>This is h1 tag</h1>
             </>
    )
}
export default MyFun;