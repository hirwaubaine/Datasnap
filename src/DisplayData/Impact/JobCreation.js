import React, { useState, useEffect } from "react";
import ChartJobCreation from "./ChartJobCreation"
import Benevoles from "./Benevoles";

export default function JobCreation() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const spreadsheetId = "1JBqJO0ZUnUBpTCUy4ZwCM5bMg1TEVhsrCK-u6Drb3i0";
      const sheetName = "JobCreation";
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
    <div className="">
      <h2>Création des emplois</h2>
      {loading ? (
        <p>Loading data...</p>
      ) : data.length > 0 ? (
        <div className="Body_Impact">
          <div className="">
            <ChartJobCreation data={data} />
          </div>
          <Benevoles />
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}
