import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "../src/ui/Home";
import Menu, { loader as menuLoader } from "../src/features/menu/Menu";
import Cart from "../src/features/cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "../src/features/order/CreateOrder";
import { action as updateOrderAction } from "./features/order/UpdateOrder";
import Order, { loader as orderLoader } from "../src/features/order/Order";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        action: updateOrderAction,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
