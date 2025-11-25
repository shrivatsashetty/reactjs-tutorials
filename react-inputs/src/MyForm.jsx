import React from "react";
import { useState } from "react";

function MyForm() {
    const [myTxt, setMyTxt] = useState("Hello!");

    function handleMyTxtChanged(event) {
        setMyTxt(event.target.value);
    }

    const [myCar, setMyCar] = useState("Fiat");

    function handleCarChange(event) {
        setMyCar(event.target.value);
    }

    return (
        <form>
            <label htmlFor="txtarea"></label>
            <textarea
                name="txtarea"
                id="txtarea"
                value={myTxt}
                onChange={handleMyTxtChanged}
            />
            <p>Current value of Text Area:</p>
            <p>{myTxt}</p>

            <select name="cars" id="cars" value={myCar} onChange={handleCarChange}>
                <option value="Ford">Ford</option>
                <option value="Volvo">
                    Volvo
                </option>
                <option value="Fiat">Fiat</option>
                <option value="Jaguar">Jaguar</option>
                <option value="Audi">Audi</option>
            </select>
            <p>Current Car Selected: {myCar.toUpperCase()}</p>
        </form>
    );
}

export default MyForm;
