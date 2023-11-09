import { BrowserRouter, useRoutes } from "react-router-dom";
import Dashboard from "../Home";
import NoFound from "../NoFound";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Dashboard /> },
    // { path: "/my-account", element: <MyAccount /> },
    // { path: "/my-order", element: <MyOrder /> },
    // { path: "/my-orders", element: <MyOrders /> },
    // { path: "/my-orders/last", element: <MyOrder /> },
    { path: "/*", element: <NoFound /> },
    // { path: "/sign-in", element: <SignIn /> },
  ]);

  return routes;
};

function App() {

  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
