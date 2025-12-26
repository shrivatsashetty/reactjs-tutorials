import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// import all pages
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ProfilesPage from "./pages/ProfilesPage";
import NotFoundPage from "./pages/NotFoundPage";

/* import BrowserRouter & RouterProvider from the React-Router library */
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// the below method takes an array of route objects
// first route will be the route object for the root path 
const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
        errorElement: <NotFoundPage/>
    },
    // a route with subroutes for subpages within pages
    {
        path: "/profiles",
        element: <ProfilesPage/>,
        children: [
            {
                // variable segment in a route path is denoted after a colon
                // example /profiles/1 or /profiles/2
                path: "/profiles/:profileId", 
                element: <ProfilePage/>
            },
        ]
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
