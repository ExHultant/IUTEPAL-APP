import { Button, Flex, NumberInput, Text, TextInput } from "@tremor/react";
import { DatePicker } from "@tremor/react";
import { Select, SelectItem } from "@tremor/react";
import { Textarea } from "@tremor/react";
import FileLoad from "../FileLoad/FileLoad";
import PropTypes from "prop-types";
import { useState } from "react";

export default function Form({ agregarPaciente }) {
  Form.propTypes = {
    agregarPaciente: PropTypes.func.isRequired,
  };

  const [fecha, setFecha] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const nombre = event.target.elements.nombre.value;
    const apellido = event.target.elements.apellido.value;
    const cedula = event.target.elements.cedula.value;
    const cargo = event.target.elements.cargo.value;
    const genero = event.target.elements.genero.value;
    const patologia = event.target.elements.patologia.value;
    const motivoConsulta = event.target.elements.motivoConsulta.value;
    const diagnostico = event.target.elements.diagnostico.value;
    const reposo = event.target.elements.reposo.files[0]; // Si FileLoad es un input de tipo file

    const nuevoPaciente = {
      // Aquí deberías recoger y formatear los datos del formulario
      nombre: nombre,
      apellido: apellido,
      fecha: fecha,
      cedula: cedula,
      cargo: cargo,
      genero: genero,
      patologia: patologia,
      motivoConsulta: motivoConsulta,
      diagnostico: diagnostico,
      reposo: reposo,
    };
    agregarPaciente(nuevoPaciente);
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-around mb-2">
        <Text>Nombre</Text>
        <Text>Apellido</Text>
      </div>
      <Flex justifyContent="around" alignItems="center">
        <TextInput name="nombre" placeholder="Nombre" className="mx-3" />
        <TextInput name="apellido" placeholder="Apellido" className="mx-3" />
      </Flex>
      <div className="flex items-center justify-around my-2">
        <Text>Fecha</Text>
        <Text>Cédula</Text>
      </div>
      <Flex justifyContent="around" alignItems="center">
        <DatePicker
          placeholder="Fecha de Cita"
          className="mx-3"
        />
        <NumberInput
          name="cedula"
          enableStepper={false}
          placeholder="Cédula"
          className="mx-3"
        />
      </Flex>
      <div className="mx-3">
        <Text className="my-2">Cargo</Text>
        <Select name="cargo" placeholder="Seleccionar">
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
        <Select name="genero" placeholder="Seleccionar" className="mx-3">
          <SelectItem value="1">Femenino</SelectItem>
          <SelectItem value="2">Masculino</SelectItem>
        </Select>
        <TextInput name="patologia" placeholder="Patologia" className="mx-3" />
      </Flex>
      <div className="flex items-center justify-around my-2">
        <Text>Motivo de Consulta</Text>
        <Text>Diagnostico</Text>
      </div>
      <Flex>
        <Textarea
          name="motivoConsulta"
          placeholder="Escriba el Motiva de la consulta del paciente"
          className="mx-3"
        />
        <Textarea
          name="diagnostico"
          placeholder="Describa el diagnostico del paciente"
          className="mx-3"
        />
      </Flex>
      <div className="mx-3 mb-5">
        <Text className="my-2">Reposo</Text>
        <FileLoad />
      </div>
      <Button type="submit" className="mx-3">
        Crear Paciente
      </Button>
    </form>
  );
}
