import React from 'react'
import SideMenu from '../../Components/SideMenu/Index'

function Guide() {
  return (
    <div className='SideMenuAndPageContent'>
      <SideMenu/>
      <div className='PageContent'>
       <div className='Guide'>
       <h1>Guide d'utilisation</h1>
       <h2>Étape 1 : Connaître DataSnap</h2>
       <p>DataSnap est une plateforme de mesure d’impact économique des événements culturels et artistiques. Il prend en compte des variables comme les dépenses des visiteurs, les dépenses engagées par l’organisation des événements, leurs investissements, ainsi que les opportunités d'emploi générées par ces. Grâce à sa simplicité d'utilisation et sa personnalisation, il permet aux organisateurs de calculer l’impact économique de leurs événements aisément. Les résultats que le calculateur numérique offre, éclairent les décisions des acteurs du secteur culturel, et contribuent à promouvoir le développement durable et à valoriser leur rôle essentiel dans la société. Le calculateur numérique génère le rapport détaillé quantifiant l'impact économique d’un événement culturel que ce soit pour un festival de musique, une exposition d'art, une représentation théâtrale ou toute autre manifestation culturelle, et sa flexibilité permet une personnalisation adaptée à chaque événement en saisissant ces données spécifiques.

       </p>
          {/* <p>
          Les événements culturels et artistiques ont le pouvoir remarquable d'enrichir les communautés, de stimuler la créativité et de favoriser un sentiment d'unité. Cependant, la compréhension de leur impact économique a souvent été une tâche complexe. Cette plateforme à faciliter la tâche des organisateurs d'événements culturels et artistiques en leur offrant un outil convivial qui leur permet d'effectuer des évaluations précises de l'impact économique. Notre objectif est d'apporter aux organisateurs d'événements des informations précieuses qui leur permettront de planifier leurs événements, d'élaborer des stratégies de marketing et d'allouer des ressources. Qu'il s'agisse de rechercher des sponsors, d'obtenir des financements ou de plaider pour le soutien des parties prenantes, cette évaluation de l'impact économique vous équipera des données dont vous avez besoin pour mettre en évidence la valeur réelle de vos événements culturels et artistiques.
          </p> */}
          <h2>Étape 2 : Délimiter la sphère de l'impact</h2>
          <p>
          Avant de commencer la mesure de l'impact économique de l’événement culturel, il est essentiel de délimiter la sphère d'impact, c'est-à-dire une ville ou une région spécifique où l’événement prend place comme cadre territorial pour l'analyse d’impact. Cette délimitation joue un rôle crucial dans la classification des investissements, dépenses et interventions événementielles comme territoriales d'une part et non territoriales d'autre part. Cela permet de considérer les flux financiers qui contribuent directement à l'économie de la zone sélectionnée, tels que les subventions ou les dépenses des visiteurs en provenance de l'extérieur considérées comme non territoriales. Lors de ce processus, il est primordial de rechercher la plus grande précision possible pour éviter de confondre les participants locaux avec les non-locaux.  La détermination du territoire de mesure de l’impact se définit par : 
          </p>
          <li>La zone qui bénéficie de l’essentiel des dépenses</li>
          <li>Le bassin de population ou bassin de vie concerné par l’événement</li>
          <li>L’existence de données statistiques à l’échelle retenue</li>
          <li>Le commanditaire ou le partenaire demandeur d’une étude d’impact</li>
          <li>Le couple distance/ temps séparant la visite à la journée de la venue en séjour</li>
          <li>Le découpage administratif existant</li>
          <li>Les différentes méthodes de mesure d’impact</li>
          <h2>Étape 3 : Connaître le modèle utilisé pour la mesure d'impact économique</h2>
          <p>
          DataSnap utilise le modèle Maurence, un modèle d'évaluation de l'impact économique. Ce modèle permet d'appréhender les effets primaires et secondaires de manière globale sur l'économie locale. En utilisant le modèle Maurence comme fondement, la précision et la fiabilité des calculs d'impact économique sont garanties. Pour mesurer la création d'activités économiques complémentaires liées à la propagation de la contribution initiale de ressources dans l'économie locale, un coefficient multiplicateur de type keynésien de 1.13 est appliqué. Ce coefficient est issu du rapport de la Conférence des Nations Unies sur le Commerce et le Développement intitulé "Les flux financiers illicites et le développement durable en Afrique" sorti en 2020, et il est choisi spécifiquement pour les utilisateurs de l'Afrique subsaharienne en raison de leurs contraintes financière pour réaliser des études d'impact économique sur leurs événements culturels. Ainsi, cet outil de calcul d'impact économique vise principalement à aider les utilisateurs de l'Afrique subsaharienne à évaluer l'impact de leurs événements culturels malgré les contraintes financières auxquelles ils sont confrontés.
          </p>
          <h2>Étape 4 : Explorer les ressources et les outils de traitement des données</h2>
          <p>
          En vue d’obtenir des résultats fiables et pertinents concernant l'impact économique de l'événement culturel, il est important de réunir toutes les données pertinentes. Dans la rubrique des ressources, divers documents sont disponibles pour faciliter cette tâche, guidant la collecte des données des visiteurs et le traitement des données organisationnelles de l'événement. La qualité des données collectées joue un rôle clé dans la précision des résultats. Il est recommandé de prendre le temps nécessaire pour obtenir des informations aussi précises que possible. Des données incomplètes ou imprécises peuvent fausser l'analyse et limiter la fiabilité des résultats obtenus. La précision et la complétude des données, renforce la crédibilité de l'impact économique de l'événement, car les informations collectées serviront de base solide pour alimenter le calculateur et produire un rapport qui mettra en lumière l'impact économique de l'événement dans la région d’hôte. Il est donc essentiel de prendre le temps nécessaire pour rassembler des données pertinentes.
          </p>
          <h2>Étape 5 : Calculer l'impact économique</h2>
          <p>
          Après la collecte et le traitement des données, rendez-vous à la rubrique du calculateur pour saisir le formulaire avec les données collectées dans les champs appropriés. Chaque champ du formulaire a son importance dans la mesure de l'impact économique, c'est cela qu’il est nécessaire d'assurer que tous les champs sont remplis avec des données correctes, car la qualité des données saisies affecte directement l'exactitude des résultats. Une fois que tous les champs du formulaire sont remplis, l'analyse se poursuit en cliquant sur le bouton “Calculer”, le calculateur numérique traite les informations saisies et effectue les calculs nécessaires pour générer automatiquement un rapport d'impact économique de l'événement, en fournissant une analyse des retombées financières générées. 
          Le rapport présentant les résultats de l'impact économique de l'événement culturel est désormais accessible. Il est présenté de manière claire et concise, avec des graphiques et des tableaux pour faciliter la compréhension des résultats. Une interprétation de résultats est nécessaire pour bien saisir les résultats de l'évaluation, et cela offre une occasion de mieux comprendre l'impact financier de l'événement culturel sur la communauté locale. En plus de consulter le rapport d'impact économique directement sur le calculateur numérique, il y a également la possibilité de le télécharger au format PDF. Le téléchargement du rapport économique est un avantage considérable, car cela offre aux utilisateurs une copie permanente et accessible hors ligne, qu’ils peuvent ainsi conserver une version tangible des résultats obtenus, facilitant la communication et la diffusion des informations clés auprès des intervenants impliqués dans l'événement.
          </p>
          <h2>Vous voilà prêt à commencer !</h2>
          <p>
          Rejoignez-nous pour révéler le potentiel économique des événements culturels et artistiques. Ensemble, célébrons le pouvoir de transformation de la culture et de l'art tout en favorisant une prospérité économique durable au sein de votre communauté. Découvrez dès aujourd'hui le fonctionnement du calculateur d'impact économique pour les événements culturels et artistiques!
          </p>
       </div>
      </div>
    </div>
  )
}

export default Guide