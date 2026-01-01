import useFetch from "./useFetch";

function App() {
    const data = useFetch("https://jsonplaceholder.typicode.com/todos");

    return (
        <>
			<h1>Todos:</h1>
            {data &&
                data.map((item) => {
                    return <p key={item.id}> {item.title} </p>;
                })
			}
        </>
    );
}

export default App;
