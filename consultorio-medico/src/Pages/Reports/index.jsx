import { Sidebar } from "../../Layout";
import {
  AreaChart,
  BarChart,
  Card,
  Grid,
  LineChart,
  Subtitle,
  Title,
} from "@tremor/react";
import { SolicitudesCita, consultorioMedicoData, pacientesEnfermedadesData } from "../../utils/data-reports/consultorio-data";

const Reports = () => {

  return (
    <Sidebar pageTitle={"Reportes"}>
      <main>
        <Card className="mb-10">
          <Title>Historial de Consultas y Exámenes (Número de casos)</Title>
          <AreaChart
            className="h-72 mt-4"
            data={consultorioMedicoData}
            index="fecha"
            categories={["Consultas", "Exámenes de Sangre"]}
            colors={["indigo", "cyan"]}
          />
        </Card>
        <Grid
          numItems={1}
          numItemsSm={2}
          numItemsLg={2}
          className="gap-5 m-auto"
        >
          <Card>
            <Title>Número de Pacientes con Enfermedades Crónicas (2021)</Title>
            <Subtitle>
              La evaluación de la prevalencia de enfermedades crónicas puede
              variar según la disponibilidad de datos y la cobertura del
              estudio.
            </Subtitle>
            <BarChart
              className="mt-6"
              data={pacientesEnfermedadesData}
              index="enfermedad"
              categories={["Número de pacientes"]}
              colors={["blue"]}
              yAxisWidth={48}
            />
          </Card>          
          <Card>
            <Title>Solicitudes de Citas (2022-2023)</Title>
            <LineChart
              className="h-72 mt-4"
              data={SolicitudesCita}
              index="fecha"
              categories={["2022", "2023"]}
              colors={["neutral", "indigo"]}
              yAxisWidth={30}
              connectNulls={true}
            />
          </Card>
        </Grid>
      </main>
    </Sidebar>
  );
};

export default Reports;
