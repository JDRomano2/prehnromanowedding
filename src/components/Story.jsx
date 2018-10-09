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
            We first met at The Hungarian Pastry Shop in Morningside Heights, NYC.
          </p>

          <Divider />

          <Header as='h2'>Our Engagement</Header>
          <p>
            Joe proposed to Sarah at the top of a day hike in Rocky Mountain National Park.
          </p>
        </Container>
      </div>
    );
  }
}

export default Story;
