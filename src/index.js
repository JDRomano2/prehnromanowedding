import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import TopBar from './components/TopBar';
import Home from './components/Home';
import Story from './components/Story';
import Venue from './components/Venue';
import Party from './components/Party';
import Registry from './components/Registry';

//import './semantic/dist/semantic.min.js';
import './semantic/dist/semantic.min.css';
import './styles/style.css';

const App = () => (
  <div className='ui grid centered'>
      <BrowserRouter>
        <div style={{ width: '80%', display: 'inline-block'}}>
          <TopBar />
          <div className='spacer row' style={{ height: '100px' }} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/story" component={Story} />
            <Route exact path="/venue" component={Venue} />
            <Route exact path="/party" component={Party} />
            <Route exact path="/registry" component={Registry} />
          </Switch>
        </div>
      </BrowserRouter>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));