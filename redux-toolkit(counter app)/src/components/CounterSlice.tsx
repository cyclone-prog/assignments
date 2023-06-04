import { createSlice } from "@reduxjs/toolkit";

interface initialStateInterface{
    count:number;
}

const initialState:initialStateInterface = {
    count:0,
}
const CounterSlice:any = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state,action)=>{
            state.count = state.count+1;
        },
        decrement:(state,action)=>{
            state.count = state.count-1;
        },
        reset:(state,action)=>{
            state.count = 0;
        },
        incrementByNumber:(state,action)=>{
            state.count = state.count + action.payload;
        }
    }
})

export const {increment,decrement,reset,incrementByNumber} = CounterSlice.actions;
export default CounterSlice.reducer;