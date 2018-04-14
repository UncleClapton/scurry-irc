// Module Imports
import { remote } from 'electron';
import React, { Fragment } from 'react';





// Component Imports
import BurgerSVG from './SVG/Burger';
import Component from './Component';
import CloseSVG from './SVG/Close';
import MaximizeSVG from './SVG/Maximize';
import MinimizeSVG from './SVG/Minimize';
import UnmaximizeSVG from './SVG/Unmaximize';





class TitleBar extends Component {
  _handleControlClick (event) {
    const {
      name,
    } = event.target;

    const curWindow = remote.getCurrentWindow();

    switch (name) {
      case 'minimize':
        curWindow.minimize();
        break;
      case 'resize':
        if (curWindow.isMaximized()) {
          curWindow.unmaximize();
        } else {
          curWindow.maximize();
        }
        break;
      case 'close':
        curWindow.close();
        break;
      case 'menu':
        remote.Menu.getApplicationMenu().popup(25, 20);
        break;
      default:
        break;
    }



    this._updateState();
  }

  _updateState () {
    const curWindow = remote.getCurrentWindow();

    this.setState({
      closable: curWindow.isClosable(),
      minimizable: curWindow.isMinimizable(),
      maximizable: curWindow.isMaximizable(),
      maximized: curWindow.isMaximized(),
    });
  }

  constructor (props) {
    super(props);


    this._bindMethods([
      '_handleControlClick',
      '_updateState',
    ]);

    const curWindow = remote.getCurrentWindow();

    curWindow.on('minimize', () => this._updateState());
    curWindow.on('maximize', () => this._updateState());
    curWindow.on('unmaximize', () => this._updateState());

    this.state = {
      closable: curWindow.isClosable(),
      minimizable: curWindow.isMinimizable(),
      maximizable: curWindow.isMaximizable(),
      maximized: curWindow.isMaximized(),
    };
  }

  render () {
    const {
      closable,
      minimizable,
      maximizable,
      maximized,
    } = this.state;

    const showControls = minimizable || maximizable || closable;
    const showMiniMax = minimizable || maximizable;

    return (
      <div className="titlebar">
        <div className="titlebar-menu">
          <button
            name="menu"
            onClick={this._handleControlClick}
            className="titlebar-control menu">
            <BurgerSVG />
          </button>
        </div>
        <div className="titlebar-title">
          <div>Scurry</div>
        </div>
        {showControls ? (
          <div className="window-control-container">
            {showMiniMax ? (
              <Fragment>
                <button
                  name="minimize"
                  disabled={!maximizable}
                  onClick={this._handleControlClick}
                  className="titlebar-control minimize">
                  <MinimizeSVG />
                </button>
                <button
                  name="resize"
                  disabled={!maximizable}
                  onClick={this._handleControlClick}
                  className="titlebar-control resize">
                  { maximized ? (
                    <UnmaximizeSVG />
                  ) : (
                    <MaximizeSVG />
                  )}
                </button>
              </Fragment>
            ) : null}
            <button
              disabled={!closable}
              onClick={this._handleControlClick}
              className="titlebar-control close">
              <CloseSVG />
            </button>
          </div>
        ) : null }
      </div>
    );
  }
}


export default TitleBar;
