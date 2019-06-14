import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Header, Divider } from 'semantic-ui-react';

import TopBar from './components/TopBar.jsx';
import Home from './components/Home.jsx';
import Story from './components/Story.jsx';
import Venue from './components/Venue.jsx';
import Planning from './components/Planning.jsx';
import Party from './components/Party.jsx';
import Registry from './components/Registry.jsx';

// import './semantic/dist/semantic.min.js';
import './semantic/dist/semantic.min.css';
import './styles/style.css';

import './images/favicon.ico';

// TODO: https://dev.to/nburgess/creating-a-react-app-with-react-router-and-an-express-backend-33l3
// TODO: Use passport.js for auth

const App = () => (
  <div className='ui grid centered'>
    <BrowserRouter>
      <div id='topdiv'>
        <p id='toptext'>
          THE WEDDING OF
        </p>
        <Header as='h1' id='topname'>
          Sarah Elizabeth Prehn
        </Header>
        <p id='toptext'>
          AND
        </p>
        <Header as='h1' id='topname'>
          Joseph Daniel Romano
        </Header>
        {/* <Divider hidden style={{ height: '15px' }} /> */}
        <TopBar />
        {/* <div className='spacer row' style={{ height: '15px' }} /> */}
        <Divider hidden style={{ height: '15px' }} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/story" component={Story} />
          <Route exact path="/venue" component={Venue} />
          <Route exact path="/planning" component={Planning} />
          <Route exact path="/party" component={Party} />
          <Route exact path="/registry" component={Registry} />
        </Switch>
        <Divider hidden section style={{ marginTop: '50px' }} />
      </div>
    </BrowserRouter>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
