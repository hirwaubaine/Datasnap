import React, {useState} from 'react'
import { Link} from "react-router-dom";
import SideMenu from '../../Components/SideMenu/Index'
import GuideSVG from '../../Images/Guide2.svg';  
import RessourcesSVG from '../../Images/Ressources2.svg';  
import CalculatorSVG from '../../Images/Calculator2.svg'; 
import DataReport from "../../Images/DataReport.gif";
import DataAnalysis from "../../Images/Data-analysis.gif"

const Accueil = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleButtonClick = () => {
    setIsVisible(!isVisible);
  };
   return (
    
    <div className='SideMenuAndPageContent'> 
      <SideMenu/> 
      <div className='PageContent'>
        <div className="Accueil">
      <h1>Découvrez le calculateur d'impact économique des événements culturels et artistiques!</h1>
      <p>Identifiez les retombées de votre événement sur le territoire d'accueil.</p>

      <div className="content">
        <div className="image-section">
        <img src={DataReport} alt="Image" />
        </div>

        <div className="text-section">
          <h2>Bienvenue sur Datasnap</h2>
          <p>
          Un outil de calcul d'impact économique des événements culturels et créatifs conçu spécialement pour fournit des indications pertinentes sur l'influence économique de ces événements sur l’économie et les communautés locales. Bien que les événements culturels et artistiques jouent un rôle essentiel dans l'enrichissement de notre société, la stimulation de la créativité et la promotion de la diversité culturelle. Ils ont également le pouvoir d'attirer les touristes, de stimuler les activités commerciales et de créer des opportunités d'emploi dont DataSnap mesure l'impact économique de ces activités.
          </p>

        </div>
      </div>
      <div className="content">
        <div className="text-section">
          <h2>À propos de nous</h2>
          <p>
          Notre histoire débute au sein d'un projet de mémoire de fin d'études, issu du Master en Management des Entreprises Culturelles et Créatives à l’Université Senghor d’Alexandrie, avec la collaboration du Festival Amani, qui a accepté d'être le premier à utiliser notre calculateur, nous avons pu développer un outil de mesure qui fournit des mesure d'impact économique des événements culturels et créatifs sur l'économie locale. Notre mission est de faciliter la mesure de l'impact économique des événements culturels, tout en offrant aux organisateurs d'événements, aux institutions culturelles et aux décideurs les données dont ils ont besoin pour prendre des décisions éclairées.
          </p>
          
        </div>
        <div className="image-section2">
        <img src={DataAnalysis} alt="Image" />
        </div>
      </div>
      <p>
      DataSnap prend en compte des variables comme les dépenses des visiteurs, les dépenses engagées par l’organisation des événements, la création des emplois et la fréquentation de l'événement. En saisissant des données spécifiques à votre événement, vous pouvez générer le rapport détaillé qui démontre l'impact économique de votre événement. Qu'il s'agisse d'un festival, d'une exposition d'art, d'une représentation théâtrale ou de tout autre rassemblement culturel et ou créatif, il est essentiel de comprendre l'impact économique pour planifier et développer des événements durables. Notre calculateur vous permet d'acquérir les informations nécessaires pour démontrer la valeur des investissements culturels et plaider en faveur d'une croissance et la contribution de ces événements dans l'économie mondiale ainsi que dans l'amélioration de la qualité de la vie.
   </p>  
   {/* <button onClick={handleButtonClick}>
      {isVisible ? 'Férmer' : 'Démarrer'}
   </button>   
    
    {isVisible && ( */}
   <div className='PageIcons'>

     <Link to ="/Guide">
     <img src={GuideSVG} alt="Guide" />
       <h3>Guide</h3>
       <p>Ce guide vous accompagnera tout au long de la procédure. Prenez-en connaissance avant de poursuivre </p>
       </Link>
    
     <Link to ="/Ressources"> 
     <img src={RessourcesSVG} alt="Ressources" />
       <h3>Ressourses</h3>
       <p>Ces ressources vous aideront à bien préparer les données avant de vous rendre au calcul.</p>
     </Link>
     
     <Link to ="/Calculateur">  
     <img src={CalculatorSVG} alt="CalculatorSVG" />
        <h3>Calculer</h3>
        <p>Le temps est maintenant venu de calculer l'impact économique de votre événement.</p>
      </Link>
    
        
    </div> 
    {/* )} */}
</div>
</div>

    </div>
  );
}

export default Accueil