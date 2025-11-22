import React from "react";

import Son from "./Son";
import Daughter from "./Daughter";

function Parent() {
    return (
        <div>
            <h1>Header of Parent Component</h1>
            <Son>
                {/* the below content will be sent as prop */}
                <p style={{backgroundColor: "lightblue"}}>
                    This was written in the Parent component, but displayed as a
                    part of the Son component
                </p>
            </Son>
            <Daughter>
                <p style={{backgroundColor: "lightgreen"}}>
                    This was written in the Parent component, but displayed as a
                    part of the Daughter component
                </p>
            </Daughter>
        </div>
    );
}

export default Parent;
