import { useFormState } from "react-dom";
import "./App.css";

import { useForm } from "react-hook-form";

function App() {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm();

	// function for simulating network delay
	const delay = async (numSeconds) => {
		return new Promise(
			(resolve) => {
				setTimeout(
					() => {
						resolve();
					},
					numSeconds * 1000
				)
			}
		);
	}

    const onSubmit = async (data) => {
		await delay(2);
    	alert("Form Submitted, check console for data");
		console.log(data);

		if(data.username.startsWith("s") ) {
			setError("invalidUser", {message: "Invalid username"}) // creating a custom error
		}
    };

    return (
        <>
			{isSubmitting && <div>Submitting Form...</div> }
            <div className="container">
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        placeholder="username"
						type="text"

						// rest of the attributes for the input element can be set using the register function
                        {
							...register(
									"username", 
									{
										required: {value: true, message: "username is Required"}, 
										minLength: {value: 4, message: "Min 3 Characters Long"}, 
										maxLength: {value: 10, message: "Max 10 Chars allowed"}
									} 
								)
						}	
                    />
					{errors.username &&  <div className="red">{errors.username.message}</div>}

                    <br />
                    <input
                        placeholder="password"
                        {...register("password")}
                        type="password"
                    />
                    <br />
                    <input  disabled={isSubmitting} type="submit" value="Submit" />
					{errors.invalidUser &&  <div className="red">{errors.invalidUser.message}</div>}
                </form>
            </div>
        </>
    );
}

export default App;
