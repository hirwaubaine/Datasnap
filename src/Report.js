import React, { useState, useEffect } from "react";
import "./styles.css";

export default function Report() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const spreadsheetId = "1JBqJO0ZUnUBpTCUy4ZwCM5bMg1TEVhsrCK-u6Drb3i0";
      const sheetName = "PullData";
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
    <div className="Report">
      <h1>Rapport d'impact économique </h1>
      {loading ? (
        <p>Loading data...</p>
      ) : data.length > 0 ? (
        <table className="data-table">
          <thead>
            <tr>
              {data[0].map((header, index) => (
                <th key={index}>{header}</th>
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
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

