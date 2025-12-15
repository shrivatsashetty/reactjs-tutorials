import "./index.css";
import Navbar from "./Navbar";
import Card from "./Card";
import { useState, useEffect } from "react";

function App() {
    const [userData, setUserData] = useState([{}]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/posts"
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const posts = await response.json();

				// setting the state variable, react will re-render the component when this happens 
                setUserData(posts); 
				
            } catch (error) {
                console.error(error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <>
            <Navbar />

            <ul className="list-none card-container p-5 flex gap-x-2 gap-y-4 justify-center flex-wrap">
                {userData.map((post) => (
                    <li key={post.id}>
                        <Card title={post.title} content={post.body} />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default App;
