import { TablePacientes } from "../../components/Table"
import { Sidebar } from "../../Layout"

function Dashboard() {

  return (
    <>
      <Sidebar pageTitle={"Inicio"}>
        <main>
        <TablePacientes />
        </main>
      </Sidebar>
    </>
  )
}

export default Dashboard