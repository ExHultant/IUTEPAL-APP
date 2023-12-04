import { Sidebar } from "../../Layout";
import { Card, Grid, List, ListItem, Title } from "@tremor/react";
import MyModal from "../../components/Modal";
import { Dialog } from "@headlessui/react";
import { DocumentIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import {
  Flex,
  ProgressBar,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Text,
} from "@tremor/react";

import { UserGroupIcon, UserIcon } from "@heroicons/react/24/solid";

const medications = [
  {
    name: "Paracetamol",
    quantity: 50,
  },
  {
    name: "Ibuprofeno",
    quantity: 30,
  },
  {
    name: "Amoxicilina",
    quantity: 20,
  },
  {
    name: "Omeprazol",
    quantity: 15,
  },
  {
    name: "Vitamina C",
    quantity: 40,
  },
  {
    name: "Loratadina",
    quantity: 10,
  },
  {
    name: "Aspirina",
    quantity: 25,
  },
  {
    name: "Diazepam",
    quantity: 8,
  },
  {
    name: "Atorvastatina",
    quantity: 12,
  },
  {
    name: "Hidroclorotiazida",
    quantity: 18,
  },
];

const medicalSupplies = [
  {
    name: "Jeringas",
    quantity: 100,
  },
  {
    name: "Algodón",
    quantity: 200,
  },
  {
    name: "Vendajes",
    quantity: 50,
  },
  {
    name: "Guantes médicos",
    quantity: 150,
  },
  {
    name: "Termómetro",
    quantity: 5,
  },
  {
    name: "Gasas estériles",
    quantity: 100,
  },
];

function Inventory() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <Sidebar pageTitle={"Inventario"}>
      <main>
        <MyModal isOpen={isOpen} closeModal={closeModal}>
          <div className="flex m-5">
            <Dialog.Title
              as="h3"
              className="text-lg font-medium leading-6 text-gray-900 flex flex-1"
            >
              Registrar Articulos al Inventario
            </Dialog.Title>
            <XMarkIcon
              className="w-7 h-7 ml-5 cursor-pointer"
              onClick={closeModal}
            ></XMarkIcon>
          </div>
          <Card className="p-10">
            <TabGroup>
              <TabList className="mt-8">
                <Tab icon={UserGroupIcon}>Importar Medicamentos</Tab>
                <Tab icon={UserIcon}>Importar Suministros</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <div className="mt-10">
                    <button
                      type="button"
                      className={`relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                    >
                      <DocumentIcon className="mx-auto h-12 w-12 text-gray-400" />
                      <span className="mt-2 block text-sm font-semibold text-gray-900">
                        Importar Excel
                      </span>
                    </button>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="mt-10">
                    <button
                      type="button"
                      className={`relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                    >
                      <DocumentIcon className="mx-auto h-12 w-12 text-gray-400" />
                      <span className="mt-2 block text-sm font-semibold text-gray-900">
                        Importar Excel
                      </span>
                    </button>
                  </div>
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </Card>
        </MyModal>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none flex justify-end mb-5">
          <button
            onClick={openModal}
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Registrar
          </button>
        </div>
        <Grid numItemsLg={2} className="gap-96 m-auto">
          <Card className="max-w-xs">
            <Title>Inventario de Medicamentos</Title>
            <List>
              {medications.map((medication) => (
                <ListItem key={medication.name}>
                  <span>{medication.name}</span>
                  <span>Cantidad: {medication.quantity}</span>
                </ListItem>
              ))}
            </List>
          </Card>

          <Card className="max-w-xs">
            <Title>Inventario de Suministros Médicos</Title>
            <List>
              {medicalSupplies.map((supply) => (
                <ListItem key={supply.name}>
                  <span>{supply.name}</span>
                  <span>Cantidad: {supply.quantity}</span>
                </ListItem>
              ))}
            </List>
          </Card>
        </Grid>
      </main>
    </Sidebar>
  );
}

export default Inventory;
