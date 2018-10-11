import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Header, Divider } from 'semantic-ui-react';

import TopBar from './components/TopBar.jsx';
import Home from './components/Home.jsx';
import Story from './components/Story.jsx';
import Venue from './components/Venue.jsx';
import Party from './components/Party.jsx';
import Registry from './components/Registry.jsx';

//import './semantic/dist/semantic.min.js';
import './semantic/dist/semantic.min.css';
import './styles/style.css';

const App = () => (
  <div className='ui grid centered'>
      <BrowserRouter>
        <div id='topdiv'>
          <p id='toptext'>
            <i>The wedding of</i>
          </p>
          <Header as='h1' id='topname'>
            Sarah Elizabeth Prehn
          </Header>
          <p id='toptext'>
            <i>and</i>
          </p>
          <Header as='h1' id='topname'>
            Joseph Daniel Romano
          </Header>
          <Divider hidden style={{ height: '15px' }} />
          <TopBar />
          <Divider hidden style={{ height: '75px' }} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/story" component={Story} />
            <Route exact path="/venue" component={Venue} />
            <Route exact path="/party" component={Party} />
            <Route exact path="/registry" component={Registry} />
          </Switch>
          <Divider hidden section />
        </div>
      </BrowserRouter>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));