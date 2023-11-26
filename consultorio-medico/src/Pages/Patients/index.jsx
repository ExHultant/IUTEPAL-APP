import { Sidebar } from "../../Layout";
import { TablePacientes } from "../../components/Table";

function Patients() {
    return (
      <>
        <Sidebar pageTitle={"Pacientes"}>
          <main>
          <TablePacientes />
          </main>
        </Sidebar>
      </>
    );
  }
  
  export default Patients;