import React, { useState, useEffect } from "react";
import ChartVisitors from "./ChartVisitors"
import Sejours from "./Sejours";

export default function Visitors() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const spreadsheetId = "1JBqJO0ZUnUBpTCUy4ZwCM5bMg1TEVhsrCK-u6Drb3i0";
      const sheetName = "Visitors";
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
      <h2>Depences des visiteurs</h2>
      {loading ? (
        <p>Loading data...</p>
      ) : data.length > 0 ? (

          <div className="Body">
            <div className="BarChart">
             <ChartVisitors data={data} />
             </div>
          <div className="Table-Cards-Body">      
          <table className="data-table">
            <tbody>
              {data.slice(0).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))} 
                </tr>
              ))}  
            </tbody>
          </table>
          <Sejours/>
          </div>
          </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}
