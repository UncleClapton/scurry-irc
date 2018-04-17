// Module Imports
import React from 'react';





// Component Imports
import { connect } from 'Store';



const ChannelMenu = () => (
  <div className="chat-window" />
);





export default connect(({ state }) => {
  const {
    activeChannel,
  } = state.channels;

  return {
    activeChannel,
  };
})(ChannelMenu);
