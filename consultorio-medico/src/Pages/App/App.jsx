import { BrowserRouter, useRoutes  } from "react-router-dom";
import Dashboard from "../Home";
import NoFound from "../NoFound";
import Patients from "../Patients";
import Calendar from "../Calendar";
import Recipes from "../Recipes";
import Reports from "../Reports";
import Inventory from "../Inventory";
import Login from "../../components/auth/Login";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/login", element: <Login /> },
    { path: "/inicio", element: <Dashboard /> },
    { path: "/", element: <Dashboard /> },
    { path: "/pacientes", element: <Patients /> },
    { path: "/calendario", element: <Calendar /> },
    { path: "/recipes", element: <Recipes /> },
    { path: "/reportes", element: <Reports /> },
    { path: "/inventario", element: <Inventory/> },
    { path: "/*", element: <NoFound /> },
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