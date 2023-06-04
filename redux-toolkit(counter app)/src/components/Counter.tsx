import { useSelector,useDispatch } from "react-redux"
import {increment,decrement,reset,incrementByNumber} from './CounterSlice'
import { useState } from "react";
function Counter() {
    const [number,setNumber] = useState(0);
    const count:any = useSelector((state:any)=>state.counter.count);
    const dispatch = useDispatch();
    return (
    <div>
        <label htmlFor="">
            {count}
        </label>
        <br />
        <input type="text" onChange={(e:any)=>setNumber(e.target.value)} placeholder="increment by number here" /><br />
        <br />
        <button onClick={(e)=>dispatch(increment())}>increment</button>
        <button onClick={(e)=>dispatch(decrement())}>decrement</button>
        <button onClick={(e)=>dispatch(reset())}>reset</button><br />
        <button onClick={(e)=>dispatch(incrementByNumber(Number(number)))}>increment by input number</button>

    </div>
  )
}

export default Counter