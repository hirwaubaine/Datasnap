import React, { useState, useEffect } from "react";

import JobCreation from "./JobCreation";
import ImpactVisitorOrganisation from "./ImpactVisitorOrganisation";

export default function Impact() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const spreadsheetId = "1JBqJO0ZUnUBpTCUy4ZwCM5bMg1TEVhsrCK-u6Drb3i0";
      const sheetName = "Impact";
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
     <h1>Impact économique</h1>
     <div className="Impact">
            <JobCreation />
            {loading ? (
        <p>Loading data...</p>
      ) : data.length > 0 ? (
       <div className="Card" >
        <div className="ImpactCard">
          {data.slice(1).map((row, rowIndex) => (
            <div className="LastCardItem" key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <p key={cellIndex}>{cell}</p>
              ))}
            </div>
          ))}
        </div>
        <ImpactVisitorOrganisation/>
        </div>
      ) : (
        <p>No data available</p>
        
      )}
      
      </div>
      
      </div>
  );
}

