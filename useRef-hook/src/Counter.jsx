import { useEffect, useState, useRef } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const myVar = useRef(0);

    const myPara = useRef();

    const changeParaColor = () => {
        if (count % 2 == 0) {
            myPara.current.style.backgroundColor = "red";
        } else {
            myPara.current.style.backgroundColor = "green";
        }
    };

    useEffect(
        () => {
            // changing ref variable will not cause a rerender
            myVar.current = myVar.current + 1;
            console.log("No of times rendered is:", myVar.current);
            changeParaColor();
        }
    );

    return (
        <>
            <h2>The count is {count}</h2>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                +
            </button>

            {/* the use of JSX ref attribute to access DOM elements using useRef */}
            <h3
                style={{ padding: "5px", display: "flex", borderRadius: "5px" }}
                ref={myPara}
            >
                Check Console
            </h3>
        </>
    );
}

export default Counter;
