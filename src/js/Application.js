// Module Imports
import { hot } from 'react-hot-loader';
import React, { Fragment } from 'react';



// Component Imports
import Component from 'Components/Component';
import TitleBar from 'Components/TitleBar';
import '../scss/app.scss';


class App extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Fragment>
        <TitleBar />
      </Fragment>
    );
  }
}


const HotApp = hot(module)(App);

export default App;
export { HotApp };
