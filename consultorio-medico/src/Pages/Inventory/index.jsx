import { Sidebar } from "../../Layout";
import {
  Button,
  Card,
  Dialog,
  DialogPanel,
  Flex,
  Grid,
  List,
  ListItem,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Text,
  Title,
} from "@tremor/react";
import { medicalSupplies, medications } from "../../utils/data-inventory";
import {
  DocumentIcon,
  UserGroupIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

function Inventory() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sidebar pageTitle={"Inventario"}>
      <main>
        <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
          <DialogPanel className="max-w-4xl">
            <Flex alignItems="center" justifyContent="between" className="mb-4">
              <Title className="mb-3">Importar Inventario</Title>
              <XMarkIcon
                className="h-6 w-6 cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </Flex>
            <Card className="p-10">
              <TabGroup>
                <TabList className="mt-8">
                  <Tab icon={UserGroupIcon}>Importar Medicamentos</Tab>
                  <Tab icon={UserIcon}>Importar Suministros</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <div className="mt-10">
                      <Button
                        variant="secondary"
                        type="button"
                        className={`relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2`}
                      >
                        <input
                          type="file"
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <DocumentIcon className="mx-auto h-12 w-12 text-quartary" />
                        <Text className="mt-2 block text-sm font-semibold text-quartary">
                          Importar Excel
                        </Text>
                      </Button>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="mt-10">
                      <Button
                        variant="secondary"
                        type="button"
                        className={`relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2`}
                      >
                        <input
                          type="file"
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <DocumentIcon className="mx-auto h-12 w-12 text-quartary" />
                        <Text className="mt-2 block text-sm font-semibold text-quartary">
                          Importar Excel
                        </Text>
                      </Button>
                    </div>
                  </TabPanel>
                </TabPanels>
              </TabGroup>
            </Card>
          </DialogPanel>
        </Dialog>

        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none flex justify-end mb-5">
          <Button
            variant="primary"
            type="button"
            className="block rounded-md bg-secondary px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary transition-all duration-300"
            onClick={() => setIsOpen(true)}
          >
            Registrar
          </Button>
        </div>
        <Grid numItemsLg={2} className="m-auto">
          <Card className="max-w-xs">
            <Title>Inventario de Medicamentos</Title>
            <List>
              {medications.map((medication) => (
                <ListItem key={medication.name}>
                  <Text>{medication.name}</Text>
                  <Text>Cantidad: {medication.quantity}</Text>
                </ListItem>
              ))}
            </List>
          </Card>

          <Card className="max-w-xs">
            <Title>Inventario de Suministros Médicos</Title>
            <List>
              {medicalSupplies.map((supply) => (
                <ListItem key={supply.name}>
                  <Text>{supply.name}</Text>
                  <Text>Cantidad: {supply.quantity}</Text>
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
