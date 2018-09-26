import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

import png from '../images/wireframe/square-image.png';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "John Smith",
      role: "Groomsman",
      relation: "Friend of the groom",
    }
  }

  render() {
    return (
      <Grid.Column width={6}>
        <Image src={png} centered />

        <div className='wrapper'>
          <h3>{this.state.name}</h3>
          <h4>{this.state.role}</h4>
          <h4>{this.state.relation}</h4>
        </div>
      </Grid.Column>
    );
  }
}

export default Profile;
