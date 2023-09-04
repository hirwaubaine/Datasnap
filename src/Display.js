import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import Category from './DisplayData/Category/Category';
import Presentation from './DisplayData/Presentation/Presentation';
import Team from './DisplayData/Team/Team';
import Investment from './DisplayData/Investment/Investment';
import Visitors from './DisplayData/Visitors/Visitors';
import Organisational from './DisplayData/Organisational/Organisational';
import Impact from './DisplayData/Impact/Impact';
import AddHeader from './Components/AppHeader/Index';
import DetailedOrganisational from './DisplayData/Organisational/DetailedOrganisational';

function Display() {
  const dashboardRef = useRef(null);

  const handleDownload = () => {
    const element = dashboardRef.current;

    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', [canvas.width, canvas.height]);
      
      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      pdf.save('dashboard.pdf');
    });
  };

  return (
    <div className='Display'>
      <div id="dashboard" ref={dashboardRef}>
      <AddHeader />
        <Presentation />
        <div className="Pie-Body">
          <Category />
          <Team />
        </div> 
        <Investment />
        <Organisational />
        <Visitors />
        <Impact />
      </div>
      <div className='PageIcons' >
      <button onClick={handleDownload}>Télécharger PDF</button>
      </div>
    </div>
  );
}

export default Display;
