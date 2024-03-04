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
  TextInput,
  Title,
} from "@tremor/react";
import { useCallback, useState } from "react";
import { EyeIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { RiSearchLine } from "@remixicon/react";
import { Pagination } from "@mui/material";
import { data } from "../../utils/data-tables";

export const TablePacientes = () => {
  const [pacientes, setPacientes] = useState(data);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(0);
  const rowsPerPage = 10;

  const agregarPaciente = useCallback((nuevoPaciente) => {
    setPacientes((prevPacientes) => [...prevPacientes, nuevoPaciente]);
  }, []);

  const filteredData = searchTerm
    ? pacientes.filter((item) => item.name.includes(searchTerm))
    : pacientes;

  const paginatedData = filteredData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleChangePage = (event, newPage) => {
    if (typeof newPage === "number") {
      setPage(newPage - 1);
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
        <DialogPanel className="max-w-6xl">
          <div className="flex justify-between">
            <Title className="mb-3">
              Formulario de Registro de Pacientes IUTEPAL
            </Title>
            <XMarkIcon
              className="h-7 w-7 cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>
          <Form agregarPaciente={agregarPaciente} />
        </DialogPanel>
      </Dialog>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <TextInput
            icon={RiSearchLine}
            placeholder="Buscar Paciente..."
            className="w-[400px]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
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
              <TableHeaderCell>Fecha de Consulta</TableHeaderCell>
              <TableHeaderCell>Cedula</TableHeaderCell>
              <TableHeaderCell>Cargo</TableHeaderCell>
              <TableHeaderCell>Motivo de Consulta</TableHeaderCell>
              <TableHeaderCell>Diagnostico</TableHeaderCell>
              <TableHeaderCell>Ver</TableHeaderCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {paginatedData.map((item) => (
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
                  <Badge color={item.status === "activo" ? "emerald" : "red"}>
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <EyeIcon
                    className="size-7 ml-2 cursor-pointer hover:text-primary text-secondary"
                    onClick={() => setIsOpen(true)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {filteredData.length === 0 && (
          <Title className="text-center mt-5">
            No existen pacientes registrados.
          </Title>
        )}
      </Card>
      <Pagination
        count={Math.ceil(filteredData.length / rowsPerPage)}
        page={page + 1 || 0}
        onChange={handleChangePage}
        color="primary"
        className="mt-5 flex justify-center"
      />
    </div>
  );
};
