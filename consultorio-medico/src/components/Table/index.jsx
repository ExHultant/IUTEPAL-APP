import Form from "../Form";
import {
  Badge,
  Button,
  Card,
  Dialog,
  DialogPanel,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  Title,
} from "@tremor/react";
import { data } from "../../utils/data-tables";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export const TablePacientes = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    
    <div className="px-4 sm:px-6 lg:px-8">      
    <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
        <DialogPanel className="max-w-6xl">
          <div className="flex justify-between">
          <Title className="mb-3">Formulario de Registro de Pacientes IUTEPAL</Title>
          <XMarkIcon className="h-7 w-7 cursor-pointer" onClick={() => setIsOpen(false)}/>
          </div>
          <Form />          
        </DialogPanel>
      </Dialog>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          {/* <h2 className="text-2xl font-medium">Pacientes</h2> */}
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Button
            onClick={() => setIsOpen(true)}
            type="button"
            className="block rounded-md bg-secondary px-3 py-2 text-center text-md font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary hover:shadow-md transition duration-300 ease-in-out"
          >
            Añadir Paciente
          </Button>
        </div>
      </div>
      <Card className="mt-5">
        <Title>Lista de Pacientes Registrados</Title>
        <Table className="mt-5">
          <TableHead>
            <TableRow>
              <TableHeaderCell>Nombre y Apellido</TableHeaderCell>
              <TableHeaderCell>Fecha</TableHeaderCell>
              <TableHeaderCell>Cedula</TableHeaderCell>
              <TableHeaderCell>Cargo</TableHeaderCell>
              <TableHeaderCell>Motivo de Consulta</TableHeaderCell>
              <TableHeaderCell>Diagnostico</TableHeaderCell>
              <TableHeaderCell>Ver</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.name}>
                <TableCell>{item.name}</TableCell>
                <TableCell>
                  <Text>{item.date}</Text>
                </TableCell>
                <TableCell>
                  <Text>{item.id}</Text>
                </TableCell>
                <TableCell>
                  <Text>{item.post}</Text>
                </TableCell>
                <TableCell>
                  <Text>{item.MC}</Text>
                </TableCell>
                <TableCell>
                  <Badge color="emerald">{item.status}</Badge>
                </TableCell>
                <TableCell>
                <Badge onClick={() => setIsOpen(true)} color="blue" className="cursor-pointer">Ver Perfil</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};
