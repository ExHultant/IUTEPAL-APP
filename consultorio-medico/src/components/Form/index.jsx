import { Flex, NumberInput, TextInput } from "@tremor/react";
import { DatePicker } from "@tremor/react";
import { Select, SelectItem } from "@tremor/react";
import { Textarea } from "@tremor/react";
import FileLoad from "../FileLoad/FileLoad";

export default function Form() {
  return (
    <form className="m-10">
      <div className="flex items-center justify-around mb-2">
        <h2>Nombre</h2>
        <h2>Apellido</h2>
      </div>
      <Flex justifyContent="around" alignItems="center">
        <TextInput placeholder="Nombre" />
        <TextInput placeholder="Apellido" />
      </Flex>
      <div className="flex items-center justify-around my-2">
        <h2>Fecha</h2>
        <h2>Cedula</h2>
      </div>
      <Flex>
        <DatePicker placeholder="Fecha de Cita" />
        <NumberInput enableStepper={false} placeholder="Cedula" />
      </Flex>
      <h2 className="my-2">Cargo</h2>
      <Select placeholder="Seleccionar">
        <SelectItem value="1">Administracion</SelectItem>
        <SelectItem value="2">Docente</SelectItem>
        <SelectItem value="3">Estudiante</SelectItem>
      </Select>
      <div className="flex items-center justify-around my-2">
        <h2>Genero</h2>
        <h2>Patologia</h2>
      </div>
      <Flex justifyContent="around" alignItems="center">
        <Select placeholder="Seleccionar">
          <SelectItem value="1">Femenino</SelectItem>
          <SelectItem value="2">Masculino</SelectItem>          
        </Select>
        <TextInput placeholder="Patologia" />
      </Flex>
      <div className="flex items-center justify-around">
        <h2>Motivo de Consulta</h2>
        <h2>Diagnostico</h2>
      </div>
      <Flex>
        <Textarea placeholder="Escriba el Motiva de la consulta del paciente" />
        <Textarea placeholder="Describa el diagnostico del paciente" />
      </Flex>
      <h2>Reposo</h2>
      <FileLoad />
    </form>
  );
}
