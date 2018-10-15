import React from 'react';
import { Header, Image, Divider } from 'semantic-ui-react';

import bridge from '../images/bridge.png';
import woods from '../images/woods.png';

class Home extends React.Component {
  render () {
    return(
      <div>
        <Header as='h2'>
          August 10, 2019
        </Header>
        <p style={{fontSize: '16pt'}}>
          <i>Kingston, New York</i>
        </p>

        <Divider hidden />
        <Image src={bridge} centered style={{width: '800px'}} />

        <Divider text style={{marginTop: '36px', marginBottom: '36px'}}/>

        <Image src={woods} centered style={{width: '800px'}} />
      </div>
    );
  }
}

export default Home;
