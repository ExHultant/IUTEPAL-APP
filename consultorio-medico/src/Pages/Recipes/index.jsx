import {
  Button,
  Dialog,
  DialogPanel,
  Flex,
  Title,
  Card,
  List,
  ListItem,
} from "@tremor/react";
import { Sidebar } from "../../Layout";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import FileLoad from "../../components/FileLoad/FileLoad";

const reposos = [
  {
    name: "Carlos Gómez",
    recipes: "Ver",
  },
  {
    name: "Mariana Fuentes",
    recipes: "Ver",
  },
  {
    name: "José Martínez",
    recipes: "Ver",
  },
  {
    name: "Luisa Castillo",
    recipes: "Ver",
  },
  {
    name: "Gabriela Ramírez",
    recipes: "Ver",
  },
];

function Recipes() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sidebar pageTitle={"Recipes y Reposos"}>
      <main>
        <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
          <DialogPanel className="max-w-4xl">
            <Flex alignItems="center" justifyContent="between" className="mb-4">
              <Title className="mb-3">Importar/Registrar Reposo o Recipe</Title>
              <XMarkIcon
                className="h-6 w-6 cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
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
        {/* <p className="mt-3">
          No se encuentran Reposos registrados Actualmente.
        </p> */}
        <Card className="mx-auto mt-5 w-full">
          <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
            Reposos Disponibles
          </h3>
          <List className="mt-2">
            {reposos.map((item) => (
              <ListItem key={item.reposos}>
                <span>{item.name}</span>
                <a href="https://mag.wcoomd.org/uploads/2018/05/blank.pdf" target="_blank" rel="noreferrer" className="hover:underline hover:text-primary font-bold">
                  {item.recipes}
                </a>
              </ListItem>
            ))}
          </List>
        </Card>
      </main>
    </Sidebar>
  );
}

export default Recipes;
