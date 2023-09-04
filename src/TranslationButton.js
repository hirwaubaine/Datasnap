// import React, { useState } from 'react';
// import translate from 'google-translate-api';

// const TranslationButton = () => {
//   const [language, setLanguage] = useState('fr');
//   const [text, setText] = useState('');
//   const [translatedText, setTranslatedText] = useState('');

//   const handleTranslate = () => {
//     translate(text, { to: language })
//       .then((res) => {
//         setTranslatedText(res.text);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };

//   const handleLanguageChange = () => {
//     setLanguage(language === 'fr' ? 'en' : 'fr');
//     setTranslatedText('');
//   };

//   return (
//     <div>
//       <textarea value={text} onChange={(e) => setText(e.target.value)} />
//       <button onClick={handleTranslate}>Translate</button>
//       <button onClick={handleLanguageChange}>
//         {language === 'fr' ? 'Translate to English' : 'Translate to French'}
//       </button>
//       {translatedText && <div>{translatedText}</div>}
//     </div>
//   );
// };

// export default TranslationButton;

