import React from 'react';
import { Header, Image } from 'semantic-ui-react';

import senateGarage from '../images/senate-garage-1.jpg';
import bridge from '../images/bridge.png';

class Home extends React.Component {
  render () {
    return(
      <div>
        <Header as='h2'>
          August 10, 2019
        </Header>
        <Image src={bridge} centered style={{width: '800px'}} />
      </div>
    );
  }
}

export default Home;
