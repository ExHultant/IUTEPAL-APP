import { Button, Flex, NumberInput, Text, TextInput } from "@tremor/react";
import { DatePicker } from "@tremor/react";
import { Select, SelectItem } from "@tremor/react";
import { Textarea } from "@tremor/react";
import FileLoad from "../FileLoad/FileLoad";

export default function Form() {
  return (
    <form>
      <div className="flex items-center justify-around mb-2">
        <Text>Nombre</Text>
        <Text>Apellido</Text>
      </div>
      <Flex justifyContent="around" alignItems="center">
        <TextInput placeholder="Nombre" className="mx-3" />
        <TextInput placeholder="Apellido" className="mx-3" />
      </Flex>
      <div className="flex items-center justify-around my-2">
        <Text>Fecha</Text>
        <Text>Cédula</Text>
      </div>
      <Flex justifyContent="around" alignItems="center">
        <DatePicker placeholder="Fecha de Cita" className="mx-3" />
        <NumberInput
          enableStepper={false}
          placeholder="Cédula"
          className="mx-3"
        />
      </Flex>
      <div className="mx-3">
        <Text className="my-2">Cargo</Text>
        <Select placeholder="Seleccionar">
          <SelectItem value="1">Administración</SelectItem>
          <SelectItem value="2">Docente</SelectItem>
          <SelectItem value="3">Estudiante</SelectItem>
        </Select>
      </div>
      <div className="flex items-center justify-around my-2">
        <Text>Género</Text>
        <Text>Patología</Text>
      </div>
      <Flex justifyContent="around" alignItems="center">
        <Select placeholder="Seleccionar" className="mx-3">
          <SelectItem value="1">Femenino</SelectItem>
          <SelectItem value="2">Masculino</SelectItem>
        </Select>
        <TextInput placeholder="Patologia" className="mx-3" />
      </Flex>
      <div className="flex items-center justify-around my-2">
        <Text>Motivo de Consulta</Text>
        <Text>Diagnostico</Text>
      </div>
      <Flex>
        <Textarea
          placeholder="Escriba el Motiva de la consulta del paciente"
          className="mx-3"
        />
        <Textarea
          placeholder="Describa el diagnostico del paciente"
          className="mx-3"
        />
      </Flex>
      <div className="mx-3">
        <Text className="my-2">Reposo</Text>
        <FileLoad />
      </div>
      <Button type="submit">Crear Paciente </Button>
    </form>
  );
}
