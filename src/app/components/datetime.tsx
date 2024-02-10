import React, { useState, useEffect } from 'react';

function CurrentDateTime(): JSX.Element {
  const [currentDateTime, setCurrentDateTime] = useState<Date>(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // Function to format date
  const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  // Function to format time
  const formatTime = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric' };
    return date.toLocaleTimeString(undefined, options);
  };

  return (
    <div className='text-right fixed top-0 right-2 p-5 text-darkPlum font-semibold text-md'>
      <p>{formatDate(currentDateTime)}</p>
      <p>{formatTime(currentDateTime)}</p>
    </div>
  );
}

export default CurrentDateTime;
