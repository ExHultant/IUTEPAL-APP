import { Flex, NumberInput, TextInput } from "@tremor/react";
import { DatePicker } from "@tremor/react";
import { Select, SelectItem } from "@tremor/react";
import { Textarea } from "@tremor/react";
import FileLoad from "../FileLoad/FileLoad";

export default function Form() {
  return (
    <form className="m-10">
      Nombre Apellido
      <Flex>
        <TextInput placeholder="Nombre" />
        <TextInput placeholder="Apellido" />
      </Flex>
      Fecha Cedula
      <Flex>
        <DatePicker placeholder="Fecha de Cita" />
        <NumberInput enableStepper={false} placeholder="Cedula" />
      </Flex>
      Cargo
      <Select>
        <SelectItem value="1">Administracion</SelectItem>
        <SelectItem value="2">Docente</SelectItem>
        <SelectItem value="3">Estudiante</SelectItem>
      </Select>
      Motivo de Consulta Diagnostico
      <Flex>
        <Textarea placeholder="Escriba el Motiva de la consulta del paciente" />
        <Textarea placeholder="Describa el diagnostico del paciente" />
      </Flex>
      Reposo
      <FileLoad />
    </form>
  );
}
