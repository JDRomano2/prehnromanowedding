import React from 'react';
import { Image, Container, Header, Divider } from 'semantic-ui-react';

import loch from '../images/loch.png';

class Story extends React.Component {
  render() {
    return (
      <div>
        <Container text textAlign='left'>
          <Image src={loch} centered />
          <p style={{textAlign: 'center'}}>
            <i>
              The Loch Vale; Rocky Mountain National Park
            </i>
          </p>

          <Divider />

          <Header as='h2'>How We Met</Header>
          <p>
            On a cold day in February 2015, we met at The Hungarian Pastry Shop in Morningside Heights, NYC, after randomly matching on a dating app. We both played brass instruments in jazz bands, both had visited Japan, both lived in Harlem, and both were left handed. We knew we had to meet up again soon! We then planned to have a real first date at Yakitori Totto, in Midtown Manhattan, a week later.
          </p>

          <Divider />

          <Header as='h2'>Our Engagement</Header>
          <p>
            On September 11, 2018,
          </p>
        </Container>
      </div>
    );
  }
}

export default Story;
