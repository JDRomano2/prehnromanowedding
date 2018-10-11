import React from 'react';
import { Divider, Container, Image } from 'semantic-ui-react';

import stPeters from '../images/st-peters-1.jpg';
import senateGarage from '../images/senate-garage-1.jpg';

class Venue extends React.Component {
  render() {
    return(
      <div>
        <Container text>
          <h2>Ceremony</h2>
          <Image src={stPeters} centered style={{width: '800px'}} />
          <p>
            St. Peter's Catholic Church
          </p>
          <p>
            1017 Keator Ave, Rosendale, NY 12472
          </p>

          <Divider />

          <h2>Reception</h2>
          <Image src={senateGarage} centered style={{width: '800px'}} />
          <p>
            Senate Garage
          </p>
          <p>
            4 N Front Street, Kingston, NY 12401
          </p>
        </Container>
      </div>
    );
  }
}

export default Venue;
