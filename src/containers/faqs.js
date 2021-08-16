import React from 'react';
import { Accordion, OptForm } from '../components';
import faqsData from '../fixtures/faqs';
//import { Header } from '../components';
//import * as ROUTES from '../constants/routes';

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Frame>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>

      <OptForm>
        <OptForm.Input placeholder="Email address" />
        <OptForm.Button>Try it now</OptForm.Button>

        {/*<Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>*/}

        <OptForm.Break />
        <OptForm.Text>Enter your email to Start your 3dsmax Online-LIVE Modeling Basics Course!</OptForm.Text>
      </OptForm>
    </Accordion>
  );
}
