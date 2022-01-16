import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

function NavBar({path}) {
  const History = useHistory();
  const BrowserPath = History.location.pathname;

  const LINKS = [
    { key: 0, to: '/', text: 'Registration' },
    { key: 1, to: '/login', text: 'LogIn' },
    { key: 2, to: '/profile', text: 'Profile' },
  ]
    return (
        <Navbar sticky="top" collapseOnSelect expand="lg">
            <Container>
              <Link className="navbar-brand " to="/"><i className="fas fa-laptop-code"></i> <span> MERN </span> STACK</Link>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                <Nav>
                  {LINKS.map(item =>(
                    <Link key={item.key} className={item.to===BrowserPath ? 'nav-active nav-link' : 'nav-link'} to={item.to}>{item.text}</Link>
                   ))
                  }
                </Nav>
              </Navbar.Collapse>
          </Container>
       </Navbar>
    )
}

export default NavBar