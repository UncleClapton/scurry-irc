// Module Imports
import React, { Component } from 'react';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import PropTypes from 'prop-types';
import thunkMiddleware from 'redux-thunk';


// Component Constants
import initialState from './initialState';
import reducers from './reducers';


// Component Constants
const StoreContext = React.createContext(null);



// The state of this component directly manages the global state accessible to all components in the DOM tree.
// All state members are used here, just not in a way ESLint can see.
/* eslint-disable react/no-unused-state */
export class AppStateProvider extends Component {
  static defaultProps = {
    state: initialState,
  }

  static propTypes = {
    state: PropTypes.object,
  }

  constructor (props) {
    super(props);

    this.store = createStore(reducers, props.state, composeWithDevTools(applyMiddleware(thunkMiddleware)));


    this.state = {
      state: this.store.getState(),
      dispatch: this.store.dispatch,
    };
  }

  componentDidMount () {
    this.unsubscribe = this.store.subscribe(() => {
      const oldState = this.state.storeState;
      const newState = this.store.getState();

      if (JSON.stringify(oldState) !== JSON.stringify(newState)) {
        this.setState({
          state: newState,
        });
      }
    });
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  render () {
    return (
      <StoreContext.Provider value={this.state}>
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}
/* eslint-enable react/no-unused-state */

export const AppStateConsumer = mapGlobalToProps => ComponentToWrap => props => (
  <StoreContext.Consumer>
    {context => {
      // mapGlobalToProps(context, ownProps)
      let newProps = null;

      if (typeof mapGlobalToProps === 'function') {
        newProps = {
          ...props,
          ...mapGlobalToProps(context, { ...props }),
        };
      }

      return (
        <ComponentToWrap {...(newProps || props)} />
      );
    }}
  </StoreContext.Consumer>
);
