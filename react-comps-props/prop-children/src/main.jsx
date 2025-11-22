import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ParentComponent from "./ParentComponent";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ParentComponent/>
    </StrictMode>
);
