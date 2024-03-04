import { Menu, Transition } from "@headlessui/react";
import { userNavigation } from "../utils/routes";
import { Link, useNavigate } from "react-router-dom";
import { classNames } from "../utils/classes";
import { Fragment, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Avatar } from "@mui/material";
import { Button, Dialog, DialogPanel } from "@tremor/react";

export const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = (event) => {
    event.preventDefault();
    setIsOpen(true);
  };

  const logout = () => {
    setIsOpen(false);
    navigate("/");
  };

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="-m-1.5 flex items-center p-1.5">
        <span className="sr-only">Abrir Menu Usuario</span>
        <Avatar src="/broken-image.jpg" sx={{ width: 30, height: 30 }} />
        <span className="hidden lg:flex lg:items-center">
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
                  onClick={item.name === "Cerrar Sesión" ? handleLogout : null}
                >
                  {item.name}
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
      {isOpen && (
        <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
          <DialogPanel>
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Cerrar Sesión</strong>
              <span className="block sm:inline">
                {" "}
                ¿Estás seguro de que quieres cerrar la sesión?
              </span>
            </div>
            <Button className="mt-8 w-full" onClick={logout}>
              Sí, cerrar sesión
            </Button>
            <Button className="mt-8 w-full" onClick={() => setIsOpen(false)}>
              No, volver atrás
            </Button>
          </DialogPanel>
        </Dialog>
      )}
    </Menu>
  );
};
