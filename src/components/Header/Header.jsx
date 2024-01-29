import { Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/logo_hive.webp'
import './Header.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <Navbar expand="lg">
        <Container className="container-md">
          <Link to="/" className="logo">
            <img src={Logo} alt="" />
          </Link>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className={`btn-hamburger${isMenuOpen ? ' open' : ''}`}
            onClick={toggleMenu}
          />

          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav" in={isMenuOpen}>
            <Nav className="items">
              <Link to="/team" onClick={handleLinkClick}>
                TEAM
              </Link>
              <Link to="/events" onClick={handleLinkClick}>
                NEWS & EVENTS
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header