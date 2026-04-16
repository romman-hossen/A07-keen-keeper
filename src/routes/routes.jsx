import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Stats from "../pages/stats/Stats";
import Timeline from "../pages/timeline/Timeline";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/home/home";
import friendDetails from "../pages/friendDetails/FriendDetails";


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
                path:"/stats",
                Component:Stats
            },
            {
                path:"/friendDetails/:id",
                Component : friendDetails
            }
        ],
        errorElement: <NotFound />
    }

])
