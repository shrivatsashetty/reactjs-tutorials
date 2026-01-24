import "./App.css";

import Navbar from "./components/Navbar";

import { useSelector, useDispatch } from "react-redux";
import {
    decrement,
    increment,
    incrementByAmount,
    reset,
} from "./redux/counter/counterSlice";

function App() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <>
            <Navbar />
            <button type="button" onClick={() => dispatch(decrement())}>
                -
            </button>

            <button type="button" onClick={() => dispatch(increment())}>
                +
            </button>

            <button type="button" onClick={() => dispatch(reset())}>
                0
            </button>

            <button
                type="button"
                onClick={() => dispatch(incrementByAmount(5))}
            >
                +5
            </button>

            <div>
                From App Component Count: <b>{count}</b>{" "}
            </div>
        </>
    );
}

export default App;
