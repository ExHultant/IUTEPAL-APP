import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  HomeIcon,
  UsersIcon,
  WalletIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import RealTimeDate from "../components/DateTime";
import logo from "../assets/iutepal-logo.png";
import MyModal from "../components/Modal";
import { Link } from "react-router-dom";

const navigation = [
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
const teams = [
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
const userNavigation = [
  { name: "Perfil", href: "/perfil" },
  { name: "Cerrar Sesión", href: "/logout" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Sidebar = ({ children, pageTitle }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // const history = useHistory();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <MyModal isOpen={isOpen} closeModal={closeModal}>
        <div className="flex m-5">
          <Dialog.Title
            as="h3"
            className="text-lg font-medium leading-6 text-gray-900 flex flex-1"
          >
            Notificaciones
          </Dialog.Title>
          <XMarkIcon
            className="w-7 h-7 mb-[-20px] cursor-pointer"
            onClick={closeModal}
          ></XMarkIcon>
        </div>
        <h2 className="m-10 text-center">No hay Notificaciones Disponibles.</h2>
        {/* Contenido de notificaciones */}
      </MyModal>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-slate-300 px-6 pb-4">
                    <Link to="/">
                      <div className="flex h-16 shrink-0 items-center">
                        <img className="h-14 w-auto" src={logo} alt="IUTEPAL" />
                        <h2 className="text-2xl font-bold ml-5">IUTEPAL</h2>
                      </div>
                    </Link>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item, i) => (
                              <li key={i}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? "bg-indigo-600 text-white"
                                      : "text-black hover:text-white hover:bg-indigo-600",
                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                  )}
                                >
                                  <item.icon
                                    className={classNames(
                                      item.current
                                        ? "text-white"
                                        : "text-indigo-700 group-hover:text-white",
                                      "h-6 w-6 shrink-0"
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <div className="text-xs font-semibold leading-6 text-gray-500">
                            Equipo IUTEPAL
                          </div>
                          <ul role="list" className="-mx-2 mt-2 space-y-1">
                            {teams.map((team, i) => (
                              <li key={i}>
                                <a
                                  href={team.href}
                                  className={classNames(
                                    team.current
                                      ? "bg-indigo-700 text-black"
                                      : "text-black hover:text-white hover:bg-indigo-600",
                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                  )}
                                >
                                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-600 text-[0.625rem] font-medium text-white">
                                    {team.initial}
                                  </span>
                                  <span className="truncate">{team.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li className="mt-auto">
                          <a
                            href="#"
                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-black hover:bg-indigo-600 hover:text-white"
                          >
                            <Cog6ToothIcon
                              className="h-6 w-6 shrink-0 text-indigo-700 group-hover:text-white"
                              aria-hidden="true"
                            />
                            Configuración
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-slate-300 px-6 pb-4">
            <Link to="/">
              <div className="flex h-16 shrink-0 items-center">
                <img className="h-8 w-auto" src={logo} alt="Your Company" />
                <h2 className="text-2xl font-bold ml-5">IUTEPAL</h2>
              </div>
            </Link>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item, i) => (
                      <li key={i}>
                        <a
                          href={item.href}
                          className={classNames(
                            location.pathname === item.href
                              ? "bg-indigo-600 text-white"
                              : "text-black hover:text-white hover:bg-indigo-600",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                          )}
                        >
                          <item.icon
                            className={classNames(
                              location.pathname === item.href
                                ? "text-white"
                                : "text-indigo-700 group-hover:text-white",
                              "h-6 w-6 shrink-0"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="text-xs font-semibold leading-6 text-gray-500">
                    Equipo IUTEPAL
                  </div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {teams.map((team, i) => (
                      <li key={i}>
                        <a
                          href={team.href}
                          className={classNames(
                            location.pathname === team.href
                              ? "bg-indigo-700 text-white"
                              : "text-black hover:text-white hover:bg-indigo-700",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                          )}
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-400 text-[0.625rem] font-medium text-white">
                            {team.initial}
                          </span>
                          <span className="truncate">{team.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="mt-auto">
                  <a
                    href="/configuracion"
                    className={classNames(
                      location.pathname === "/configuracion"
                        ? "bg-indigo-600 text-white"
                        : "text-black hover:text-white hover:bg-indigo-600",
                      "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                    )}
                  >
                    <Cog6ToothIcon
                      className={classNames(
                        location.pathname === "/configuracion"
                          ? "bg-indigo-600 text-white"
                          : "text-black hover:text-white hover:bg-indigo-600",
                        "h-6 w-6 shrink-0 text-indigo-700 group-hover:text-white"
                      )}
                      aria-hidden="true"
                    />
                    Configuración
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div
              className="h-6 w-px bg-gray-900/10 lg:hidden"
              aria-hidden="true"
            />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <h1 className="text-4xl font-semibold text-gray-900 mt-2 flex-1">
                {pageTitle}
              </h1>
              <RealTimeDate />
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button
                  type="button"
                  className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon
                    onClick={openModal}
                    className="h-6 w-6"
                    aria-hidden="true"
                  />
                </button>

                {/* Separator */}
                <div
                  className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
                  aria-hidden="true"
                />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <Menu.Button className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full bg-gray-50"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span
                        className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                        aria-hidden="true"
                      ></span>
                      <ChevronDownIcon
                        className="ml-2 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <Link
                              to={item.href}
                              className={classNames(
                                active ? "bg-gray-50" : "",
                                "block px-3 py-1 text-sm leading-6 text-gray-900"
                              )}
                            //   onClick={() => {
                            //     // Lógica de cierre de sesión
                            //     localStorage.removeItem("user");
                            //     history.push("/login");
                            //   }}
                            >
                              {item.name}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
};
