import { Transition } from "@headlessui/react";
import { Cog6ToothIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button, Dialog, Metric, Text } from "@tremor/react";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { navigation, teams } from "../utils/routes";
import { classNames } from "../utils/classes";
import logo from "../assets/iutepal-logo.png";

export const NavMobile = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
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
                  <Button
                    variant="light"
                    type="button"
                    className="-m-2.5 p-2.5"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <Text className="sr-only">Cerrar sidebar</Text>
                    <XMarkIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </Button>
                </div>
              </Transition.Child>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-slate-300 px-6 pb-4">
                <Link to="/">
                  <div className="flex h-16 shrink-0 items-center">
                    <img className="h-14 w-auto" src={logo} alt="IUTEPAL" />
                    <Metric className="text-2xl font-bold ml-5">IUTEPAL</Metric>
                  </div>
                </Link>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item, i) => (
                          <li key={i}>
                            <Link
                              to={item.href}
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
                              <Text>{item.name}</Text>
                            </Link>
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
                            <Link
                              to={team.href}
                              className={classNames(
                                team.current
                                  ? "bg-indigo-700 text-black"
                                  : "text-black hover:text-white hover:bg-indigo-600",
                                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                              )}
                            >
                              <Text className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-600 text-[0.625rem] font-medium text-white">
                                {team.initial}
                              </Text>
                              <Text className="truncate">{team.name}</Text>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="mt-auto">
                      <Link
                        to="/configuracion"
                        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-black hover:bg-indigo-600 hover:text-white"
                      >
                        <Cog6ToothIcon
                          className="h-6 w-6 shrink-0 text-indigo-700 group-hover:text-white"
                          aria-hidden="true"
                        />
                        <Text>Configuración</Text>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
