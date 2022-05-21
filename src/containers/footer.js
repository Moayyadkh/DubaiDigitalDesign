import React from 'react';
import { Footer } from '../components';
import DIALOGUE from "./DIALOGUE";
import "./styles.css";

export function FooterContainer() {
  return (
    
    <Footer>
      <Footer.Title>  </Footer.Title>

      <Footer.Title> Start 1 FREE Week Online LIVE Training in 3dsmax For Interior Designers!</Footer.Title>
      <Footer.Title>Type your email or Mobile # Below to Reserve Your FREE Week!</Footer.Title>

           <iframe
    allow="microphone;"
    
    width="100%"
    height="400"
    src="https://console.dialogflow.com/api-client/demo/embedded/53dd1c22-2525-40bd-bb2f-f5d52c6ab69d">
</iframe>
      
<Footer.Title>  </Footer.Title>
       
    </Footer>
  );
} 
