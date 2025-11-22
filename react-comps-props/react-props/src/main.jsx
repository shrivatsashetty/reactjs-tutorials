import { createRoot } from "react-dom/client";

import Car from "./Car";

const releaseYear = 1963;

createRoot(document.getElementById("root")).render(
    // passing multiple props
    <Car
		// passing a string as prop
        brand="Ford"
        model="Mustang"
		// passing an array as prop
        colors={["Red", "White", "Black"]}
		// passing a variable as prop
        release={releaseYear}
    />
);
