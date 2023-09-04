import React, { useState } from "react";
import AppHeader from "../AppHeader/Index";

const TermOfUse = ({ onClose }) => {

  return (
    <div>
      <AppHeader/>
      <div className="FooterPage">
        <div className="FooterPageContent">
          <h1>Conditions Générales d'Utilisation de DataSnap</h1>
          <p>
          Bienvenue sur DataSnap, le Calculateur Numérique d'Impact Économique des Événements Culturels. Veuillez lire attentivement ces conditions générales d'utilisation (les "Conditions") avant d'accéder à notre service ou de l'utiliser. En utilisant DataSnap, vous acceptez ces Conditions et vous vous engagez à les respecter. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre service.
          </p>
          <p>Dernière mise à jour : le 03 septembre 2023</p>
          <h3>Utilisation du Service </h3>
          <li>
          Admissible : Vous devez avoir au moins 18 ans pour utiliser DataSnap. En utilisant notre service, vous déclarez et garantissez que vous avez l'âge requis.
          </li>
          <li>
          Contenu généré par l'utilisateur : Vous êtes seul responsable de tout contenu que vous soumettez sur notre plateforme. Vous garantissez que ce contenu est exact et conforme à la loi. Vous acceptez que nous puissions utiliser ce contenu conformément à notre Politique de Confidentialité.
          </li>
          <li>
          Restrictions : Vous vous engagez à ne pas (a) utiliser notre service à des fins illégales, (b) copier, modifier ou distribuer notre service, (c) tenter d'accéder à des parties non autorisées de notre service, (d) perturber, endommager ou nuire à notre service ou à notre infrastructure.
          </li>
        

          <h3>Protection des Données et Confidentialité </h3>
          <li>
          Données collectées : Nous collectons des données lorsque vous utilisez notre service. Ces données sont soumises à notre Politique de Confidentialité.
          </li>
          <li>
          Protection des données : Les données que vous entrez dans le calculateur resteront confidentielles et ne seront pas partagées avec des tiers sans votre consentement. Cependant, veuillez noter que les données agrégées et anonymes pourront être utilisées à des fins d'amélioration du service, d'analyse et de recherche.
          </li>
          <li>
          Exactitude des Données : En utilisant cet outil, vous acceptez que les résultats générés dépendent de l'exactitude et de la précision des données que vous fournissez. Vous êtes responsable de la vérification minutieuse de toutes les informations que vous entrez. Des résultats incorrects peuvent découler de données incorrectes.
          </li>
          <li>
          Utilisation Responsable des Résultats : Les résultats obtenus grâce à ce calculateur sont fournis à titre informatif uniquement. Ils ne constituent pas des conseils financiers ou légaux. Vous êtes encouragé à consulter des experts qualifiés pour interpréter les résultats dans le contexte approprié.
          </li>

          <h3>Modifications et Interruptions du Service </h3>
          <li>
          Modification du service : Nous nous réservons le droit de modifier, de suspendre ou de mettre fin à notre service à tout moment, pour quelque raison que ce soit, sans préavis.
          </li>
          <li>
          Interruptions : Vous reconnaissez que notre service peut être interrompu pour des raisons techniques, de maintenance ou autres, et que nous ne serons pas responsables de toute interruption ou indisponibilité.
          </li>

          <h3>Responsabilité et Exclusion de Garanties </h3>
          <li>
          Exclusion de garanties : Notre service est fourni "tel quel", sans garantie d'aucune sorte, expresse ou implicite. Nous déclinons toute garantie, y compris, mais sans s'y limiter, les garanties de qualité marchande, d'adéquation à un usage particulier et d'absence de contrefaçon.
          </li>
          <li>
          Limitation de responsabilité : Dans la mesure permise par la loi applicable, nous ne serons pas responsables des dommages indirects, accessoires, spéciaux, consécutifs ou punitifs, ni de toute perte de profits ou de revenus, de perte de données ou de coûts d'acquisition de biens ou de services de remplacement.
          </li>

          <h3>Résiliation </h3>
          <p>
          Nous pouvons résilier votre accès à notre service si vous violez ces conditions. En cas de résiliation, toutes les dispositions de ces conditions qui, par leur nature, devraient survivre à la résiliation, survivront, y compris, sans limitation, les dispositions de propriété, de garantie et de limitation de responsabilité.
          </p>
          <h3>Droit applicable et juridiction </h3>
          <p>
          Les présentes conditions sont régies par la loi rwandaise n° 50/2018 du 13/08/2018, telle que modifiée. Tout litige découlant de ces conditions sera soumis à la juridiction exclusive des tribunaux rwandais.
          </p>
          <h3>Propriété Intellectuelle </h3>
          <p>
          Tous les éléments de cet outil, y compris mais sans s'y limiter, les textes, graphiques, logos, images, vidéos et logiciels, sont protégés par les lois relatives aux droits d'auteur et à la propriété intellectuelle. L'accès à ce calculateur ne vous accorde aucun droit de propriété sur ces éléments. Vous vous engagez à ne pas copier, distribuer, modifier, reproduire, publier, transférer ou exploiter de quelque manière que ce soit le contenu sans autorisation écrite préalable
          </p>
          <h3> Modification des Termes </h3>
          <p>
          Les termes et conditions d'utilisation peuvent être révisés périodiquement sans préavis. Il est de votre responsabilité de vérifier régulièrement ces termes pour toute mise à jour.
          </p>
        
        </div>
      </div>
      </div>
  );
};

export default TermOfUse;
