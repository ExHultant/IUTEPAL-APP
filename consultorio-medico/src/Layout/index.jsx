import { useState } from "react";
import {
  Bars3Icon,
  BellIcon,
} from "@heroicons/react/24/outline";
import RealTimeDate from "../components/DateTime";
import logo from "../assets/iutepal-logo.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogPanel,
  Metric,
  Text,
  Title,
} from "@tremor/react";
import { navigation } from "../utils/routes";
import { classNames } from "../utils/classes";
import { NavMobile } from "../components/nav-mobile";
import { ProfileDropdown } from "../components/profile-dropdown";

export const Sidebar = ({ children, pageTitle }) => {
  Sidebar.propTypes = {
    children: PropTypes.any.isRequired,
    pageTitle: PropTypes.string.isRequired,
  };

  const [isOpen, setIsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Modal */}
      <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
        <DialogPanel>
          <Title className="mb-3">Notificaciones</Title>
          No tienes notificaciones pendientes.
          <div className="mt-3">
            <Button variant="light" onClick={() => setIsOpen(false)}>
              Entendido!
            </Button>
          </div>
        </DialogPanel>
      </Dialog>
      <div>
        {/* Mobile sidebar */}
        <NavMobile sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-slate-300 px-6 pb-4">
            <Link to="/">
              <div className="flex h-16 shrink-0 items-center">
                <img className="h-8 w-auto" src={logo} alt="Your Company" />
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
                            location.pathname === item.href
                              ? "bg-primary text-white"
                              : "text-black hover:text-white hover:bg-primary hover:transition-all duration-300",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                          )}
                        >
                          <item.icon
                            className={classNames(
                              location.pathname === item.href
                                ? "text-white"
                                : "text-secondary group-hover:text-white",
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
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <Button
              variant="light"
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Text className="sr-only">Abrir Sidebar</Text>
              <Bars3Icon className="h-6 w-6 text-black" aria-hidden="true" />
            </Button>

            {/* Separator */}
            <div
              className="h-6 w-px bg-gray-900/10 lg:hidden"
              aria-hidden="true"
            />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <Metric className="font-semibold mt-3 flex-1">{pageTitle}</Metric>
              <RealTimeDate />
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <Button variant="light" className="-m-2.5 p-2.5">
                  <Text className="sr-only">Ver Notificaciones</Text>
                  <BellIcon
                    onClick={() => setIsOpen(true)}
                    className="h-6 w-6 text-black hover:text-quartary transition-all duration-100"
                    aria-hidden="true"
                  />
                </Button>

                {/* Separator */}
                <div
                  className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
                  aria-hidden="true"
                />

                {/* Profile dropdown */}
                <ProfileDropdown />
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
