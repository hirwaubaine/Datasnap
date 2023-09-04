import React, { useState, useEffect } from 'react';
import { read, write, utils } from 'xlsx';
import ParticipantData from '../Ressources/ParticipantData.xlsx';
import SideMenu from '../../Components/SideMenu/Index';
import RessourcesSVG from '../../Images/Ressources2.svg';
import ArrowDown from '../../Images/arrow-down.svg';
import { saveAs } from 'file-saver'; // Import the saveAs function

function Participant() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(ParticipantData);
      const buffer = await response.arrayBuffer();

      // Convert the array buffer to an array of bytes
      const data = new Uint8Array(buffer);

      // Read the Excel file using xlsx.read function
      const workbook = read(data, { type: 'array' });

      // Assuming your data is in the first sheet, use the following code to read the data
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = utils.sheet_to_json(worksheet);

      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data from the Excel file:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadClick = async () => {
    try {
      // Fetch the Excel file as a blob
      const response = await fetch(ParticipantData);
      const blob = await response.blob();

      // Save the blob as a file using the file-saver library
      saveAs(blob, 'ParticipantData.xlsx');
    } catch (error) {
      console.error('Error downloading the file:', error);
    }
  };

  return (

      <div className="FileLine">
        {loading ? (
          <p>Loading data...</p>
        ) : data.length > 0 ? (
          <div className="File" onClick={handleDownloadClick}>
            <img src={RessourcesSVG} alt="Ressources" />
            <div>
              <h3>Questionnaires des participants.xlsx</h3>
              <p>10 KB</p>
            </div>
            <img src={ArrowDown} alt="ArrowDown" />
          </div>
        ) : (
          <p>No data available</p>
        )}
      </div>
   
  );
}

export default Participant;
