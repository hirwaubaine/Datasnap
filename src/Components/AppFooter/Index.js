
import React, { useState } from 'react';
import { Link} from "react-router-dom";
import Contact from './Contact';
import TermsOfUse from './TermsOfUse';
import PrivacyPolicy from './PrivacyPolicy';

function AppFooter() {
  const [isContactVisible, setContactVisible] = useState(false);
  const handleContactClick = () => {
    setContactVisible(!isContactVisible);
  };


  return (
    <div className="AppFooter">
      <button onClick={handleContactClick}>
        {isContactVisible ? 'Contact' : 'Contact'}
      </button>

      <Link to ="/TermOfUse">
      <button>
      Conditions générales
      </button>
      </Link>

      <Link to ="/PrivacyPolicy">
      <button>
      Politique de confidentialité
      </button>
      </Link>

      {/* <button onClick={handleTermsClick}>
        {isTermsVisible ? 'Terms of Use' : 'Terms of Use'}
      </button>

      <button onClick={handlePrivacyClick}>
        {isPrivacyVisible ? 'Privacy Policy' : 'Privacy Policy'}
      </button> */}

      {isContactVisible && <Contact onClose={handleContactClick} />}
      {/* {isTermsVisible && <TermsOfUse onClose={handleTermsClick} />}
      {isPrivacyVisible && <PrivacyPolicy onClose={handlePrivacyClick} />} */}
    </div>
  );
}

export default AppFooter;
