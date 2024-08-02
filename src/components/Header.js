// src/components/Header.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import './Header.css';

const StyledNavbar = styled(Navbar)`
  font-family: ${({ lang }) => (lang === 'ar' ? 'Tajawal, sans-serif' : 'Raleway, sans-serif')};
  background-color: transparent !important;
  position: absolute;
  width: 100%;
  z-index: 100;
`;

const NavLink = styled(Link).attrs({
  className: 'nav-link', // Add this line
})`
  color: white;
  text-transform: uppercase;
  margin: 0 10px;
  text-decoration: none;
  &:hover {
    color: #ddd;
  }
`;

const BrandLink = styled(Link)`
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    color: #ddd;
  }
`;

const Header = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <StyledNavbar expand="lg" className="header" lang={currentLang}>
      <Container>
        <BrandLink to="/">OSAMA REZEG</BrandLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`ms-auto ${currentLang === 'ar' ? 'nav-ar' : 'nav-en'}`}>
            <NavLink to="/">{t('home')}</NavLink>
            <NavLink to="/director">{t('about')}</NavLink>
            <NavLink to="/works">{t('works')}</NavLink>
            <NavLink to="/blog">{t('blog')}</NavLink>
            <NavLink to="/casting">{t('casting')}</NavLink>
            <NavLink to="/submit-script">{t('sendScript')}</NavLink>
            <NavLink to="/exclusive">{t('exclusive')}</NavLink>
            <NavLink to="/contact">{t('contact')}</NavLink>
          </Nav>
          <div className="language-switcher-wrapper">
            <LanguageSwitcher className="language-switcher" />
          </div>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

export default Header;
