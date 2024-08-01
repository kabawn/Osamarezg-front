// src/components/LanguageSwitcher.js
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import usaFlag from '../assets/flags/eng.jpg';
import arFlag from '../assets/flags/libya_flag.png';

const SwitcherContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const LanguageButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin: 0 5px;
  color: white;
  font-size: 1.2rem;
  display: flex;
  align-items: center;

  &:focus {
    outline: none;
  }

  &:hover {
    color: #ddd;
  }

  img {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  background-color: #fff;
  color: #000;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: ${(props) => (props.show ? 'block' : 'none')};
  z-index: 1000;
`;

const DropdownItem = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  width: 100%;
  text-align: left;
  display: flex;
  align-items: center;
  font-size: 1rem;

  &:hover {
    background-color: #f0f0f0;
  }

  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    setShowDropdown(false);
  };

  return (
    <SwitcherContainer>
      <LanguageButton onClick={() => setShowDropdown(!showDropdown)}>
        <img src={i18n.language === 'en' ? usaFlag : arFlag} alt="Selected Language" />
        {i18n.language === 'en' ? 'English' : 'العربية'}
      </LanguageButton>
      <DropdownMenu show={showDropdown}>
        <DropdownItem onClick={() => changeLanguage('en')}>
          <img src={usaFlag} alt="English" />
          English
        </DropdownItem>
        <DropdownItem onClick={() => changeLanguage('ar')}>
          <img src={arFlag} alt="العربية" />
          العربية
        </DropdownItem>
      </DropdownMenu>
    </SwitcherContainer>
  );
};

export default LanguageSwitcher;
