import { createBrowserRouter } from "react-router";
import MainLayOut from "../layout/MainLayOut";
import Dashboard from "../pages/Dashboard";
import Header from "../components/Header";
import Category from "../pages/Category";
import AddMatch from "../pages/AddMatch";
import AllMatches from "../pages/AllMatches";
import Deposit from "../pages/Deposit";
import Withdraw from "../pages/withdraw";
import RoomDetails from "../pages/RoomDetails";
import Users from "../pages/Users";
import PaymentMethod from "../pages/PaymentMethod";
import PromoOffer from "../pages/PromoOffer";
import Settings from "../pages/Settings";

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
            {
                path: '/category',
                element: <Category />
            },
            {
                path: '/add-match',
                element: <AddMatch />
            },
            {
                path: '/all-matches',
                element: <AllMatches />
            },
            {
                path: '/deposit',
                element: <Deposit />
            },
            {
                path: '/withdraw-request',
                element: <Withdraw />
            },
            {
                path: '/room-details',
                element: <RoomDetails />
            },
            {
                path: '/users',
                element: <Users />
            },
            {
                path: '/payment-method',
                element: <PaymentMethod />
            },
            {
                path: '/promo-offers',
                element: <PromoOffer />
            },
            {
                path: '/settings',
                element: <Settings />
            },
        ]
    }
]);
export default MainRoutes;