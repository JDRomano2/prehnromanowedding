import React from 'react';
import { Divider, Container } from 'semantic-ui-react';

class Venue extends React.Component {
  render() {
    return(
      <div>
        <Container text>
          <h2>Ceremony</h2>
          <p>
            St. Peter's Catholic Church
          </p>
          <p>
            1017 Keator Ave, Rosendale, NY 12472
          </p>

          <Divider />

          <h2>Reception</h2>
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
