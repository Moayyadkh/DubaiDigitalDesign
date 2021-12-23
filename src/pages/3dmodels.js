import React from 'react';
import { Feature, OptForm } from '../components';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';

import YoutubeEmbed from "./YoutubeEmbed";
//import { Header } from '../components';
//import * as ROUTES from '../constants/routes';

//import "./styles.css";
import DIALOGUE from "./DIALOGUE";

export default function Home() {
    return ( < >

        < HeaderContainer>
        <Feature>

        <p></p> <p></p> <p></p> <p></p> <p></p> <p></p> <p></p> <p></p> <p></p> <p></p> <p></p> <p></p> <p></p> <p></p> <p></p> <p></p> <p></p> 

        <Feature.Title>3D Assets !!  </Feature.Title>
         
          <Feature.SubTitle> </Feature.SubTitle>
          
          {<Feature.SubTitle>Enter your mobile# Below  in chatbot & Get3D Assets !!</Feature.SubTitle>}
          {<Feature.SubTitle> 3D Assets !!  </Feature.SubTitle>}
         {/* <p> </p>*/}
          {/*<OptForm>
            
          </OptForm>*/}
          
            { <DIALOGUE embedId2="https://console.dialogflow.com/api-client/demo/embedded/53dd1c22-2525-40bd-bb2f-f5d52c6ab69d" />}
            
            
            {<Feature.SubTitle></Feature.SubTitle>}
             
            { <YoutubeEmbed embedId=" " /> }
        {<Feature.Title></Feature.Title>}
        </Feature>
      </HeaderContainer>
  
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}