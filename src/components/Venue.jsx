import React from 'react';
import { Divider, Container, Image, Segment } from 'semantic-ui-react';

import stPeters from '../images/st-peters-1.jpg';
import senateGarage from '../images/senate-garage-1.jpg';

class Venue extends React.Component {
  render() {
    return(
      <div>
        <Container text>
          <h2>Ceremony</h2>
          <Image src={stPeters} centered style={{width: '800px'}} />
          <Divider hidden />
          <p>
            St. Peter's Catholic Church
          </p>
          <p>
            <i>Saturday, August 10, 2019 at 2:00 p.m.</i>
          </p>
          <p>
            <a href="https://goo.gl/maps/SsiGanfLLNx" target='_blank'>1017 Keator Ave, Rosendale, NY 12472</a>
          </p>

          <Divider style={{ marginTop: '36px' }} />

          <h2>Reception</h2>
          <Image src={senateGarage} centered style={{width: '800px'}} />
          <Divider hidden />
          <p>
            Senate Garage
          </p>
          <p>
            <i>Cocktail hour at 6:00 p.m., followed by dinner at 7:30 p.m.</i>
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
