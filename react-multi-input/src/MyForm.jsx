import { useState } from "react";

function MyForm() {
    const [inputs, setInputs] = useState({ firstname: "foo", lastname: "bar" });

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setInputs({ ...inputs, [name]: value });
    }
    return (
        <>
            <form>
                <div>
                    <label htmlFor="firstname">First Name:</label>
                    <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        onChange={handleChange}
                        value={inputs.firstname}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="lastname">Last Name:</label>
                    <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        onChange={handleChange}
                        value={inputs.lastname}
                    />
                </div>
                <br />
                {/* <button type="submit">Submit</button> */}
            </form>
            <p>
                firstname & lastname: {inputs.firstname} & {inputs.lastname}
            </p>
        </>
    );
}

export default MyForm;
