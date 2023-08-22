import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByValue } from '../redux/features/counter/counterSlice';

const Counter = () => {

    const {count} = useSelector(state => state.counter);
    // const count = useSelector(state => state.counter.count);

    const dispatch = useDispatch();

    console.log(count)

    return (
        <div>
            <button onClick={() => dispatch(incrementByValue(5))}>increment by 5</button>
            <br />
            <button onClick={() => dispatch(increment())}>Increment</button>
            <h1>{count}</h1>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
};

export default Counter;