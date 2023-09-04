import React, { useState, useEffect } from "react";
import ChartInvestment from "./ChartInvestment";
import PublicPrivate from "./PublicPrivate";

export default function Investment() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const spreadsheetId = "1JBqJO0ZUnUBpTCUy4ZwCM5bMg1TEVhsrCK-u6Drb3i0";
      const sheetName = "Investment";
      const apiKey = "AIzaSyDOIEzBTh5G-rkoS7Zt50LWtHzYe8tK8as";

      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`
      );

      if (response.ok) {
        const jsonData = await response.json();
        const rows = jsonData.values || [];
        setData(rows);
      } else {
        console.error("Error fetching data from Google Sheets");
      }
    } catch (error) {
      console.error("Error fetching data from Google Sheets:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Title">
      <h2>Investissement de l'événement</h2>
      {loading ? (
        <p>Loading data...</p>
      ) : data.length > 0 ? (
        <div className="Body">
         <div className="Chart">  
            <ChartInvestment data={data} />
          </div>
          <div className="Table-Cards-Body">
          <table className="data-table">
            <tbody>
              {data.slice(1).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <PublicPrivate/>
          </div>
          
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}
