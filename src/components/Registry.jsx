import React from 'react';
import { Container, Header, Divider, Link } from 'semantic-ui-react';

class Registry extends React.Component {
  render() {
    return (
      <div>
        <Container text>
          <Divider hidden />
          <Header as='h2'>
            Gift Registry
          </ Header>
          <p>
            <a href="https://www.amazon.com/wedding/share/prehnromanowedding" target='__blank'>
              https://www.amazon.com/wedding/share/prehnromanowedding
            </a>
          </p>

          <Divider hidden />

          <p>
            <i>-or-</i>
          </p>

          <Divider hidden />

          <Header as='h2'>
            Honeymoon Registry
          </Header>
          <p>
            <a className="zola-registry-embed"
              href="http://www.zola.com/registry/josephandsarahaugust10"
              data-registry-key="Sarah & Joe's Honeymoon">
                http://www.zola.com/registry/josephandsarahaugust10
            </a>
          </p>
        </Container>
      </div>
    );
  }
}

export default Registry;
