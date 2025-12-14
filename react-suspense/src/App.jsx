import Fruits from "./Fruits";
import { Suspense } from "react";

function App() {
    return (
        <>
            <div>
                <Suspense fallback={<Loading />}>
                    <Fruits />
                </Suspense>
            </div>
        </>
    );
}

function Loading() {
    return <h2>🌀 Loading...</h2>;
}

export default App;
