//routes
import { createBrowserRouter } from "react-router-dom";
//layot
import LayoutPublic from "../layout/LayoutPublic"
//pages
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Blog from "../pages/Blog"
import Projects from "../pages/Projects" 
import NotFound from "../NotFound"


export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path:"/contact",
                element:<Contact/>

            },
            {
                path:"/projects",
                element:<Projects/>

            },
            {
                path: "/blog", 
                element: <Blog />,
            },
        ],
    },
]);