// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container,  } from 'react-bootstrap';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
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
  className: 'nav-link',
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
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };

  const handleNavLinkClick = () => {
    setExpanded(false);
  };

  return (
    <StyledNavbar expand="lg" className="header" lang={currentLang} expanded={expanded}>
      <Container>
        <BrandLink to="/">OSAMA REZG</BrandLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`ms-auto ${currentLang === 'ar' ? 'nav-ar' : 'nav-en'}`}>
            <NavLink to="/" onClick={handleNavLinkClick}>{t('home')}</NavLink>
            <NavLink to="/director" onClick={handleNavLinkClick}>{t('about')}</NavLink>
            <NavLink to="/works" onClick={handleNavLinkClick}>{t('credits')}</NavLink>
            <NavLink to="/blog" onClick={handleNavLinkClick}>{t('blog')}</NavLink>
            <NavLink to="/casting" onClick={handleNavLinkClick}>{t('casting')}</NavLink>
            <NavLink to="/submit-script" onClick={handleNavLinkClick}>{t('sendScript')}</NavLink>
            {/* <NavLink to="/exclusive" onClick={handleNavLinkClick}>{t('exclusive')}</NavLink> */}
            <NavLink to="/contact" onClick={handleNavLinkClick}>{t('contact')}</NavLink>
            {/* {isLoggedIn ? (
              <Button variant="outline-light" onClick={() => { handleLogout(); handleNavLinkClick(); }} className="auth-button">
                {t('signout')}
              </Button>
            ) : (
              <NavLink to="/login" onClick={handleNavLinkClick} className="auth-button">
                <Button variant="outline-light">{t('login')}</Button>
              </NavLink>
            )} */}
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
