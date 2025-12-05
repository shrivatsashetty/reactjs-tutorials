import styles from "./app-style.module.css";

function App() {
    return (
        <div
            className={`${styles["bg-blue"]} ${styles["p-40"]} ${styles["txt-center"]}`}
        >
            <h1
                className={`${styles["col-red"]}
                ${styles["sans-serif"]}`}
            >
                Hello Style!
            </h1>
            <p>Add a little style!</p>
        </div>
    );
}

export default App;
