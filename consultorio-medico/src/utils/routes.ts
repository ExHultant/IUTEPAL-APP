import { CalendarIcon, ChartPieIcon, DocumentDuplicateIcon, HomeIcon, UsersIcon, WalletIcon } from "@heroicons/react/24/outline";

export const navigation = [
    { name: "Inicio", href: "/inicio", icon: HomeIcon, current: false },
    { name: "Pacientes", href: "/pacientes", icon: UsersIcon, current: false },
    {
      name: "Calendario",
      href: "/calendario",
      icon: CalendarIcon,
      current: false,
    },
    {
      name: "Recipes",
      href: "/recipes",
      icon: DocumentDuplicateIcon,
      current: false,
    },
    { name: "Reportes", href: "/reportes", icon: ChartPieIcon, current: false },
    { name: "Inventario", href: "/inventario", icon: WalletIcon, current: false },
  ];
  export const teams = [
    {
      id: 1,
      name: "Administrativo",
      href: "/adminitracion",
      initial: "A",
      current: false,
    },
    {
      id: 2,
      name: "Psicologo",
      href: "/administracion",
      initial: "P",
      current: false,
    },
    {
      id: 3,
      name: "Inventario",
      href: "/inventario",
      initial: "I",
      current: false,
    },
  ];
  export const userNavigation = [
    { name: "Perfil", href: "/perfil" },
    { name: "Cerrar Sesión", href: "/" },
  ];