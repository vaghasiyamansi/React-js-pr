// combine all reducer here and  than send store 

// (object wise)

import { combineReducers } from "redux";
import { cartreducer,wishlistreducer } from "./Reducer";

const rootreducer = combineReducers({
    cartreducer,wishlistreducer
})

export default rootreducer;