import { useState } from "react";

import "./App.css"

function App() {
    const [favColor, setFavColor] = useState("Red");

    return (
        <>
            <h1>My favourite color is {favColor}</h1>

            <button style={{backgroundColor: "blue"}}
                onClick={() => {
                    setFavColor("Blue");
                }}
            >
                Blue
            </button>

            <button style={{backgroundColor: "green"}}
                onClick={() => {
                    setFavColor("Green");
                }}
            >
                Green
            </button>

            <button style={{backgroundColor: "yellow"}}
                onClick={() => {
                    setFavColor("Yellow");
                }}
            >
                Yellow
            </button>

            <button style={{backgroundColor: "orange"}}
                onClick={() => {
                    setFavColor("Orange");
                }}
            >
                Orange
            </button>
        </>
    );
}

export default App;
