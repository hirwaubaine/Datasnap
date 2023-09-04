import React, { useState } from "react";
import { Link} from "react-router-dom";
import Display from "./Display";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div >
        <div className="Popup">
          <div className="Popup-content">
            <h3>Données reçues</h3>
            <p>Les données sont bien parvenues, cliquez ce bouton pour afficher le rapport de l'impact économique calculer.</p>
            <Link to ="/Display"> 
               <button>Afficher le rapport</button>
            </Link>
          </div>
        </div>
    </div>
  );
};

export default Popup;
