import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class TopBar extends React.Component {
  render() {
    return (
      <Menu compact pointing secondary stackable id='topbar'>
        <Menu.Item as={Link} to='/'>
          HOME
        </Menu.Item>
        <Menu.Item as={Link} to='/story'>
          OUR STORY
        </Menu.Item>
        <Menu.Item as={Link} to='/venue'>
          VENUE
        </Menu.Item>
        <Menu.Item as={Link} to='/planning'>
          PLANNING
        </Menu.Item>
        <Menu.Item as={Link} to='/party'>
          WEDDING PARTY
        </Menu.Item>
        <Menu.Item as={Link} to='/registry'>
          REGISTRY
        </Menu.Item>
      </Menu>
    );
  }
}

export default TopBar;
