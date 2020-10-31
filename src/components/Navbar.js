import React, { Component } from "react";
import {Link} from "react-router-dom";
import logo1 from '../logo1.svg';
import styled from 'styled-components';
import {ButtonContainer} from "./Button";

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-25">
                
                    <Link to="/">
                        <img src={logo1} alt="store" className="navbar-brand align-self-center mb-0" width="60%"  />
                    </Link>
                    <h1>TreasureBay </h1><h6>From Sea Floor to Ship's door</h6>
                    <Link to="/cart" className="ml-auto">
                        <ButtonContainer>
                        <span className="mr-2">
                        <i className="fas fa-box"/>     
                        </span>
                        My Chest
                        </ButtonContainer>
                    </Link>
                
            </NavWrapper>
        )
        
    }
}

const NavWrapper = styled.nav`
background:var(--mainBlue);
padding:0;
margin: 0 0 0 0;
color:var(--mainWhite)!important;
font-family: Headingfont;
font-size:1.8rem;

.nav-link{  
    
    text-transform: capitalize;
}
`;