import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

import Profile from './Profile';

import png from '../images/wireframe/square-image.png';

class Party extends React.Component {
  render() {
    return (
      <div>

        <h1>Coming soon!</h1>
        <div id="spacer" style={{ height: '50px' }} />

        <Grid>

          <Grid.Row centered>
            <Profile />
            <Profile />
          </Grid.Row>
          <div className='spacer' style={{ height: '50px' }} />

          <Grid.Row centered>
            <Profile />
            <Profile />
          </Grid.Row>
          <div className='spacer' style={{ height: '50px' }} />

          <Grid.Row centered>
            <Profile />
            <Profile />
          </Grid.Row>
          <div className='spacer' style={{ height: '50px' }} />

          <Grid.Row centered>
            <Profile />
            <Profile />
          </Grid.Row>
          <div className='spacer' style={{ height: '50px' }} />

          <Grid.Row centered>
            <Profile />
            <Profile />
          </Grid.Row>

        </Grid>
      </div>
    );
  }
}

export default Party;
