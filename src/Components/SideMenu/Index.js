import React from 'react';
import SideMenuItem from './SideMenuItem';
import Logo from '../../Images/Logo.svg'; 
import MiniLogo from '../../Images/MiniLogo.svg';
import Home from '../../Images/Home.svg'; 
import Guide from '../../Images/Ressources.svg';  
import Ressources from '../../Images/Guide.svg';  
import Calculator from '../../Images/Calculator.svg'; 

function SideMenu() {
  return (
    <div className="SideMenu">
      <div className='Main'>
      <ul >
      <img src={Logo} alt="Logo" className='Logo' />
        <SideMenuItem to="/">
          <img src={Home} alt="Home" className='CustomSVG'/> Accueil</SideMenuItem>
        <SideMenuItem to="/Guide">
        <img src={Ressources} alt="Ressources" className='CustomSVG'/> Guide</SideMenuItem>
        <SideMenuItem to="/Ressources">
        <img src={Guide} alt="Guide" className='CustomSVG'/>Ressource</SideMenuItem>
        <SideMenuItem to="/Calculateur">
        <img src={Calculator} alt="Calculator" className='CustomSVG'/>Calculateur</SideMenuItem>
      </ul>
      </div>
      <div className='Secondary'>
      <ul >
      <img src={MiniLogo} alt="MiniLogo" className='MiniLogo' />

        <SideMenuItem to="/">
          <img src={Home} alt="Home" className='CustomSVG'/> 
          <span className='Tooltip'>Accueil</span>
          </SideMenuItem>

        <SideMenuItem to="/Guide">
        <img src={Ressources} alt="Ressources" className='CustomSVG'/> 
        <span className='Tooltip'>Guide</span>
        </SideMenuItem>

        <SideMenuItem to="/Ressources">
        <img src={Guide} alt="Guide" className='CustomSVG'/>
        <span className='Tooltip'>Ressource</span>
        </SideMenuItem>

        <SideMenuItem to="/Calculateur">
        <img src={Calculator} alt="Calculator" className='CustomSVG'/>
        <span className='Tooltip'>Calculateur</span>
        </SideMenuItem>
      </ul>
      </div>

    </div>
  );
}

export default SideMenu;
