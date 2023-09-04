import React from "react";
import { BrowserRouter as Router,Routes, Route,Link } from "react-router-dom";
import AddHeader from "./Components/AppHeader/Index";
import AppFooter from "./Components/AppFooter/Index";
import Display from "./Display";
import Accueil from "./Pages/Accueil/Index";
import Guide from "./Pages/Guide/Index";
import Ressources from "./Pages/Ressources/Index";
import Calculateur from "./Pages/Calculateur/Index";
import TermOfUse from "./Components/AppFooter/TermsOfUse";
import PrivacyPolicy from "./Components/AppFooter/PrivacyPolicy";
import "./styles.css";
import "./responsiveness.css";

function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route path="/Display" element={<Display />} />
          {/* <Route path="/Report" element={<Report />} /> */}
          <Route path ='/' element={<Accueil />} />
          <Route path ='/Guide' element={<Guide />} />
          <Route path ='/Ressources' element={<Ressources />} />
          <Route path ='/Calculateur' element={<Calculateur />} />
          <Route path ='/TermOfUse' element={<TermOfUse />} />
          <Route path ='/PrivacyPolicy' element={<PrivacyPolicy />} />

        </Routes>

        <AppFooter/> 
      </Router>
      
    </div>
  );
}

export default App;

