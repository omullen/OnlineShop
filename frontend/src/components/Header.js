import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="primary" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">OnlineShop</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='ms-auto'>
              <Nav.Link href="/cart"><i className="fa-solid fa-cart-plus"></i>Cart</Nav.Link>
              <Nav.Link href="/login"><i className="fas fa-user"></i>Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header