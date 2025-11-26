import { useState } from "react";

function Form() {

    const [inputs, setInputs] = useState({firstname: "Mr.X", tomato: true, onion: false});

    function handleChange(event) {
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        const name = event.target.name;
        setInputs({...inputs, [name]: value});
    } 

    const handelSubmit = (event) => {
        event.preventDefault();

        let fillings = "No Fillings";

        if(inputs.tomato && inputs.onion) {
            fillings = "Tomato & Onion Fillings";
        }
        else {
            if (inputs.tomato) {
                fillings = "Tomato Fillings";
            }
            else if (inputs.onion){
                fillings = "Onion Fillings";
            }
        }

        alert(`${inputs.firstname} wants a burger with ${fillings}`);

    } 

    return (
        <>
            <form onSubmit={handelSubmit}>
                <label htmlFor="firstname">My Name is:</label>
                <input type="text" name="firstname" id="firstname" onChange={handleChange} />

                <p>I want a burger with:</p>

                <label htmlFor="tomato">Tomato</label>
                <input 
                    type="checkbox" 
                    name="tomato" 
                    id="tomato" 
                    checked={inputs.tomato}
                    onChange={handleChange}
                />

                <label htmlFor="onion">Onion</label>
                <input 
                    type="checkbox" 
                    name="onion" 
                    id="onion" 
                    checked={inputs.onion}
                    onChange={handleChange}
                />
                <br />
                <button type="submit">Submit</button>
            </form>

            <p>First Name:{inputs.firstname} <br /> Tomato: {String(inputs.tomato).toUpperCase()} <br /> Onion: {String(inputs.onion).toUpperCase()}</p>
        </>
    );
}

export default Form;
