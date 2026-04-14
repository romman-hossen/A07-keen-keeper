import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/home/Home";
import Stats from "../pages/stats/Stats";
import Timeline from "../pages/timeline/Timeline";
import NotFound from "../pages/NotFound/NotFound";


export const router = createBrowserRouter([
    {
        path:"/",
        Component:RootLayout,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:"/timeline",
                Component:Timeline
            },
            {
                path:"stats",
                Component:Stats
            }
        ],
        errorElement: <NotFound />
    }

])
