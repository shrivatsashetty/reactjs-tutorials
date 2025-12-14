import { useState } from "react";
import { useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [claculation, setCalculation] = useState(0);

    useEffect(
        () => {
            setCalculation(() => count * 2);
        }, 
        [count] // updates the state variable calculation when the count changes
    );

    return (
        <>
            <p>Count: {count}</p>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                +
            </button>

            <p>Calculation: {claculation}</p>
        </>
    );
}

export default Counter;
