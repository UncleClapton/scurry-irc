// Module Imports
import { hot } from 'react-hot-loader';
import React, { Fragment } from 'react';



// Component Imports
import ChannelMenu from 'Components/ChannelMenu';
import ChatWindow from 'Components/ChatWindow';
import TitleBar from 'Components/TitleBar';
import '../scss/app.scss';


const App = () => (
  <Fragment>
    <TitleBar />
    <div className="app-container" >
      <ChannelMenu />
      <ChatWindow />
    </div>

  </Fragment>
);


const HotApp = hot(module)(App);

export default App;
export { HotApp };
