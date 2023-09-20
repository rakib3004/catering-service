import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CartDetails from "../pages/CartDetails";
import Payment from "../pages/Payment";
import CateringServiceMenu from "../pages/CateringServiceMenu";
import Managers from "../pages/Managers";
import SubscriptionDetails from "../pages/SubscriptionDetails";
const router = createBrowserRouter([

    // {
    //     path: '/',
    //     element: <App />,
    // },

    {
        path: '/cart',
        element: <CartDetails />,
    },

    {
        path: '/payment',
        element: <Payment />,
    },

    {
        path: '/',
        element: <CateringServiceMenu />,
    },
    {
        path: '/managers',
        element: <Managers />,
    },  {
        path: '/subsciption',
        element: <SubscriptionDetails />,
    },

]);

export default router