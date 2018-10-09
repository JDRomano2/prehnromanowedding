import React from 'react';
import { Container, Header, Divider, Link } from 'semantic-ui-react';

class Registry extends React.Component {
  render() {
    return (
      <div>
        <Container text>
          <Header as='h2'>
            Gift/Honeymoon Registry
          </ Header>
          <p>
            <a href="https://registry.theknot.com/sarah-prehn-joseph-romano-august-2019-ny/28713339">
              https://registry.theknot.com/sarah-prehn-joseph-romano-august-2019-ny/28713339
            </a>
          </p>
        </Container>
      </div>
    );
  }
}

export default Registry;
