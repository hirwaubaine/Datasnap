import React, { useState, useEffect } from "react";
export default function Description() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const spreadsheetId = "1JBqJO0ZUnUBpTCUy4ZwCM5bMg1TEVhsrCK-u6Drb3i0";
      const sheetName = "DaysOfStay";
      const apiKey = "AIzaSyDOIEzBTh5G-rkoS7Zt50LWtHzYe8tK8as"; 

      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`
      );

      if (response.ok) {
        const jsonData = await response.json();
        const rows = jsonData.values || [];
        setData(rows);
      } else {
        console.error("Error fetching data");
      }
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="DaysOfStay">
      {loading ? (
        <p>Loading data...</p>
      ) : data.length > 0 ? (
        <div className="Card">
          {data.slice(1).map((row, rowIndex) => (
            <div className="CardItem" key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <p key={cellIndex}>{cell}</p>
              ))}
            </div>
          ))}
          
          {/* <div className="Disclaimer">
              <p>Seuls les participants non locaux présents uniquement pour l'événement sont pris en considération</p>
          </div> */}
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}
