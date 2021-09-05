import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
//import PropTypes from "prop-types";

//import YoutubeEmbed from "./YoutubeEmbed";
import "./styles.css";
//import DIALOGUE from "./DIALOGUE";

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="DubaiDigitalDesign!" />
        {/*<Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>*/}

        
        </Header.Frame>
        
     
      {children}
    </Header>
  );
}

