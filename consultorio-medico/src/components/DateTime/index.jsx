import { useState, useEffect } from 'react';
import { format } from 'date-fns';

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
    <div className='relative flex flex-1 pt-5'>
      <h2 className='font-semibold text-xl'>Fecha:</h2>
      <p className='text-xl pl-3'>{format(currentDate, 'dd/MM/yyyy')}</p>
      <h2 className='font-semibold text-xl pl-6'>Hora:</h2>
      <p className='text-xl pl-3'>{format(currentDate, 'HH:mm:ss')}</p>
    </div>
  );
};

export default RealTimeDate;
