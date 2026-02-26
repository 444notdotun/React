import { useState } from "react"
import{ useSelector ,useDispatch} from "react-redux"
import counterslice from "../slices/counterSlices" 
import Styles from "./counter.module.css"

const Counter=()=>{

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();

    return(
        <div>
           <span>{count}</span>
           <button onClick={() => dispatch(counterslice.actions.increase())} className={Styles.button}>+</button>
           <button onClick={() => dispatch(counterslice.actions.decrease())} className={Styles.button}>-</button>
           <button onClick={() => dispatch(counterslice.actions.reset())} className={Styles.button}>reset</button>
        </div>
    )
}

export default Counter