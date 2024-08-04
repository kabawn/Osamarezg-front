// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
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
            {isLoggedIn ? (
              <Button variant="outline-light" onClick={handleLogout} className="auth-button">
                {t('signout')}
              </Button>
            ) : (
              <NavLink to="/login" className="auth-button">
                <Button variant="outline-light">{t('login')}</Button>
              </NavLink>
            )}
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
