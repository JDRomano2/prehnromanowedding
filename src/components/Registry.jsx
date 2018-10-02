import React from 'react';
import { Container, Header, Divider } from 'semantic-ui-react';

class Registry extends React.Component {
  render() {
    return (
      <div>
        <Container text>
          <p style={{ textAlign: 'left' }}>
            If you would like to leave us a wedding gift, we have prepared a wedding registry, as well as a honeymoon fund. Any contributions to either of these are greatly appreciated, but your attendance at our wedding celebration is enough of a gift!
          </p>

          <Divider />

          <Header as='h2'>
            Gift Registry
          </ Header>
          <p>

          </p>

          <Divider />

          <Header as='h2'>
            Honeymoon Registry
          </Header>
          <p>

          </p>
        </Container>
      </div>
    );
  }
}

export default Registry;
