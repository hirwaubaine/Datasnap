import React, { useState, useEffect } from 'react';
import { read, write } from 'xlsx';
import TeamData from '../Ressources/TeamData.xlsx';
import SideMenu from '../../Components/SideMenu/Index';
import RessourcesSVG from '../../Images/Ressources2.svg';
import ArrowDown from '../../Images/arrow-down.svg';
import { saveAs } from 'file-saver'; // Import the saveAs function
import Event from './Event';
import Participant from './Participant';
import Team from './Team';

function Ressources() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Your Google Sheets API code (unchanged)
    } catch (error) {
      console.error('Error fetching data from Google Sheets:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadClick = async () => {
    try {
      // Fetch the Excel file as a blob
      const response = await fetch(TeamData);
      const blob = await response.blob();

      // Save the blob as a file using the file-saver library
      saveAs(blob, 'TeamData.xlsx');
    } catch (error) {
      console.error('Error downloading the file:', error);
    }
  };

  return (
    <div className="SideMenuAndPageContent">
      <SideMenu />
      <div className="PageContent">
        <div className="Ressources">
          <h1>Ressources disponible</h1>
        <div className='FileLine'>
          <Event/> <Team/> <Participant/>
          
        </div>
        </div>
      </div>
    </div>
  );
}

export default Ressources;
