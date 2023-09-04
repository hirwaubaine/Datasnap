import React, { useState, useEffect } from "react";
import Description from "./Description";

export default function Presentation() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const spreadsheetId = "1JBqJO0ZUnUBpTCUy4ZwCM5bMg1TEVhsrCK-u6Drb3i0";
      const sheetName = "Presentation";
      const apiKey = "AIzaSyDOIEzBTh5G-rkoS7Zt50LWtHzYe8tK8as";

      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`
      );

      if (response.ok) {
        const jsonData = await response.json();
        const rows = jsonData.values || [];
        setData(rows);
      } else {
        console.error("Error fetching data ");
      }
    } catch (error) {
      console.error("Error fetching data ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Title">
      {loading ? (
        <p>Loading data...</p>
      ) : data.length > 0 ? (
        <div className="Presentation">
          <div className="">
          <table>
            <thead >
              <tr> 
                {data[0].map((header, index) => (
                  <th key={index}>Rapport d'impact économique de {header} </th>
                ))}
              </tr>
            </thead>
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
          <Description />
          </div>
        </div>
        
      ) : (
        <p>No data available</p>
      )}
     
    </div>
  );
}