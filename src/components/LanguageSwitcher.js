import React, { useState } from 'react';
import './LanguageSwitcher.css';

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = (lang) => {
    setLanguage(lang);
    // You can add translation logic here later
  };

  return (
    <div className="language-switcher">
      <button 
        className={language === 'en' ? 'active' : ''} 
        onClick={() => toggleLanguage('en')}
      >
        EN
      </button>
      <button 
        className={language === 'fr' ? 'active' : ''} 
        onClick={() => toggleLanguage('fr')}
      >
        FR
      </button>
    </div>
  );
}
