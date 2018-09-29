import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Image, Container } from 'semantic-ui-react';

//import png from '../images/wireframe/square-image.png';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      role: this.props.role,
      relation: this.props.relation,
      image: this.props.image
    }
  }

  render() {
    return (
      <Grid.Column width={6}>
        <Image
          src={require(`../images/party/${this.state.image}.png`)}
          centered
          rounded
          style={{ width: '259px' }}
        />

        <div className='wrapper'>
          <Container textAlign='center' style={{fontFamily: 'Linux Libertine'}}>
            {this.state.name}
          </Container>

          <Container textAlign='center' style={{fontFamily: 'Linux Libertine'}}>
            {this.state.role}
          </Container>

          <Container textAlign='center' style={{fontFamily: 'Linux Libertine'}}>
            <i>{this.state.relation}</i>
          </Container>
        </div>
      </Grid.Column>
    );
  }
}

Profile.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  relation: PropTypes.string,
  image: PropTypes.string
};

Profile.defaultProps = {
  name: '<NAME>',
  role: '<ROLE>',
  relation: '<RELATION>',
  image: 'square-image'
};

export default Profile;
