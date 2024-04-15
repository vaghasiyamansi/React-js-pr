import React from "react";

function Emojitask({E1,E2,E3}){
        
        let result;

        if(E1 == E2 && E2 == E3){
            result= "Emoji Are Same....";
        }
        else{
            result= "Emoji Are Different!....";
        }
        return (
            <div>
                <h1 >{E1} {E2} {E3}</h1>
                <p> {result} </p>
            </div>
        )
}
export default Emojitask; 