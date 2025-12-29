import { useCallback, useState } from "react";
import shuffle from "./Utils";
import Search from "./Search";

const allUsers = ["george", "john", "alex", "simon", "james"];

function App() {
    const [users, setUsers] = useState(allUsers);

    // const handleSearch = (text) => {
    //     console.log(users[0]);

    //     const filteredUsers = allUsers.filter((user) => user.includes(text));
    //     setUsers(filteredUsers);
    // }

    const handleSearch = useCallback(
        (text) => {
            console.log(users[0]);

            const filteredUsers = allUsers.filter((user) =>
                user.includes(text)
            );
            setUsers(filteredUsers);
        },
        [users]
    );

    return (
        <div className="tutorial">
            <div className="align-center mb-2 flex gap-2.5">
                <button
                    className="bg-blue-800 p-2.5 rounded-xl"
                    onClick={() => setUsers(shuffle(allUsers))}
                >
                    Shuffle
                </button>

                <Search onChange={handleSearch} />
            </div>
            <ul>
                {users.map((user) => (
                    <li key={user}>{user}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
