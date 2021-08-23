import React from 'react';
import { Feature, OptForm } from '../components';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';

//import { Header } from '../components';
//import * as ROUTES from '../constants/routes';d

export default function Home() {
    return ( < >

        < HeaderContainer >
        <Feature>
        <Feature.Title>Top Innovations in 3D & AI!</Feature.Title>
          <Feature.SubTitle>Start your FREE Journey in 3D World NOW!!</Feature.SubTitle>
          <OptForm>
            {/*
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Try it now</OptForm.Button>

            {/*<Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
            
            <OptForm.Break />
            <OptForm.Text>Enter your email to Start your 3dsmax Online-LIVE Modeling Basics Course!.</OptForm.Text>*/}
          </OptForm>
        </Feature>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}