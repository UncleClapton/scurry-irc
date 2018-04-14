// Module imports
import { Children, Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { connect as reduxConnect } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';





// Component imports
// import IrcService from 'Classes/IrcService';
import actions from './actions';
import actionTypes from './actionTypes';
import initialState from './initialState';
import reducers from './reducers';





// Component Constants
const initStore = (state = initialState) => createStore(reducers, state, composeWithDevTools(applyMiddleware(thunkMiddleware)));





// Context Management
class AppStateProvider extends Component {
  constructor (props, context) {
    super(props, context);

    this.store = initStore(props.state);
    // this.irc = new IrcService(this.store);
  }

  getChildContext () {
    return {
      storeSubscription: null,
      store: this.store,
      // irc: this.irc,
    };
  }

  render () {
    return Children.only(this.props.children);
  }
}

const AppStateConnector = (
  mapStateToProps,
  mapDispatchToProps,
  mapIrcToProps,
  ...reduxConnectArgs
) => ComponentToWrap => {
  const IrcMappedComponent = (props/*, context*/) => {
    const mappedIrcProps = typeof mapIrcToProps === 'function' ? mapIrcToProps(/*context.irc*/ {}, props) : {};

    const newProps = {
      ...props,
      ...mappedIrcProps,
    };

    return (<ComponentToWrap {...newProps} />);
  };

  return reduxConnect(mapStateToProps, mapDispatchToProps, ...reduxConnectArgs)(IrcMappedComponent);
};


export {
  actions,
  actionTypes,
  AppStateConnector as connect,
  AppStateProvider as Provider,
  initialState,
  initStore,
};
