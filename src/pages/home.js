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
          <OptForm>
            {<DIALOGUE embedId="https://console.dialogflow.com/api-client/demo/embedded/53dd1c22-2525-40bd-bb2f-f5d52c6ab69d" />}
            <h1>Youtube Embed</h1>
            <YoutubeEmbed embedId="m3m--F0nvhw" />
          </OptForm>
        </Feature>
      </HeaderContainer>
  
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}