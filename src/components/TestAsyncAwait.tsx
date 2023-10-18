import React, { useEffect, useState } from "react";
import axios from "axios";

const TestAsyncAwait = () => {
  const [tableData, setTableData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap"
        );
        setTableData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
  <>
     <h3>Async Await Data Table</h3>
     <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Price</th>
        </tr>
        </thead>
        <tbody>
            {tableData.map((tableData) => (
                <tr>
                    <td> {tableData.name}</td>
                    <td>{tableData.current_price}</td>
                </tr>
            )
                
            )}
        </tbody>
       
     </table>
  </>
  )
};

export default TestAsyncAwait;
