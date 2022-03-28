import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../services/actions/counterAction';

const CounterTow = () => {

    const count = useSelector(state => state.counterReducer.count)
    const dispatch = useDispatch();

  return (
    <div>
        <h3>Counter: {count} </h3>
        <button onClick={() => dispatch(increment(5))}>Increment</button>
            &copy;
        <button onClick={() => dispatch(decrement(1))}>Decrement</button>
    </div>
  )
}

// const mapStateToProps = (state) => ({
//   count: state.counterReducer.count
// })

export default CounterTow;