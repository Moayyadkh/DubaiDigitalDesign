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

export default function Workshops() {
    return ( < >

        < HeaderContainer>
        <Feature>

        

        <Feature.Title> </Feature.Title>
         
          <Feature.SubTitle> 3D Projects Online-Support </Feature.SubTitle>

                    {<Feature.SubTitle> </Feature.SubTitle>}

          {<Feature.SubTitle>To Get Online 3D-Projects Support Enter your mobile# Below in Chatbot !!</Feature.SubTitle>}
         {/* <p> </p>*/}
          {/*<OptForm>
            
          </OptForm>*/}
          
             
            
            
            {<Feature.SubTitle></Feature.SubTitle>}
             
            { <YoutubeEmbed embedId="m3m--F0nvhw" /> }
            
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