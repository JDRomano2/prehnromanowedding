import React from 'react';
import { Header, Divider, Container } from 'semantic-ui-react';

const Planning = ({}) => {
  return (
    <div>
      <Container text>
        <Header as='h2'>
          Accomodations
        </Header>
        <p>
          We are working on securing a block of rooms at a local hotel. Check back soon for more details!
        </p>

        <Divider />
        <Header as='h2'>
          Things to do in Kingston
        </Header>

        <Divider />
        <Header as='h2'>
          Transportation
        </Header>
        <p>
          Transportation will be provided between our hotel and both the ceremony venue and the reception venue. Check back as the date approaches for more information on timing, pickup and drop-off, and more!
        </p>
      </Container>
    </div>
  );
}

export default Planning;
