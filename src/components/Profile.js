import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

import png from '../images/wireframe/square-image.png';

class Profile extends React.Component {
  render() {
    return (
      <Grid.Column width={6}>
        <Image src={png} centered />
      </Grid.Column>
    );
  }
}

export default Profile;
