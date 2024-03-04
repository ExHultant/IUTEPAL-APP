import { Sidebar } from "../../Layout";
import {
  AreaChart,
  BarChart,
  Button,
  Card,
  Dialog,
  DialogPanel,
  Flex,
  Grid,
  LineChart,
  Subtitle,
  Text,
  Title,
} from "@tremor/react";
import {
  SolicitudesCita,
  consultorioMedicoData,
  pacientesEnfermedadesData,
} from "../../utils/data-reports/consultorio-data";
import { DocumentIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Reports = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sidebar pageTitle={"Reportes"}>
      <main>
        <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
          <DialogPanel className="max-w-4xl">
            <Flex alignItems="center" justifyContent="between" className="mb-4">
              <Title className="mb-3">Registrar Reporte</Title>
              <XMarkIcon
                className="h-6 w-6 cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </Flex>
            <Card className="p-10">
              <div className="mt-10">
                <Button
                  variant="secondary"
                  type="button"
                  className={`relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2`}
                >
                  <input
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <DocumentIcon className="mx-auto h-12 w-12 text-quartary" />
                  <Text className="mt-2 block text-sm font-semibold text-quartary">
                    Importar Excel
                  </Text>
                </Button>
              </div>
            </Card>
          </DialogPanel>
        </Dialog>
        <Button onClick={() => setIsOpen(true)} className="flex justify-end mb-5">Subir Reportes</Button>
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
