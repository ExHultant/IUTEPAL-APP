import { useState } from "react";
import MyModal from "../Modal";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Form from "../Form";
import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  Title,
} from "@tremor/react";

const data = [
  {
    name: "Viola Amherd",
    date: "19/11/2023",
    id: "123456789",
    post: "Administracion",
    MC: "Preempleo",
    status: "activo",
  },
  {
    name: "Simonetta Sommaruga",
    date: "19/11/2023",
    id: "123456789",
    MC: "Preempleo",
    post: "Administracion",
    status: "activo",
  },
  {
    name: "Alain Berset",
    date: "19/11/2023",
    id: "123456789",
    MC: "Preempleo",
    post: "Estudiante",
    status: "activo",
  },
  {
    name: "Ignazio Cassis",
    date: "19/11/2023",
    id: "123456789",
    post: "Administracion",
    MC: "Preempleo",
    status: "activo",
  },
  {
    name: "Karin Keller-Sutter",
    date: "19/11/2023",
    id: "123456789",
    MC: "Preempleo",
    post: "Estudiante",
    status: "activo",
  },
  {
    name: "Guy Parmelin",
    date: "19/11/2023",
    id: "123456789",
    MC: "Preempleo",
    post: "Administracion",
    status: "activo",
  },
  {
    name: "Elisabeth Baume-Schneider",
    date: "19/11/2023",
    id: "123456789",
    MC: "Preempleo",
    post: "Estudiante",
    status: "activo",
  },
];

export const TablePacientes = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <MyModal isOpen={isOpen} closeModal={closeModal}>
        <div className="flex m-5">
          <Dialog.Title
            as="h3"
            className="text-lg font-medium leading-6 text-gray-900 flex flex-1"
          >
            Formulario de Registro de Pacientes
          </Dialog.Title>
          <XMarkIcon
            className="w-7 h-7 ml-5 cursor-pointer"
            onClick={closeModal}
          ></XMarkIcon>
        </div>
        <Form />
      </MyModal>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h2 className="text-2xl font-medium">Pacientes</h2>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            onClick={openModal}
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Añadir Paciente
          </button>
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
                <Badge onClick={openModal} color="blue" className="cursor-pointer">Ver Perfil</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};
