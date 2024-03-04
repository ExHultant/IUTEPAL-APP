// src/contexts/PacientesContext.js
import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const PacientesContext = createContext();

export const usePacientes = () => useContext(PacientesContext);

export { PacientesContext };

export default PacientesContext;

export const PacientesProvider = ({ children }) => {
  PacientesProvider.propTypes = {
    children: PropTypes.any.isRequired,    
  };

  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    // Cargar los pacientes desde localStorage al iniciar
    const pacientesLocalStorage =
      JSON.parse(localStorage.getItem("pacientes")) || [];
    setPacientes(pacientesLocalStorage);
  }, []);

  useEffect(() => {
    // Guardar los pacientes en localStorage cuando cambien
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const agregarPaciente = (paciente) => {
    setPacientes((prevPacientes) => [...prevPacientes, paciente]);
  };

  return (
    <PacientesContext.Provider value={{ pacientes, agregarPaciente }}>
      {children}
    </PacientesContext.Provider>
  );
};
