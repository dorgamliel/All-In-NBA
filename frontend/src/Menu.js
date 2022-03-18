import { useState } from 'react';
import { Button, Row, Col, Navbar , Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";
import Injuries from './Injuries';

import './Menu.css';

function Menu() {

    return (
    <Navbar id='navbar' variant="dark">
        <Container>
            {/* <Navbar.Brand href="#home">NBA</Navbar.Brand> */}
            <Nav className="me-auto">
                <Link className='menu-option' to='/'>Home</Link>
                <Link className='menu-option' to="/standings">Standings</Link>
                <Link className='menu-option' to='/injuries'>Injuries</Link>
                <Link className='menu-option' to="/bets">Bets</Link>
                <Link className='menu-option' to="/highlights">Highlights</Link>
            </Nav>
        </Container>
    </Navbar>

    );
}
 
export default Menu;