import React, {useState} from "react";
import { Link} from "react-router-dom";
import Report from "./Report";
import Display from "./Display";
import Popup from "./Popup";
import "./styles.css";

export default function Form() {

  const [isSubmitted, setIsSubmitted] = useState(false);

  function Submit(e) {
    e.preventDefault();
    const formEle = document.querySelector("form");
    const formData = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbyLrkpvg6OmvS_VwXG50jfSDPXyfiXk60LKF4KtFv4A0xeo-beSHzPvIgWsLa1oYnq9wQ/exec",
         
      {
        method: "POST",
        body: formData
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
      setIsSubmitted(true);
      e.target.reset();
  }
  
  return (
    <div className="Form">
      
      <h1>
      Remplissez ce formulaire de façon optimale avec les données de votre événement.
      </h1>
      <div>
        
        <h3>Section 1 : DÉTAILS DE L'ÉVÉNEMENT</h3>
        <p>Lorsque l'on demande le nombre ou le montant, veuillez ne saisir que des chiffres.</p>
          
        <form className="form" onSubmit={(e) => Submit(e)}>
          <div className="Parallel">
          <div>
        <label>
            Nom de l'événement:
            <input placeholder="Saisissez votre réponse ici" name="Nom" type="text" required />
          </label>
          <label>
            Déscription de l'événement:
            <input placeholder="Saisissez votre réponse ici" name="Description" type="text" required />
          </label>
          <label>
            Jours de l'événement:
            <input placeholder="Saisissez votre réponse ici" name="Jours" type="number" required />
          </label>
          <label>
             Nombre des participants
             <input placeholder="Saisissez votre réponse ici" name="Participants" type="number" required />
          </label>
          <label>
            Tranche d'âge plus représentée parmits les participants
             <input placeholder="Ex: 1-10, 11-20, 21-30, 31-40, 41-50 " name="Age" type="text" required />
          </label>
          <label>
            Nombres des participants non locaux générateur d'impact
             <input placeholder="Uniquement présent pour l'événement" name="ParticipantsGenerateurs" type="number" required />
          </label>
          
          </div>
          <div className="">
          <label>
          Nombres des participants non locaux et non générateur d'impact
             <input placeholder="Présent pour des nombreuses raison y compris l'événement " name="ParticipantsNonGenerateurs" type="number" required />
          </label>
          <label>
             Nombres des membre d'équipe administrative
             <input placeholder="Les employeurs à temps plein" name="Equipe" type="number" required />
          </label>
          <label>
          Nombres des bénévoles locaux
             <input placeholder="Saisissez votre réponse ici" name="Benevoles" type="number" required />
          </label>
          <label>
          Nombres des bénévoles non locaux
             <input placeholder="Saisissez votre réponse ici" name="BenevolesNonLocaux" type="number" required />
          </label>
          <label>
          Nombres des interventants locaux
             <input placeholder="Les artistes, panetistes,…" name="IntervenantsLocaux" type="number" required />
          </label>
          <label>
          Nombres des interventants non locaux
          <input placeholder="Les artistes, panetistes,…" name="IntervenantsNonLocaux" type="number" required />
          </label>
          </div>
           </div>

          <span>
          <h3>Section 2 : DÉTAILS ORGANISATIONNELLE</h3>
          <p>Lorsque l'on demande le nombre ou le montant, veuillez ne saisir que des chiffres.</p>
          </span>
         <div className="Parallel">
           <div>
           <label>
           la devise de la monnaie employée
          <input placeholder="Indiquer le signe de la monnaie comme suit: $ € FCFA" name="Currency" type="text" required />
          </label>
          <label>
          Investissement hors territoire
          <input placeholder="Saisissez votre réponse ici" name="InvestissementHorsTerritoire" type="number" required />
          </label>
          <label>
          Investissement territoriale
          <input placeholder="Saisissez votre réponse ici" name="InvestissementTerritoriale" type="number" required />
          </label>
          <label>
          Investissement autonome
          <input placeholder="Saisissez votre réponse ici" name="InvestissementAutonome" type="number" required />
          </label>
          <label>
          Taux de l'investissement public dans l'événement
          <input placeholder="Ex: 50%" name="Public" type="text" required />
          </label>
          <label>
          Taux de l'investissement privée dans l'événement
          <input placeholder="Ex: 50%" name="Private" type="text" required />
          </label>
          <label>
          Depences lies au ressources humaines territorial
          <input placeholder="Ex: paiement, perdiem, assurance,…" name="RessourcesHumainesLocaux" type="number" required />
          </label>
          </div>
          <div>
          <label>
          Depences lies au ressources humaines effectué hors territorial 
          <input placeholder="Ex: paiement, perdiem, assurance,…" name="RessourcesHumainesNonLocaux" type="number" required />
          </label>
         
          <label>
          Depences logistique territorial
          <input placeholder="Ex: transport, logement, refreshissement" name="LogistiqueLocaux" type="number" required />
          </label>
          <label>
          Depences logistique effectué hors territorial
          <input placeholder="Ex: transport, logement, refreshissement" name="LogistiqueNonLocaux" type="number" required />
          </label>
          <label>
          Depenses technique terrirorial
          <input placeholder="Ex: communication, son et lumière, paiement des techniciens" name="TechniqueLocaux" type="number" required />
          </label>
          <label>
          Depenses technique  effectué hors territorial
          <input placeholder="Ex: communication, son et lumière, paiement des techniciens" name="TechniqueNonLocaux" type="number" required />
          </label>
         <label>
         Depences lies à l'amenagement des espaces pour l'événement
          <input placeholder="Ex: salles, chaises, stands,…" name="AmenagementEspace" type="number" required />
          </label> 
          <label>
          Depences  administratives
          <input placeholder="Ex: fonctionnement de bureau, taxes, impot,..." name="Administration" type="number" required />
          </label>
          </div>
          </div> 
          <span>
          <h3>Section 3 : DÉTAILS DES PARTICIPANTS</h3>
          <p>Lorsque l'on demande le nombre ou le montant, veuillez ne saisir que des chiffres.</p>
          </span>
          <div className="Parallel">
            <div>
              <label>
              Moyenne de jour de participation des non locaux dans l'événement
          <input placeholder=" Les participants uniquement présent pour l'événement" name="NonLocauxParticipation" type="number" required />
          </label>
          <label>Trois régions principales d'où reside les participants non locaux:
          <input placeholder=" Les participants uniquement présent pour l'événement" name="ResidenceRegion" type="text" required />
        </label>
        <label>
          Nombre des sejours des participants non locaux
          <input placeholder=" Les participantsuniquement présent pour l'événement " name="NonLocauxSejours" type="number" required />
          </label>
          <label>
          Prix de billet d'entré des participants non locaux
          <input placeholder="Le prix peux être le même pour tous les participants" name="BilletNonLocaux" type="number" required />
          </label>
          <label>
          Moyenne des achats effectuer par des non locaux sur le site de l'événement
          <input placeholder=" Les participants uniquement présent pour l'événement " name="NonLocauxSiteAchats" type="number" required />
          </label>
          </div>
          
          <div>
          <label>
          Nombres des participants non locaux en logement payant
          <input placeholder="Les participantsuniquement présent pour l'événement " name="LogementPayant" type="number" required />
          </label>
            <label>
            Nombres des participants non locaux en logement non payant
          <input placeholder="Les participants uniquement présent pour l'événement" name="LogementNonPayant" type="number" required />
          </label>
          <label>
          Moyenne de côut de vie/jour des non locaux en logement payant
          <input placeholder="Les participants uniquement présent pour l'événement" name="CoutDeVieLogementPayant" type="number" required />
          </label>
          <label>Moyenne de côut de vie/jour des non locaux en logement non payant
          <input placeholder="Les participants uniquement présent pour l'événement" name="CoutDeVieLogementNonPayant" type="number" required />
          </label>
          <label>
          Moyenne des achats des non locaux pendant leur sejours dans le territoire
          <input placeholder="Les participants uniquement présent pour l'événement  " name="NonLocauxSejoursAchats" type="number" required />
          </label>
          </div> 
          </div>
          <button type="submit">Calculer</button>
        </form>
       
        {isSubmitted && ( 
          <Popup/>
      )}
      </div>
      </div>
    
  );
}
