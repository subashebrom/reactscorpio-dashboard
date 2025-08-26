import { createBrowserRouter } from "react-router";
import MainLayOut from "../layout/MainLayOut";
import Dashboard from "../pages/Dashboard";
import Header from "../components/Header";

const MainRoutes = createBrowserRouter ([
    {
        path: '/',
        element: <MainLayOut />,
        children:[
            {
                path: '/sidebar',
                element: <Header />
            },
            {
                path: '/',
                element: <Dashboard />
            },
        ]
    }
]);
export default MainRoutes;