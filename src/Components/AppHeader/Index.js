import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../../Images/Logo.svg'; 

function AppHeader() {
  return (
    <div className='AppHeader'> 
       {/* <p>Calculateur d'impact économique</p> */}
       <Link to ="/">
          <img src={Logo} alt="Logo" className='HeaderLogo' />
       </Link>
      
       {/* <TranslationButton/> */}
    </div>
  )
}

export default AppHeader