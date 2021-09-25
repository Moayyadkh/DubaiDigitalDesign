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
        <Feature.Title>3dsmax Online Training </Feature.Title>
          {<Feature.SubTitle>Start your FREE Journey in 3D World NOW!!</Feature.SubTitle>}
          {<Feature.SubTitle>Enter Below your Mobile # to Book a FREE 2 Weeks 3dsmax Online-LIVE Training!!</Feature.SubTitle>}
          {/*<OptForm>
            
          </OptForm>*/}
          
            { <DIALOGUE embedId2="https://console.dialogflow.com/api-client/demo/embedded/53dd1c22-2525-40bd-bb2f-f5d52c6ab69d" />}
            {<Feature.Title>Get a 50 % Discount on the Best V-RAY LIVE online Training</Feature.Title>}
            {<Feature.SubTitle></Feature.SubTitle>}
             
            { <YoutubeEmbed embedId="m3m--F0nvhw" /> }
        
        </Feature>
      </HeaderContainer>
  
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}