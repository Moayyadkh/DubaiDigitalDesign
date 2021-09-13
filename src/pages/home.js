import React from 'react';
import { Feature, OptForm } from '../components';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';

import YoutubeEmbed from "./YoutubeEmbed";
//import { Header } from '../components';
//import * as ROUTES from '../constants/routes';

import "./styles.css";
import DIALOGUE from "./DIALOGUE";

export default function Home() {
    return ( < >

        < HeaderContainer>
        <Feature>
        <Feature.Title>Top Innovations in 3D & AI!</Feature.Title>
          {<Feature.SubTitle>Start your FREE Journey in 3D World NOW!!</Feature.SubTitle>}
          {<Feature.SubTitle>Type Below in the ChatBot your email & Mobile # to Book a free 2 Weeks 3dsmax modeling Course!!</Feature.SubTitle>}
          {/*<OptForm>
            
          </OptForm>*/}
          
            { <DIALOGUE embedId2="https://console.dialogflow.com/api-client/demo/embedded/53dd1c22-2525-40bd-bb2f-f5d52c6ab69d" />}
            { <YoutubeEmbed embedId="m3m--F0nvhw" /> }
        
        </Feature>
      </HeaderContainer>
  
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}