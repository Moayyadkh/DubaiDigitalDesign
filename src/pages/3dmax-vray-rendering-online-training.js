import React from 'react';
import { Feature, OptForm } from '../components';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import YoutubeEmbed2 from "./YoutubeEmbed2";
import YoutubeEmbed from "./YoutubeEmbed";
//import { Header } from '../components';
//import * as ROUTES from '../constants/routes';

//import "./styles.css";
import DIALOGUE from "./DIALOGUE";

export default function Home() {
    return ( < >

        < HeaderContainer>
        <Feature>

        <Feature.Title>We Have The Experience & The Well to Solve The "3D Training Dilemma" For Interior Designers!!  </Feature.Title>
         
          <Feature.SubTitle> </Feature.SubTitle>

                    {<Feature.SubTitle> </Feature.SubTitle>}

          {<Feature.SubTitle>Enter your mobile# Below in chatbot & Get 1 Week FREE 3dsmax Basics-Modeling Online-LIVE Course!!</Feature.SubTitle>}
         {/* <p> </p>*/}
          {/*<OptForm>
            
          </OptForm>*/}
          
            { <DIALOGUE embedId2="https://console.dialogflow.com/api-client/demo/embedded/53dd1c22-2525-40bd-bb2f-f5d52c6ab69d" />}
            
            
            {<Feature.SubTitle>
              { <YoutubeEmbed embedId="m3m--F0nvhw" /> }
              </Feature.SubTitle>}
            
             

            { <YoutubeEmbed2 embedId3="GN-J2LuCFrA" /> }
            
            {/*  <YoutubeEmbed embedId2="GN-J2LuCFrA" />*/ }
           
        {<Feature.Title></Feature.Title>}
        </Feature>
      </HeaderContainer>
  
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}