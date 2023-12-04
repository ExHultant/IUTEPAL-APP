import { Dialog } from "@headlessui/react";
import { Sidebar } from "../../Layout";
import MyModal from "../../components/Modal";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Form from "../../components/Form";
import { useState } from "react";
import FileLoad from "../../components/FileLoad/FileLoad";

function Recipes() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <Sidebar pageTitle={"Recipes y Reposos"}>
      <main>
      <MyModal isOpen={isOpen} closeModal={closeModal}>
        <div className="flex m-5">
          <Dialog.Title
            as="h3"
            className="text-lg font-medium leading-6 text-gray-900 flex flex-1"
          >
            Registrar Reposo/Recipe
          </Dialog.Title>
          <XMarkIcon
            className="w-7 h-7 ml-5 cursor-pointer"
            onClick={closeModal}
          ></XMarkIcon>
        </div>
        <FileLoad />
      </MyModal>
      <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none flex justify-end">
          <button
            onClick={openModal}
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Importar
          </button>
        </div>

        <p className="mt-3">No se encuentran Reposos registrados Actualmente.</p>
      </main>
    </Sidebar>
  );
}

export default Recipes;
