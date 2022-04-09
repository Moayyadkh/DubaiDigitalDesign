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

        <Feature.Title> DubaiDigitalDesign.com </Feature.Title>
         
          <Feature.SubTitle> Imagine & Build 3D Worlds!</Feature.SubTitle>

                    {<Feature.SubTitle> </Feature.SubTitle>}

          {<Feature.SubTitle>Start 1 FREE Week Online LIVE Training in 3dsmax For Interior Designers! </Feature.SubTitle>}
         {/* <p> </p>*/}
          {/*<OptForm>
            
          </OptForm>*/}
        
            {<Feature.SubTitle>
              { <YoutubeEmbed embedId="1qemOJT8Lmc" /> }
              </Feature.SubTitle>}
          
            {/* YoutubeEmbed2 embedId3="m3m--F0nvhw" /> */}
            
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