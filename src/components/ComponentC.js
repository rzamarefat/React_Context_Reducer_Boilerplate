import {useReducer} from 'react'
import { Reducer } from '../context/Reducer'
import State from '../context/State'
import { INCREMENT, DECREMENT } from '../context/ActionTypes'

const ComponentC = () => {
    const [state, dispatch] = useReducer(Reducer, State)

    const increment = () => {
        dispatch({
            type: INCREMENT
        })
    }
    const decrement = () => {
        dispatch({
            type: DECREMENT
        })
    }
    return (
        <div>
            <p>Buttons from Component C</p>
            <p>The value {state.count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default ComponentC