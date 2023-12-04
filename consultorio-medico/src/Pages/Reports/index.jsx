import { useState } from "react";
import { Sidebar } from "../../Layout";
import { AreaChart, BarChart, Card, DonutChart, Grid, LineChart, Subtitle, Title } from "@tremor/react";

const consultorioMedicoData = [
  { fecha: "Ene 22", Consultas: 150, "Exámenes de Sangre": 120 },
  { fecha: "Feb 22", Consultas: 180, "Exámenes de Sangre": 90 },
  { fecha: "Mar 22", Consultas: 200, "Exámenes de Sangre": 110 },
  { fecha: "Abr 22", Consultas: 160, "Exámenes de Sangre": 100 },
  { fecha: "May 22", Consultas: 140, "Exámenes de Sangre": 130 },
  { fecha: "Jun 22", Consultas: 190, "Exámenes de Sangre": 80 },
];

const chartData2 = [
  { fecha: "Ene 23", 2022: 45, 2023: 78 },
  { fecha: "Feb 23", 2022: 52, 2023: 71 },
  { fecha: "Mar 23", 2022: 48, 2023: 80 },
  { fecha: "Abr 23", 2022: 61, 2023: 65 },
  { fecha: "May 23", 2022: 55, 2023: 58 },
  { fecha: "Jun 23", 2022: 67, 2023: 62 },
  { fecha: "Jul 23", 2022: 60, 2023: 54 },
  { fecha: "Ago 23", 2022: 72, 2023: 49 },
  { fecha: "Sep 23", 2022: 65, 2023: 52 },
  { fecha: "Oct 23", 2022: 68, 2023: null },
  { fecha: "Nov 23", 2022: 74, 2023: null },
  { fecha: "Dic 23", 2022: 71, 2023: null },
];

const especiesAmenazadasData = [
  { nombre: "Anfibios", "Número de especies amenazadas": 2488 },
  { nombre: "Aves", "Número de especies amenazadas": 1445 },
  { nombre: "Crustáceos", "Número de especies amenazadas": 743 },
  { nombre: "Helechos", "Número de especies amenazadas": 281 },
  { nombre: "Arácnidos", "Número de especies amenazadas": 251 },
  { nombre: "Corales", "Número de especies amenazadas": 232 },
  { nombre: "Algas", "Número de especies amenazadas": 98 },
];

const ventasCiudadesData = [
  { nombre: "Nueva York", ventas: 9800 },
  { nombre: "Londres", ventas: 4567 },
  { nombre: "Hong Kong", ventas: 3908 },
  { nombre: "San Francisco", ventas: 2400 },
  { nombre: "Singapur", ventas: 1908 },
  { nombre: "Zurich", ventas: 1398 },
];

const Reports = () => {
  const [value, setValue] = useState(null);

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
        <Grid numItems={1} numItemsSm={2} numItemsLg={2} className="gap-5 m-auto">
        <Card>
          <Title>Número de Especies Amenazadas de Extinción (2021)</Title>
          <Subtitle>
            La Lista Roja de la UICN solo ha evaluado una pequeña parte de todas las
            especies conocidas en el mundo.
          </Subtitle>
          <BarChart
            className="mt-6"
            data={especiesAmenazadasData}
            index="nombre"
            categories={["Número de especies amenazadas"]}
            colors={["blue"]}
            yAxisWidth={48}
          />
        </Card>
        <Card>
          <Title>Solicitudes de Citas (2022-2023)</Title>
          <LineChart
            className="h-72 mt-4"
            data={chartData2}
            index="fecha"
            categories={["2022", "2023"]}
            colors={["neutral", "indigo"]}
            yAxisWidth={30}
            onValueChange={(v) => setValue(v)}
            connectNulls={true}
          />
        </Card>
        </Grid>        
        <Card className="mt-10">
          <Title>Ventas por Ciudad</Title>
          <DonutChart
            className="mt-6"
            data={ventasCiudadesData}
            category="ventas"
            index="nombre"
            colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
          />
        </Card>

        

      </main>
    </Sidebar>
  );
};

export default Reports;
