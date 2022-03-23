import React from 'react';
import { Footer } from '../components';
import DIALOGUE from "./DIALOGUE";
import "./styles.css";

export function FooterContainer() {
  return (
    <Footer>
           <iframe
    allow="microphone;"
    width="450"
    height="430"
    src="https://console.dialogflow.com/api-client/demo/embedded/53dd1c22-2525-40bd-bb2f-f5d52c6ab69d">
</iframe>
      <Footer.Title></Footer.Title>
 
       
    </Footer>
  );
} 
