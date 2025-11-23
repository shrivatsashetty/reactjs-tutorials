import { createRoot } from "react-dom/client";
import FootballApp from "./FootballApp/FootballApp";
import Car from "./CarApp/Car";

createRoot(document.getElementById("root")).render(
    // <FootballApp />
    <Car brand="Audi"/>
);
