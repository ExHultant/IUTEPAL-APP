import { useState, useEffect } from "react";
import { format } from "date-fns";
import { Text, Title } from "@tremor/react";

const RealTimeDate = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Actualiza la fecha cada segundo

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="relative flex flex-1 pt-5 justify-end">
      <Title className="font-semibold text-xl">Fecha:</Title>
      <Text className="text-xl pl-3">{format(currentDate, "dd/MM/yyyy")}</Text>
      <Title className="font-semibold text-xl pl-6">Hora:</Title>
      <Text className="text-xl pl-3">{format(currentDate, "HH:mm:ss")}</Text>
    </div>
  );
};

export default RealTimeDate;
