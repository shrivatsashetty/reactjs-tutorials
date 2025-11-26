import { useState } from "react";

function Form() {

    const [selectedFruit, setSelectedFruit] = useState("Mango");

    function handleChange(event) {
        setSelectedFruit(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        alert(`You selected ${selectedFruit}`);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <p>Select Your favourite Fruit</p>
                <br />

                <label htmlFor="apple">Apple</label>
                <input
                    type="radio"
                    name="fruit"
                    id="apple"
                    value="Apple"
                    checked={selectedFruit === "Apple"}
                    onChange={handleChange}
                />
                <br />

                <label htmlFor="mango">Mango</label>
                <input
                    type="radio"
                    name="fruit"
                    id="mango"
                    value="Mango"
                    checked={selectedFruit === "Mango"}
                    onChange={handleChange}
                />
                <br />

                <label htmlFor="strawberry">Strawberry</label>
                <input
                    type="radio"
                    name="fruit"
                    id="strawberry"
                    value="Strawberry"
                    checked={selectedFruit === "Strawberry"}
                    onChange={handleChange}
                />
                <br />

                <label htmlFor="banana">Banana</label>
                <input
                    type="radio"
                    name="fruit"
                    id="banana"
                    value="Banana"
                    checked={selectedFruit === "Banana"}
                    onChange={handleChange}
                />
                <br />

                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default Form;
