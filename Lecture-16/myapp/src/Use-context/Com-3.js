import React, {useContext} from "react";
import { Context1 } from "../App";

function Com3(){
    const name = useContext(Context1);
    return(
        <div>
            <h6>My name is.....{name}</h6>
        </div>
    )
}

export default Com3;