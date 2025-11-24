import { useState } from "react";

function MyForm() {
    const [name, setName] = useState("Sharma");

    
    function handleFormDataChange(event) {
        setName(event.target.value);
    }

    function handleFormSubmit(event) {
        event.preventDefault(); // prevent default form behaviour of page reload
        alert("Username is" + " " + name);
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <label for="username">
                    Enter your name:
                </label>
                <input
                    id="username"
                    type="text"
                    value={name}
                    // the specified function will be called with the event object as the default argument
                    onChange={handleFormDataChange}
                />
                <button type="submit">Submit</button>
                {/* the value of the state variable 'name' is updated here */}
                <p>Current Value: {name.toUpperCase()}</p>
            </form>
        </>
    );
}

export default MyForm;
