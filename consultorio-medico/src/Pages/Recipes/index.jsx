import { Button, Dialog, DialogPanel, Flex, Title } from "@tremor/react";
import { Sidebar } from "../../Layout";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import FileLoad from "../../components/FileLoad/FileLoad";

function Recipes() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sidebar pageTitle={"Recipes y Reposos"}>
      <main>
        <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
          <DialogPanel className="max-w-4xl">
            <Flex alignItems="center" justifyContent="between" className="mb-4">
              <Title className="mb-3">Importar/Registrar Reposo o Recipe</Title>
              <XMarkIcon className="h-6 w-6 cursor-pointer" onClick={() => setIsOpen(false)} />
            </Flex>
            <FileLoad />
          </DialogPanel>
        </Dialog>

        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none flex justify-end">
          <Button
            onClick={() => setIsOpen(true)}
            type="button"
            className="block rounded-md bg-secondary px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary transition-all duration-300"
          >
            Importar
          </Button>
        </div>

        <p className="mt-3">
          No se encuentran Reposos registrados Actualmente.
        </p>
      </main>
    </Sidebar>
  );
}

export default Recipes;
