import React from 'react';
import { Footer } from '../components';
import DIALOGUE from "./DIALOGUE";

export function FooterContainer() {
  return (
    <Footer>/
      <Footer.Title></Footer.Title>
      { <DIALOGUE embedId2="https://console.dialogflow.com/api-client/demo/embedded/53dd1c22-2525-40bd-bb2f-f5d52c6ab69d" />}
       
    </Footer>
  );
} 
