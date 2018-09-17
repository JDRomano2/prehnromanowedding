import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class TopBar extends React.Component {
  render() {
    return (
      <Menu compact pointing secondary id='topbar'>
        <Menu.Item as={Link} to='/'>
          Home
        </Menu.Item>
        <Menu.Item as={Link} to='/story'>
          Our Story
        </Menu.Item>
        <Menu.Item as={Link} to='/venue'>
          Venue
        </Menu.Item>
        <Menu.Item as={Link} to='/party'>
          Wedding Party
        </Menu.Item>
        <Menu.Item as={Link} to='/registry'>
          Registry
        </Menu.Item>
      </Menu>
    );
  }
}

export default TopBar;
