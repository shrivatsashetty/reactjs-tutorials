import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import Contact from "./Contact";
import Products from "./Products";
import Bikes from "./Bikes";
import Cars from "./Cars";
import Info from "./Info";
import User from "./User";


function App() {
    return (
        <BrowserRouter>
            {/* Navigation */}
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="/products">Products</Link> |{" "}
                <Link to="/contact">Contact</Link> |{" "}
                <Link to="/customer">Customer</Link>
            </nav>

            {/* Routes, A container for all your route definitions */}
            <Routes>
                <Route path="/" element={<Home />} />
                {/* nested routes */}
                <Route path="/products" element={<Products />}>
                    <Route path="car" element={<Cars />} />
                    <Route path="bike" element={<Bikes />} />
                </Route>
                <Route path="/contact" element={<Contact />} />

                {/* <Route path="/customer/:firstName" element={<Info />} /> */}
                <Route path="/customer/" element={<Info />} >
                    {/* <Route path="/:firstName" element={<User />} /> */}
                </Route>
                    
            </Routes>
        </BrowserRouter>
    );
}

export default App;
