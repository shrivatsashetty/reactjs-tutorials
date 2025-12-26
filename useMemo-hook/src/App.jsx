import { useState, useMemo } from "react";

import "./App.css";

import { initialItems } from "./utils";

function App() {
    const [count, setCount] = useState(0);

    // we don't require a setter method for this state since we are not going to change it
    const [items] = useState(initialItems); 

    const selectedItem = useMemo(
        // the bleow function will be run to recompute selected item only if 'items' array changes
        () => items.find((item) => item.isSelected),
        [items]
    );

    console.log(selectedItem);

    return (
        <div>
            <h1>Count: {count}</h1>
            <h2>Selected Item: {selectedItem?.id} </h2>
            <button
                type="button"
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Increment
            </button>
        </div>
    );
}

export default App;
