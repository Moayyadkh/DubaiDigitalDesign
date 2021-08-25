import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import PropTypes from "prop-types";

import "./styles.css";
import DIALOGUE from "./DIALOGUE";

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="DubaiDigitalDesign!" />
        {/*<Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>*/}

        <DIALOGUE embedId="https://console.dialogflow.com/api-client/demo/embedded/53dd1c22-2525-40bd-bb2f-f5d52c6ab69d" />

        
      </Header.Frame>
      {children}
    </Header>
  );
}

