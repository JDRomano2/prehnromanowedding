import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

import Profile from './Profile.jsx';

class Party extends React.Component {
  render() {
    return (
      <div>

        <h2 style={{fontFamily: 'Linux Libertine'}}>Wedding Party</h2>
        <div id="spacer" style={{ height: '50px' }} />

        <Grid>

          <Grid.Row centered>
            <Profile
              name='Breanna Liggan'
              role='Maid of Honor'
              relation='Friend of the Bride'
              image='bre-1'
            />

            <Profile
              name='Stanti Schönbächler IV'
              role='Best Man'
              relation='Friend of the Groom'
              image='stanti-1'
            />
          </Grid.Row>
          <div className='spacer' style={{ height: '50px' }} />

          <Grid.Row centered>
            <Profile
              name='Tess Romano'
              role='Bridesmaid'
              relation='Sister of the Groom'
              image='tess-1'
            />

            <Profile
              name='August Higgs'
              role='Groomsman'
              relation='Friend of the Groom'
              image='august-1'
            />
          </Grid.Row>
          <div className='spacer' style={{ height: '50px' }} />

          <Grid.Row centered>
            <Profile
              name='Caitlin Prehn'
              role='Bridesmaid'
              relation='Cousin of the Bride'
            />

            <Profile
              name='Harrison Keyes'
              role='Groomsman'
              relation='Friend of the Groom'
              image='harrison-1'
            />
          </Grid.Row>
          <div className='spacer' style={{ height: '50px' }} />

          <Grid.Row centered>
            <Profile
              name='SarahRose Hogan'
              role='Bridesmaid'
              relation='Friend of the Bride'
              image='sr-1'
            />

            <Profile
              name='Patrick Chessare'
              role='Groomsman'
              relation='Friend of the Groom'
              image='pat-1'
            />
          </Grid.Row>
          <div className='spacer' style={{ height: '50px' }} />

          <Grid.Row centered>
            <Profile
              name='Kimberly Lanier Kunze'
              role='Bridesmaid'
              relation='Cousin of the Bride'
            />

            <Profile
              name='Alexandre Yahi'
              role='Groomsman'
              relation='Friend of the Groom'
              image='alex-1'
            />
          </Grid.Row>

        </Grid>
      </div>
    );
  }
}

export default Party;
