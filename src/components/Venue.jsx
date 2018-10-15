import React from 'react';
import { Header, Divider, Container, Image } from 'semantic-ui-react';

import stPeters from '../images/st-peters-1.jpg';
import senateGarage from '../images/senate-garage-1.jpg';

class Venue extends React.Component {
  render() {
    return(
      <div>
        <Container text>
          <Header as='h2'>Ceremony</Header>
          <Image src={stPeters} centered style={{width: '800px'}} />
          <Divider hidden />
          <Header as='h3'>
            St. Peter's Catholic Church
          </Header>
          <p>
            <i>Saturday, August 10, 2019 at 2:00 p.m.</i>
          </p>
          <p>
            <a href="https://goo.gl/maps/SsiGanfLLNx" target='_blank'>1017 Keator Ave, Rosendale, NY 12472</a>
          </p>

          <Divider style={{ marginTop: '36px' }} />

          <Header as='h2'>Reception</Header>
          <Image src={senateGarage} centered style={{width: '800px'}} />
          <Divider hidden />
          <Header as='h3'>
            Senate Garage
          </Header>
          <p>
            <i>Cocktail hour at 5:30 p.m., followed by dinner at 7:00 p.m.</i>
          </p>
          <p>
            <a href="https://goo.gl/maps/hHX3WnEzgXK2" target='_blank'>4 N Front Street, Kingston, NY 12401</a>
          </p>
        </Container>
      </div>
    );
  }
}

export default Venue;
