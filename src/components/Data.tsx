import React, { useState, useEffect } from 'react';

function EmployeeData() {
  const [employeeData, setEmployeeData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://hub.dummyapis.com/employee');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();

        setEmployeeData(jsonData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Employee Data</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {employeeData.map((employee, index) => (
            <li key={index}>
              <p>Name:</p> {employee.employee_name},
               <h3>Age:</h3> {employee.employee_age}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EmployeeData;
