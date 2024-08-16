import React from 'react';
import { Link,useLocation } from 'react-router-dom';

import {
    Navbar,
    Nav,
    NavItem,
    SidebarTrigger
} from './../../components';

import { NavbarActivityFeed } from './NavbarActivityFeed';
import { NavbarMessages } from './NavbarMessages';
import { NavbarUser } from './NavbarUser';
import { LogoThemed } from './../../routes/components/LogoThemed/LogoThemed';


const getCurrentPat = () => {
    const location = useLocation();
    const pathname = location.pathname || '';
  
    // Selecciona la parte de la ruta después del último '/'
    const lastPart = pathname.substring(pathname.lastIndexOf('/') + 1);
  
    // Divide la cadena en palabras separadas por guiones medios
    const words = lastPart.split('-');
  
    // Pone en mayúscula la primera letra de cada palabra y las une con espacios
    const formatted = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
    console.log(formatted);
    return formatted;
  };
  

export const DefaultNavbar = () => (
    <Navbar light expand="xs" fluid>
        <Nav navbar>
            <NavItem className="mr-3">
                <SidebarTrigger/>
            </NavItem>
            <NavItem className="navbar-brand d-lg-none">
                <Link to="/">
                    <LogoThemed />
                </Link>
            </NavItem>
            <NavItem className="d-none d-md-block">
                <span className="navbar-text">
                    <Link to="/">
                        <i className="fa fa-home"></i>
                    </Link>
                </span>
                <span className="navbar-text px-2">
                    <i className="fa fa-angle-right"></i>
                </span>
                <span className="navbar-text">
                    <Link to="/">Start</Link>
                </span>
                <span className="navbar-text px-2">
                    <i className="fa fa-angle-right"></i>
                </span>
                <span className="navbar-text">
                   {getCurrentPat()}
                </span>
            </NavItem>
        </Nav>
        <Nav navbar className="ml-auto">
            <NavbarActivityFeed />
            <NavbarMessages className="ml-2" />
            <NavbarUser className="ml-2" />
        </Nav>
    </Navbar>
);
