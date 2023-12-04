import { Sidebar } from "../../Layout";
import { Card, Grid } from "@tremor/react";
import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  UserGroupIcon,
  UserIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const links = [
  { to: "/pacientes", icon: <UserGroupIcon />, label: "Pacientes" },
  { to: "/calendario", icon: <CalendarIcon />, label: "Calendario" },
  { to: "/recipes", icon: <DocumentDuplicateIcon />, label: "Recipes" },
  { to: "/reportes", icon:<ChartPieIcon />, label: "Reportes" },
  { to: "/inventario", icon:<WalletIcon />, label: "Inventario" },
  { to: "/perfil", icon: <UserIcon />, label: "Perfil" },
];

function Dashboard() {
  return (
    <Sidebar pageTitle={"¡Bienvenido!"}>
      <main>
        <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-5 m-auto">
          {links.map((link, index) => (
            <Link key={index} to={link.to}>
              <Card className="cursor-pointer hover:bg-indigo-600 transition-all">
                <div className="w-40 flex items-center justify-center ml-14 text-indigo-400">{link.icon}</div>
                <h2 className="text-xl font-semibold text-center">{link.label}</h2>
              </Card>
            </Link>
          ))}
        </Grid>
      </main>
    </Sidebar>
  );
}

export default Dashboard;
