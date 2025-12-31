import { useReducer } from "react";

function reducer(state, action) {

    switch (action.type) {
        case "INCREMENT": {
            const newCount = state.count + 1;
            const hasError = newCount > 5;

            return {
                ...state,
                count: hasError ? state.count : newCount,
                error: hasError ? "Maximum Reached" : null,
            };
        }
        case "DECREMENT": {
            const newCount = state.count - 1;
            const hasError = newCount < 0;

            return {
                ...state,
                count: hasError ? state.count : newCount,
                error: hasError ? "Minimum Value" : null,
            };
        }

		case "RESET": {

            return {
                ...state,
                count: 0,
				error: null
            };
        }
        default:
            return state;
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        error: false,
    });

    return (
        <div className="flex flex-col items-center justify-center gap-5">
            <div 
				className="p-4 text-6xl font-bold"
			>
				{state.count}
			</div>

			<div className="flex gap-3" >

				<button
					className="mb-2 mt-2 bg-blue-800 rounded-2xl p-2"
					onClick={() => dispatch({ type: "INCREMENT" })}
				>
					Increment
				</button>

				<button
					className="mb-2 mt-2 bg-blue-800 rounded-2xl p-2"
					onClick={() => dispatch({ type: "DECREMENT" })}
				>
					Decrement
				</button>

				<button
					className="mb-2 mt-2 bg-blue-800 rounded-2xl p-2"
					onClick={() => dispatch({ type: "RESET" })}
				>
					Reset
				</button>

			</div>


            {/* conditional rendering of the error element */}
            {state.error && (
                <div className="mb-2 text-red-500 bg-red-50 p-3	rounded-2xl opacity-70">
					{state.error}	
				</div>
            )}
        </div>
    );
}

export default App;
