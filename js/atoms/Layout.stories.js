import React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { H1, H2, P, Label, Hint } from './Typography';
import Card from './Card';
import { Page, Row, Col } from './Layout';


storiesOf('Layout', module)
  // .addDecorator(getStory =>
  //   <Page>
  //     <Card>
  //       {getStory()}
  //     </Card>
  //   </Page>
  // )
  .add('Overview', () =>
    <Page>
      <Row>
        <Col>
          <Card>
            <H1>Typography H1</H1>
            <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget ornare elit. Praesent et turpis dictum, imperdiet enim non, pulvinar enim.</P>
            <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget ornare elit. Praesent et turpis dictum, imperdiet enim non, pulvinar enim.</P>
          </Card>
        </Col>
        <Col>
          <Card>
            <H1>Typography H1</H1>
            <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget ornare elit. Praesent et turpis dictum, imperdiet enim non, pulvinar enim.</P>
            <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget ornare elit. Praesent et turpis dictum, imperdiet enim non, pulvinar enim.</P>
          </Card>
        </Col>
      </Row>
    </Page>
  )
  .add('Using flex props', () =>
    <Page>
      <Row>
        <Col>
          <Card>
            <H1>Typography H1</H1>
            <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget ornare elit. Praesent et turpis dictum, imperdiet enim non, pulvinar enim.</P>
            <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget ornare elit. Praesent et turpis dictum, imperdiet enim non, pulvinar enim.</P>
          </Card>
        </Col>
        <Col flex={2}>
          <Card>
            <H1>Typography H1</H1>
            <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget ornare elit. Praesent et turpis dictum, imperdiet enim non, pulvinar enim.</P>
            <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget ornare elit. Praesent et turpis dictum, imperdiet enim non, pulvinar enim.</P>
          </Card>
        </Col>
      </Row>
    </Page>
  );
