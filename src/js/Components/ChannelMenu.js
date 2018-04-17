// Module Imports
import React from 'react';
import { bindActionCreators } from 'redux';





// Component Imports
import Button from 'Components/Button';
import { actions, connect } from 'Store';



const ChannelMenu = props => {
  const {
    activeChannel,
    channels,
  } = props;

  return (
    <div className="channel-menu">
      <label>channels</label>
      <ul className="channel-list">
        {
          channels.map(channel => (
            <li key={channel} className={`channel ${activeChannel === channel ? 'active' : ''}`}>
              <Button
                onClick={() => props.setActiveChannel(channel)}>
                {channel}
              </Button>
            </li>
          ))
        }
      </ul>
    </div>
  );
};





export default connect(({ state, dispatch }) => {
  const boundActions = bindActionCreators({
    setActiveChannel: actions.setActiveChannel,
  }, dispatch);

  const {
    activeChannel,
    channelList,
  } = state.channels;

  return {
    ...boundActions,
    activeChannel,
    channels: channelList,
  };
})(ChannelMenu);
